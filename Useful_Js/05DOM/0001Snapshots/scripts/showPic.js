/**
 * Created by Administrator on 2017/4/3 0003.
 */
//将图片演示出来
function showPic(whichPic) {
	if (!document.getElementById("placeholder")) return false;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    //因为description是可选功能，所以对其进行判断，如果存在，就执行替换语句，如果不存在，就不执行。
    if (document.getElementById("description")) {
    	var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    }
    return true;
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
	alert(body_element.nodeType);
}

function prepareGallery() {
	if (!document.getElementById || !document.getElementsByTagName) return false;
	if (!document.getElementById("imagegallery"));
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i<links.length; i++) {
		links[i].onclick = function() {
			return !showPic(this);
			
		}
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if ((typeof window.onload) != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);