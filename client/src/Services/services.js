import Client from './api'


export const getPokemons = async(page, limit)=>{
    try {
        const res = Client.get(`pokemon?limit=${limit}&offset=${page}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}