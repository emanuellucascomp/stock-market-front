import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:5000/'

export function getStock(stock){
    return axios.get(BASE_URL + '/stock',{
        params: {
            symbol: stock
        }
    })
}

export function searchStock(stock){
    return axios.get(BASE_URL + '/search',{
                        params: {
                            keywords: stock
                        }
                    })
                .then(response => { return response.data })

}
