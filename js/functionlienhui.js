// 在不支持getElementsByClassName的浏览器里实现兼容
function getClass(classname,range){
	if(document.getElementsByClassName){
		return range.getElementsByClassName(classname)
	}else{
		var all=range.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < all.length; i++) {
			if(checkclass(all[i].className,classname)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
function checkclass(tagname,aclass){
	var arr=tagname.split(" ");
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==aclass){
			return true
		}
		return false
}
}


// textContent的兼容
function text(obj,val){
	if(val==undefined){
		if(obj.textContent!=undefined){
			return obj.textContent
		}else{
			return obj.innerText
		}
	}else{
		if(obj.textContent!=undefined){
			return obj.textContent=val;
		}else{
			return obj.innerText=val;
		}
	}
}
// 获取行内样式和外部样式通用获取方式的兼容实现
function getStyle(obj,attr){
	if(getComputedStyle(obj,null)){
		return getComputedStyle(obj,null)[attr]
	}else{
		return obj.currentStyle[attr]
	}
}


// 
function $(selector,ranges){
	var ranges=ranges||document;
	if(typeof selector=="string"){
		if(selector.charAt(0)=="#"){
			return document.getElementById(selector.slice(1))
		}else if(selector.charAt(0)=="."){
			return getClass(selector.slice(1),ranges)
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return ranges.getElementsByTagName(selector);
		}
	}else if(typeof selector=="function"){
		return window.onload=selector
	}
		if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1))
		}
}

// 获得子元素
function getChilds(parent){
	var childs=parent.childNodes;
	var newArr=[];
	for (var i = 0; i < childs.length; i++) {
		if(!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==""))){
			newArr.push(childs[i])
		}
	}
	return newArr;
}
// 去除字符串开始与结束的空格
function trim(str){
	return str.replace(/^\s+|\s+$/g,"")
}


// 获得父元素的第一个子元素
function getFirst(parent){
	return getChilds(parent)[0]
}

// 获得父元素的最后一个子元素
function getLast(parent){
	// var childs=getChilds(parent);
	// return childs[childs.length-1];
	return getChilds(parent)[getChilds(parent).length-1]
}
// 获得父元素指定的子元素
function getIndex(parent,i){
	return getChilds(parent)[i];
}

// 获得元素的下一个兄弟元素
function getNext(obj){
	var next=obj.nextSibling;
	if(!next){return false};
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
		next=next.nextSibling;
		if(!next){return false}
	}
return next
}


// 获得上一个兄弟元素节点
function getPre(obj){
	var pre=obj.previousSibling;
	if(!pre){return false};
	while(pre.nodeType==8||(pre.nodeType==3&&trim(pre.nodeValue)=="")){
		pre=pre.previousSibling;
		if(!pre){return false}
	}
return pre
}

// 于某个对象之前插入某个对象
function insertBefore(obj1,obj2){
	var parent=obj2.parentNode;
	return parent.insertBefore(obj1,obj2)
}

// 于某个对象之后插入某个对象
function insertAfter(obj1,obj2){
	var parent=obj2.parentNode;
	var obj3=getNext(obj2);
	if(!obj3){
		return parent.appendChild(obj1)
	}
	return parent.insertBefore(obj1,obj3);
}

//一个事件绑定多个处理程序
function on(obj,ev,callback){
	if(obj.addEventListener){
		obj.addEventListener(ev,callback)
	}else{
		obj.fffNNN=function(){
			callback.call(obj)
		}
		obj.attachEvent("on"+ev,obj.fffNNN)
	}
}

//一个事件删除某个处理程序；
function off(obj,ev,callback){
	if(obj.removeEventListener){
		obj.removeEventListener(ev,callback)
	}else{
		obj.detachEvent("on"+ev,obj.fffNNN)
	}
}