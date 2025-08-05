/**
 * EmailJS Configuration for Book Demo functionality
 * 
 * To set up EmailJS:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template for demo bookings with these variables:
 *    - {{to_email}}
 *    - {{subject}}
 *    - {{booking_date}}
 *    - {{booking_time}}
 *    - {{meeting_reason}}
 *    - {{sales_rep}}
 *    - {{message}}
 * 4. Set environment variables in .env.local:
 *    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
 *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
 *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
 */

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', 
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

export const isEmailjsConfigured = () => {
  return emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey;
};