import { instance } from './instanceApi';

import { CommonResponseType, Photos, ProfileType } from 'type';

export const profileAPI = {
  authMe(userId: string) {
    return instance.get<ProfileType>(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId: string) {
    return instance
      .get<{ status: string }>(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateStatusApi(status: string) {
    return instance.put<CommonResponseType<{}>>(`profile/status`, { status });
  },
  savePhoto(file: string | Blob) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put<CommonResponseType<{ photos: Photos }>>(
      `profile/photo`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    );
  },
};
