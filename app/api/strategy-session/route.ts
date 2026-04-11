import { NextRequest, NextResponse } from 'next/server'
import { submitToHubSpot } from '@/lib/hubspot'

type RoutingBucket = 'hot' | 'warm' | 'ambivalent' | 'cold'

function scoreToBucket(score: number): RoutingBucket {
  if (score >= 8) return 'hot'
  if (score >= 6) return 'warm'
  if (score >= 4) return 'ambivalent'
  return 'cold'
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, string>

    const motivationScore = Number(body.motivation) || 5
    const bucket = scoreToBucket(motivationScore)

    // Submit to HubSpot — gracefully degrades when env vars are missing in dev
    const hsResult = await submitToHubSpot({ ...body, lead_bucket: bucket }, 'strategy')

    if (!hsResult.success) {
      return NextResponse.json({ success: false, error: hsResult.error }, { status: 500 })
    }

    // TODO: Slack webhook — notify channel for hot + warm leads
    // Trigger when: bucket === 'hot' || bucket === 'warm'
    // Add env var: SLACK_STRATEGY_WEBHOOK_URL
    // Payload shape:
    //   text: `*New ${bucket.toUpperCase()} lead* — ${body.firstname} ${body.lastname ?? ''} (${body.company})`
    //   blocks: [pain summary, email, motivation score, budget, timeline]
    // Implementation:
    //   const webhookUrl = process.env.SLACK_STRATEGY_WEBHOOK_URL
    //   if (webhookUrl && (bucket === 'hot' || bucket === 'warm')) {
    //     await fetch(webhookUrl, { method: 'POST', body: JSON.stringify({ text: ... }) })
    //   }

    // TODO: Transactional email — nurture sequence for ambivalent + cold leads
    // Trigger when: bucket === 'ambivalent' || bucket === 'cold'
    // Add env var: RESEND_API_KEY
    // Use Resend (or trigger HubSpot workflow via deal stage)
    // Template: "You're closer than you think" — educational, no hard sell
    // Recommended approach: tag the HubSpot contact with lead_bucket, then trigger a
    //   workflow in HubSpot based on that property value — no additional env vars needed.
    // Implementation stub:
    //   if (bucket === 'ambivalent' || bucket === 'cold') {
    //     // Option A: HubSpot workflow (preferred) — tag already set above via lead_bucket
    //     // Option B: Resend direct send
    //     //   await resend.emails.send({ to: body.email, subject: '...', html: '...' })
    //   }

    return NextResponse.json({ success: true, bucket })
  } catch (err) {
    console.error('[API] /api/strategy-session error:', err)
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}
