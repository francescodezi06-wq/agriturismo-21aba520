// TEMPORARY STUB: real templates will be scaffolded once the email sender domain is configured.
// Kept to preserve the import path so the booking flow works even without email delivery.

type Options = {
  templateData?: Record<string, unknown>;
  idempotencyKey?: string;
};

export async function sendTemplateEmail(
  template: string,
  to: string,
  options: Options = {},
): Promise<{ sent: false; reason: "not_configured" }> {
  console.log("[email:stub] would send", { template, to, options });
  return { sent: false, reason: "not_configured" };
}
