import axios from "axios";
import { HomeArrayModel } from "../models/redux-models";

// eslint-disable-next-line import/no-anonymous-default-export
// export default () => {
    //     return axios.create({
    //         baseURL: 'https://dev.everdays.com/v2/public/providers?state=mi'
    //     })
    // }
    
    // https://dev.everdays.com/v2/public/providers?state=mi


async function getAllHomes() {
    try {
        const {data, status} = await axios.get<HomeArrayModel>(
            'https://dev.everdays.com/v2/public/providers?state=mi',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        console.log(JSON.stringify(data, null, 4));
        console.log('response status is: ', status);

        return data;
        
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export default getAllHomes()