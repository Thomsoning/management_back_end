import axios from 'axios'
//开发环境
//axios.defaults.baseURL='http://localhost:8090'
//生成环境
axios.defaults.baseURL='http://49.233.188.52:8090'
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