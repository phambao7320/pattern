import axios from 'axios'

const singletonEnforcer = Symbol()

const baseURL = 'https://jsonplaceholder.typicode.com/'

class AxiosClient {
    axiosClient: any
    static axiosClientInstance: AxiosClient

    constructor(enforcer: any) {
        if (enforcer !== singletonEnforcer) {
            throw new Error('Cannot initialize Axios client single instance')
        }
        this.axiosClient = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
    }

    static get instance() {
        if (!this.axiosClientInstance) {
            this.axiosClientInstance = new AxiosClient(singletonEnforcer)
        }
        return this.axiosClientInstance
    }

    get = async (resource: string) => {
        return this.axiosClient.get(resource)
    }

    post = async (resource: string, data: any, config = {}) => {
        return this.axiosClient.post(resource, data, config)
    }
}

export default AxiosClient.instance
