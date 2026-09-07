export const WHATSAPP_LINK = 'https://wa.me/6283897317974?text=Halo%20Gusti%2C%20saya%20mau%20bahas%20project%20visual%20untuk%20brand%20saya.';

export const SOCIAL_LINKS = {
  email: 'gustiansyaht@gmail.com',
  instagram: 'https://instagram.com/',
  linkedin: 'https://linkedin.com/'
};

export function buildWhatsAppUrl(message: string): string {
  const base = WHATSAPP_LINK.split('?')[0];
  return `${base}?text=${encodeURIComponent(message)}`;
}
