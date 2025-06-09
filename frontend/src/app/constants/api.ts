export const API_PATH = {
  USER: {
    SIGNUP: "/api/users/signup",
    CHECK_EMAIL: "/api/users/check-email",
    CHECK_NICKNAME: "/api/users/check-nickname",
    LOGIN: "/api/users/login",
    DELETE: (id: number) => `/api/users/${id}`,
  },
};
