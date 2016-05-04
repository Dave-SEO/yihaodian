
// function getClass(classname,obj){
// 	var obj=obj||document;
// 	if(document.getElementsByClassName){
// 		return obj.getElementsByClassName(classname);
// 	}else{
// 		var arr=[];
// 		var alls=obj.getElementsByTagName('*');
// 		for (var i = 0; i < alls.length; i++) {

// 			if(check(alls[i].className,classname)){
// 				arr.push(alls[i])
// 			}
			
// 		};
// 		return arr;
// 	}
// }
// function check(newclass,oldclass){
// 	var flag=false;
// 	var cl=newclass.split(' ');
// 	for (var i = 0; i < cl.length; i++) {
// 		if(cl[i]==oldclass){
// 			flag=true;
// 		}
// 	};
// 	return flag;

// }

// 兼容获取classname
function getClass(classname,obj){
	var obj=obj||document;
	if(document.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}else{
	    var arr=[];
		var alls=obj.getElementsByTagName('*');
		for (var i = 0; i < alls.length; i++) {
			
			if(check(alls[i].className,classname)){
				arr.push(alls[i])
			}
		};
		return arr;
	}
}
function check(newclass,oldclass){
	var flag=false;
	var cl=newclass.split(' ');
	for (var i = 0; i < cl.length; i++) {
		if(cl[i]==oldclass){
			flag=true;	
		}
	};
	return flag;

} 

// 兼容获取文本
// getText()
function getText(obj,val){
	if(val==undefined){
			if(typeof obj.textContent=="string"){
				console.log("ie9-11")
	 		return obj.textContent;
	 	}else{
	 		console.log("ie6");
	 		return obj.innerText;
	 		  
	 	}
	 }else{
		 	if(typeof obj.textContent=="string"){
		 		 obj.textContent=val;
		 	}else{
		 		 obj.innerText=val;
		 	}
	 }
 	
}
//兼容获取外部样式、
function getStyle(obj,attr){
	if(!obj.currenStyle){
		//火狐 谷歌 ie9-11获取
		return getComputedStyle(obj,null)[attr];
	}else{     
		//ie8-6支持
		return obj.currenStyle[attr];
	}

}
//简化获取过程
function $(selector,obj){
	if(typeof selector=='string'){
		var obj=obj||document;
		if(selector.charAt(0)=='.'){
			return getClass(selector.substring(1),obj);
		}else if(selector.charAt(0)=='#'){
			return document.getElementById(selector.substring(1));
		}else if(/^[a-z][a-z1-6]{0,9}$/g.test(selector)){
			return obj.getElementsByTagName(selector);
		}else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1));
		}
	}else if(typeof selector=='function'){
		window.onload=function(){
			selector();
			
		}
	}

}
//获取所有子节点
function getChild(parent,t){
	var childs=parent.childNodes;
	var arr=[]
	var t=t||false;
	if(t==true){
			for (var i = 0; i < childs.length; i++) {
			
			if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,"")!='')){
				arr.push(childs[i])
			}
		};
	}else if(t==false){
			for (var i = 0; i < childs.length; i++) {
				
				if(childs[i].nodeType==1){
					arr.push(childs[i])
				}
			};
	}
	
	return arr
}
// 获取第一个子节点

function getFirst(obj){
	return getChild(obj)[0];
}
// 获取最后一个子节点

function getLast(obj){
	var allChild=getChild(obj);

	return allChild[allChild.length-1];
}
// 获取任意一个子节点
function getNum(obj,num){
	return getNum=getChild(obj)[num];
}


// 获取下一个兄弟节点
function getNext(objs){
	var next=objs.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,"")=='')){
		           next=next.nextSibling
			if(next==null){
			return false;
		}
	}
	return next
}
//获取上一个兄弟节点

function getTop(objs){
	var next=objs.previousSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,"")=='')){
		           next=next.previousSibling;
			if(next==null){
			return false;
		}
	}
	return next
}
//插入一个对象之前
function insertBefore(obj1,obj2){
	var parentNodes=obj2.parentNode;
	parentNodes.insertBefore(obj1,obj2);
}
//插入一个对象之后
function insertAfter(obj1,obj2){
    var next=obj2.nextSibling;
    insertBefore(obj1,obj2);
}