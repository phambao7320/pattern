import axiosClient from '@/shared/axiosClient'

const getListAllObjects = () => {
    return axiosClient.get('').then((res) => res)
}

const getDetailObject = (id: string) => {
    return axiosClient.get(`/${id}`).then((res) => res)
}

const createNewObjects = (data: any) => {
    return axiosClient.post('/', data, {}).then((res) => res)
}

export { getDetailObject, getListAllObjects, createNewObjects }
