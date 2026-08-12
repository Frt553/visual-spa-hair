export const WHATSAPP_PHONE = "5545998361763";
export const WHATSAPP_DISPLAY = "(45) 99836-1763";

export function waLink(text?: string): string {
  const base = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}`;
  return text ? `${base}&text=${encodeURIComponent(text)}` : base;
}
