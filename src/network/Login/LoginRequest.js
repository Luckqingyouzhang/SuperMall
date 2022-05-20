import axios from 'axios'
export function LoginRequest (config) {
  //创建axios 实例 
  const instance = axios.create({
    method: 'post',
    baseURL: "http://192.168.1.4:8080/api/",
    timeout: 5000

    //http://123.207.32.32:8000
  })
  //2 axios 拦截器 
  //2.1 拦截器的使用 
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求
    // 比如每次发送网络请求时，都希望在界面中显示一个请求的图标/ / 3.某些网络请求 (比如登录(token)) ，必须携带一些特殊的信息
    //console.log('请求成功');
    return config
  }), err => {
    //当请求失败在此处做操作
    // console.log(err);
    this.$toast('请求失败');
  }

  //2 响应拦截 
  instance.interceptors.response.use(result => {
    //console.log('响应成功');
    return result.data
  }), err => {
    console.log(err);
    this.$toast('响应失败');
  }
  // 发送真正的网络请求
  return instance(config)
}
