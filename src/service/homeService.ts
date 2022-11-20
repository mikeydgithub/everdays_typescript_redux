import Api from "./Api";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    async getAllHomes(){
        var response = await Api().get('homes');
        return response.data
    },
}