const TOKEN_STORAGE_KEY = "authorization_token";

const saveTokenInLocalStorage = (token: string): void => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const getAuthToken = (): string => {
  return localStorage.getItem(TOKEN_STORAGE_KEY) || '';
};
