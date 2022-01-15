import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6455f709-1e25-404c-a49d-c20b867901e8"
    }
});
export const profileAPI = {
    authMe(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)

    },

}