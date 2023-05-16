import axios from 'axios';

const baseURL = 'http://itematchdev-env.eba-mskfp5su.us-east-1.elasticbeanstalk.com/api/';
 
// alert(baseURL)
// const axiosInstance = axios.create({
// 	baseURL: baseURL,
// 	// timeout: 5000,
// 	headers: {
// 		Authorization: localStorage.getItem('access_token')
// 			? 'JWT ' + localStorage.getItem('access_token')
// 			: null,
// 		token: localStorage.getItem('user_token')
// 			? 'Bearer ' + localStorage.getItem('user_token')
// 			: null,
// 		'Content-Type': 'application/json',
// 		accept: 'application/json',
// 	},
// });

// axiosInstance.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	async function (error) {
// 		const originalRequest = error.config;
// 		// alert('error >>'+ error.response.status +' '+ originalRequest.url)

// 		if (typeof error.response === 'undefined') {
// 			// alert(
// 			// 	'A server/network error occurred. ' +
// 			// 	'Looks like CORS might be the problem. ' +
// 			// 	'Sorry about this - we will get it fixed shortly.'  
// 			// );
// 			// alert(
// 			// 	`No network found, please connect to a network to continue using the app.`
// 			// );
// 			return Promise.reject(error);
// 		}

// 		if (
// 			[400, 401].includes(error.response.status) &&
// 			originalRequest.url === 'token/'
// 		) {
// 			alert('Invalid username or password!')
// 			return Promise.reject(error);
// 		}
// 		if (
// 			error.response.status === 401 &&
// 			originalRequest.url === baseURL + 'token/refresh/'
// 		) {
// 			alert('intercepted')
// 			window.location.href = '/login/';
// 			return Promise.reject(error);
// 		}

// 		if (
// 			error.response.data.code === 'token_not_valid' &&
// 			error.response.status === 401 &&
// 			error.response.statusText === 'Unauthorized'
// 		) {
// 			const refreshToken = localStorage.getItem('refresh_token');

// 			if (refreshToken) {
// 				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

// 				// exp date in token is expressed in seconds, while now() returns milliseconds:
// 				const now = Math.ceil(Date.now() / 1000);
// 				console.log(tokenParts.exp);

// 				if (tokenParts.exp > now) {
// 					return axiosInstance
// 						.post('/token/refresh/', { refresh: refreshToken })
// 						.then((response) => {
// 							localStorage.setItem('access_token', response.data.access);
// 							localStorage.setItem('refresh_token', response.data.refresh);

// 							axiosInstance.defaults.headers['Authorization'] =
// 								'JWT ' + response.data.access;
// 							originalRequest.headers['Authorization'] =
// 								'JWT ' + response.data.access;

// 							return axiosInstance(originalRequest);
// 						})
// 						.catch((err) => {
// 							console.log(err);
// 						});
// 				} else {
// 					console.log('Refresh token is expired', tokenParts.exp, now);
// 					window.location.href = './';
// 				}
// 			} else {
// 				console.log('Refresh token not available.');
// 				window.location.href = './';
// 			}
// 		}

// 		// specific error handling done elsewhere
// 		return Promise.reject(error);
// 	}
// );

// axiosInstance.interceptors.request.use(async (config) => {
//     const token = localStorage.getItem("user_token");
//     // const id = await _getItem("user_id");
//     if (token) {
//         config.headers.token = `Bearer ${token}`;
//         // config.headers.userId = id;
//     }
//     return config;
// })

export const itematchAPI = axios.create({
    baseURL: "http://itematchdev-env.eba-mskfp5su.us-east-1.elasticbeanstalk.com/api/"
})
itematchAPI.interceptors.request.use((config) => {
    config.headers.token = localStorage.getItem('user_token')
	? `Bearer ${localStorage.getItem("user_token")}` : ""

    return config;
})

// export default axiosInstance;
