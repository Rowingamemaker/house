//获取url参数
function getQueryString(name) {
	var url = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var newUrl = window.location.search.substr(1).match(url);
	if (newUrl != null) {
		return unescape(newUrl[2]);
	} else {
		return false;
	}
};
export default {
	getQueryString
}
