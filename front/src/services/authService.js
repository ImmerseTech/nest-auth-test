import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/auth/',
  });

export const register = async (body) => {
    try {
        const { data }= await api.post('register', body)
        if (data.status === 'Error') return alert(data.message)
        await localStorage.setItem('name', data.name)
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const login = async (body) => {
    try {
        const { data } = await api.post('login', body)
        if (data.status === 'Error') return alert(data.message)
        return data;
    } catch (error) {
        console.log(error)
    }
}