import axios from 'axios'
axios.defaults.baseURL='http://localhost:8090'
export default{
    post(url,params={}) {
        let{isLoading=true}=params;
        return axios({
            headers:{
            'Content-Type':'application/json;charset=UTF-8',
            'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJoencifQ.YqWDSsPa_2FLTb9Zh2-UWmjq4tpus5Yiz_MHVe8etaI'
            },
            method:'post',
            url:url,
            data: params,
            timeout:30000,
            isLoading,
            responseType:"json",
        })
    }
}