 


var  url = '';
if (process.env.NODE_ENV == 'development') {
           url =  'https://ywdev.youngworld.com.cn/ywapi/server.php/';
}else if(process.env.NODE_ENV == 'production'){
	url = 'https://ywdev.youngworld.com.cn/ywapi/server.php/';
	// baseUrl = 'http://cangdu.org:8001';
}
export default
	{
	 url
	}