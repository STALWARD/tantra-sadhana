import { FormData } from '@/components/mailer';

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // This automatically packages and ships gRecaptchaToken
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to send email.');
  }

  alert(result.message);
  return result;
}
