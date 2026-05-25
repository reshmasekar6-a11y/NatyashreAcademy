const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export async function fetchSiteContent() {
  const response = await fetch(`${API_BASE_URL}/content`);
  if (!response.ok) {
    throw new Error('Unable to load site content.');
  }
  return response.json();
}

export async function submitInquiry(payload) {
  const response = await fetch(`${API_BASE_URL}/inquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || 'Unable to submit inquiry.');
    error.details = data.errors || {};
    throw error;
  }

  return data;
}
