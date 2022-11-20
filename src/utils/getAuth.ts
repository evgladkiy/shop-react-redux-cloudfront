const TOKEN_STORAGE_KEY = "authorization_token";

const saveTokenInLocalStorage = (token: string): void => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const getAuthToken = (): string => {
  let token: string | null = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (!token) {
    token = "Basic ZXZnbGFka2l5OlRFU1RfUEFTU1dPUkQ=";
    saveTokenInLocalStorage(token);
  }

  return token;
};
