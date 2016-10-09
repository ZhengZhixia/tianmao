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




//将index插入它的父元素内next元素前；
function insertBefore(index,next){
   var farther=next.parentNode;
   return farther.insertBefore(index,next)
}


//将index插入它的父元素内before元素后；

function insertAfter(index,before){
    var farther=before.parentNode;
    var  borther=getNext(before);
    if (borther) {
      return farther.insertBefore(index,borther);
    }else{
      return  farther.appendChild(index);
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
        if(!next){return falfse}
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



  //获取属性的函数
  function getStyle(obj,attr){
      if (obj.currentStyle) {
        return obj.currentStyle[attr];
      }else{
        return window.getComputedStyle(obj,null)[attr];
      }
    }



 //获取id选择器，类选择器，标签选择器，和页面加载事件
function $(selector,range){
     if (typeof selector=="string") {
         var range=range||document;
     	// alert("获取")
     	if (selector.charAt(0)=="#") {
     		// alert("1");
     		return document.getElementById(selector.substr(1));

     	};
     	if (selector.charAt(0)==".") {
     		return getclass(selector.substr(1),range);
     	};
     	
     	if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)) {
     		// alert("1");
     		return range.getElementsByTagName(selector)
     		
     	};

        if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)) {
            return document.createElement(selector.slice(1,-1))           
        };



     }else if (typeof selector=="function") {
     	// alert("页面加载")
     	  window.onload=selector;
     };
}


 /*
ie6-8不支持getElementsByClassName，处理兼容 传两个参数，
 */
 function getclass(classname,range){
 	if (document.getElementsByClassName){
 		//支持  用getElementsByClassName	
 		return range.getElementsByClassName(classname);
 	}else{//不支持；以数组的形式返回这些
 		 var arr=[];
         var all=range.getElementsByTagName('*');
         for (var i =0;i<all.length; i++) {
              //all[i].className==classname
         	 if (cheakclass(all[i].className,classname)) {
         		arr.push(all[i]);
         	};
         };
         return arr;
 	}	
 }

function cheakclass(aal,classname){//拆分
	var alla=aal.split(' ');
	for (var i =0; i<alla.length; i++) {
		if(alla[i]==classname){
			return true;
		}
	};
	return false;
}


/*
ie6-8不支持getElementsByClassName，处理兼容 传一个参数
 */
// function getclass(classname){
//  	if (document.getElementsByClassName) {
//  		//支持
//  		return document.getElementsByClassName(classname);
//  	}else{
//  		 var arr=[];
//          var all=document.getElementsByTagName('*');
//          for (var i =0;i<all.length; i++) {
//          	 if (all[i].className==classname;) {
//          		arr.push(all[i]);
//          	};
//          };
//          return arr;
//  	}	
//  }



	
