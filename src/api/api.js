export const getApiUrl = (endpoint) => {
  const baseUrl =
    window.location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://crm-system-theta-sooty.vercel.app';

  return `${baseUrl}${endpoint}`;
};
