import axiosClient from '@/shared/axiosClient'

const getListAllObjects = () => {
    return axiosClient.get('/todos').then((res) => res)
}

const getDetailObject = (id: string) => {
    return axiosClient.get(`todos/${id}`).then((res) => res)
}

const createNewObjects = (data: any) => {
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    }
    return axiosClient.post('/todos', data, { ...headers }).then((res) => res)
}

export { getDetailObject, getListAllObjects, createNewObjects }
