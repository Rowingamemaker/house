import axios from 'axios';
import siteInfo from './config'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = siteInfo.apiroot;
axios.defaults.withCredentials = true; //让ajax携带cookie

//http request 拦截器
axios.interceptors.request.use(
	config => {
		config.data = JSON.stringify(config.data);
		config.headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
		config.timeout = 10000;

		// if(token){
		//   config.params = {'token':token}
		// }
		return config;
	},
	error => {
		return Promise.reject(err);
	}
);


//http response 拦截器
axios.interceptors.response.use(
	response => {
		console.log('response', response);
		if (response.status == 200) {
			//重新授权登陆
// 			if (response.data.code == 10) {
// 				console.log(siteInfo.apiroot + 'mp/mpLogin?i=' + siteInfo.uniacid)
// 				window.location.href = siteInfo.apiroot + 'mp/mpLogin?i=' + siteInfo.uniacid;
// 				return;
// 			}
// 			//外部浏览器打开
// 			if (response.data.code == 99) {
// 				console.log('response', response);
// 				window.location.href = response.data.url;
// 				return;
// 			}
		}
		return response;
	},
	error => {
		return Promise.reject(error)
	}
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url = '', params = {}) {
	if (url != '') {
		url = url + '?i=' + siteInfo.uniacid;
	}
	return new Promise((resolve, reject) => {
		axios.get(url, {
				params: params,
			})
			.then(response => {
				resolve(response);
			})
			.catch(err => {
				reject(err)
			})
	})
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, params = {}) {
	if (url != '') {
		url = url + '?i=' + siteInfo.uniacid;
	}
	return new Promise((resolve, reject) => {
		axios.post(url, {
				params: params,
			})
			.then(response => {
				resolve(response);
			}, err => {
				reject(err)
			})
	})
}
