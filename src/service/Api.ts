import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return axios.create({
        baseURL: 'https://dev.everdays.com/v2/public/providers?state=mi'
    })
}

// https://dev.everdays.com/v2/public/providers?state=mi
// https://jsonplaceholder.typicode.com