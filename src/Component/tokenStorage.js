

const TOKEN_KEY = "authToken";

export function storeToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function retrieveToken() {
    return localStorage.getItem(TOKEN_KEY) || null;
}

export function updateToken(newToken) {
    localStorage.setItem(TOKEN_KEY, newToken);
}
