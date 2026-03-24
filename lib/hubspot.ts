'use server'

type HubSpotField = { name: string; value: string }

export async function submitToHubSpot(
  fields: Record<string, string>,
  formType: 'strategy' | 'contact'
): Promise<{ success: boolean; error?: string }> {
  const portalId = process.env.HUBSPOT_PORTAL_ID
  const formId =
    formType === 'strategy'
      ? process.env.HUBSPOT_STRATEGY_FORM_ID
      : process.env.HUBSPOT_CONTACT_FORM_ID

  // Graceful degradation in dev — never block the user
  if (!portalId || !formId) {
    console.log('[HubSpot DEV] env vars missing — skipping submission:', fields)
    return { success: true }
  }

  const payload = {
    fields: Object.entries(fields)
      .filter(([, v]) => v !== '')
      .map(([name, value]): HubSpotField => ({ name, value })),
    context: {
      pageUri: `https://upstackstudio.com/${formType === 'strategy' ? 'strategy-session' : 'contact'}`,
      pageName: formType === 'strategy' ? 'Strategy Session' : 'Contact',
    },
  }

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )
    if (!res.ok) {
      const text = await res.text()
      console.error('[HubSpot] Submission failed:', res.status, text)
      return { success: false, error: 'Submission failed. Please try again.' }
    }
    return { success: true }
  } catch (err) {
    console.error('[HubSpot] Network error:', err)
    return { success: false, error: 'Network error. Please try again.' }
  }
}
