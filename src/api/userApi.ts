import {instance} from "./instanceApi";

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
