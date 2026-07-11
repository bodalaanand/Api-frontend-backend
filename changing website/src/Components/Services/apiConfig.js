const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api/";
export const API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, '');
export const AUTH_LOGIN_URL = `${API_BASE_URL}/auth/login/`;
export const AUTH_LOGOUT_URL = `${API_BASE_URL}/auth/logout/`;
export const HACKATHON_REGISTER_URL = import.meta.env.VITE_HACKATHON_REGISTER_URL || `${API_BASE_URL}/team/register`;
