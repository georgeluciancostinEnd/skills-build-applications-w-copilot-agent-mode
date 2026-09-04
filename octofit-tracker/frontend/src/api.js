const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api';

export const isCodespaceConfigured = Boolean(codespaceName);

export function getItems(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.items)) return payload.items;
  return [];
}

export async function fetchItems(resource) {
  const endpoint = resource.startsWith('http') ? resource : `${apiBaseUrl}/${resource}/`;
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error(`Unable to load ${resource}`);
  return getItems(await response.json());
}