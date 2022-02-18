import { instance } from './instanceApi';

export const authApi = {
  authMe() {
    return instance.get(`auth/me`).then(response => response.data);
  },
  loginMe(email: string, password: string, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then(response => response.data);
  },
  logoutMe() {
    return instance.delete(`auth/login`).then(response => response.data);
  },
};
