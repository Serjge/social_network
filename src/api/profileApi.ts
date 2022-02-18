import { instance } from './instanceApi';

export const profileAPI = {
  authMe(userId: string) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`).then(response => response.data);
  },
  updateStatusApi(status: string) {
    return instance.put(`profile/status`, { status }).then(response => response);
  },
};
