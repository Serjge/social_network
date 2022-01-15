import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6455f709-1e25-404c-a49d-c20b867901e8"
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}` )
            .then(response => response.data)
    },
    follow(id: string) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unFollow(id:string){
       return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const authApi = {
    getAuth() {
      return  instance.get(`auth/me`).then(response => response.data)
    }
}