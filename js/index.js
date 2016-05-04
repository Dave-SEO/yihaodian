$(function(){
 var bannerBox=getClass('bannerjs')[0].getElementsByTagName('a');
 var btns=getClass('bannerxia_btn')[0].getElementsByTagName('li');
 console.log(btns)
	console.log(bannerBox);
	var index=0;
   var t=setInterval(wheel,3000)
    function wheel(){
       index++;
       if(index>bannerBox.length-1){
       	index=0;
       }
      for (var i = 0; i < bannerBox.length; i++) {
        	animate(bannerBox[i],{opacity:0})
        	btns[i].className='';
        }
        animate(bannerBox[index],{opacity:1})
        btns[index].className="hot";
    }

   for (var i = 0; i < btns.length; i++) {
   	     btns[i].index=i;
   	     btns[i].onclick=function(){
   	     	for (var j = 0; j < bannerBox.length; j++) {
   	     		animate(bannerBox[j],{opacity:0})
   	     		btns[j].className=""
   	     	}
   	     animate(bannerBox[this.index],{opacity:1});
   	      this.className="hot";
   	      clearInterval(t);
   	     }
   }

 var bigbox=$('.bannerjs')[0];
 console.log(bigbox)

   bigbox.onmouseover=function(){
   	 leftbtn.style.display='block'
   	 rightbtn.style.display='block'
      clearInterval(t);

  }
   bigbox.onmouseout=function(){
   	t=setInterval(wheel,3000);
   	leftbtn.style.display='none'
   	rightbtn.style.display='none'
   }

   var leftbtn=$('.leftbtn')[0];
   var rightbtn=$('.rightbtn')[0];
   // console.log(leftbtn)
//左右按钮
   leftbtn.onclick=function(){
   	 index--;
       if(index==-1){
       	index=bannerBox.length-1;
       }
      for (var i = 0; i < bannerBox.length; i++) {
        	animate(bannerBox[i],{opacity:0})
        	btns[i].className='';
        }
        animate(bannerBox[index],{opacity:1})
        btns[index].className="hot";
   }

    rightbtn.onclick=function(){
    	wheel();
    }
//
var sxbox=$('.jsbox')[0];
console.log(sxbox)
var as=sxbox.getElementsByTagName('a');
console.log(as.length)
 var aw=parseInt(getStyle(as[0],'width'));
 console.log(aw);
 sxbox.style.width=as.length*aw+'px';
    var indexs=0;
   var flag=true;
   var time=setInterval(weed,2000);
   function weed(){
      indexs++;
      if(indexs==as.length){
           indexs=0;
      }
      animate(sxbox,{marginLeft:-indexs*aw});   
    // if(!flag){
    //   return
    // }
    // flag=false;
    // animate(sxbox,{marginLeft:-aw},400,function(){
    //     sxbox.appendChild(getFirst(sxbox));
    //     sxbox.style.marginLeft=0;
    //     indexs++;
    //     if (indexs==as.length) {
    //       indexs=0;
    //     }
        // for (var i = 0; i < lis.length; i++) {
        //    lis[i].className='';
        // }
         // lis[indexs].className='hot'
        // flag=true;
    // })

   }


})