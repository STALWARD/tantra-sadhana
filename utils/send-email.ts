import { FormData } from '@/components/mailer';

export function sendEmail(data: FormData): void {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      // Handles both success messages and returned API error messages gracefully
      if (response.error) {
        alert(response.error);
      } else {
        alert(response.message);
      }
    })
    .catch((err) => {
      alert(err);
    });
}
