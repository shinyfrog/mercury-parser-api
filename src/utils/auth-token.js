const secretTokens = [
  'F794A060-946C-4317-A01B-A50CD5EA8D3C',
  'C93E2FFA-D494-4F7F-904C-2EE20EADE6CB',
];

export default function isAuthenticated(headers) {
  for (let index = 0; index < secretTokens.length; index += 1) {
    if (headers['x-api-key'].includes(secretTokens[index])) {
      return true;
    }
  }

  return false;
}
