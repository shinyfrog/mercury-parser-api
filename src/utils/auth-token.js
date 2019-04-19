const secretToken = 'F794A060-946C-4317-A01B-A50CD5EA8D3C';

export default function isAuthenticated(headers) {
  return headers['x-api-key'].includes(secretToken);
}
