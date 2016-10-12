window.onload=function(){
	// var zero=$('.zero')[0];
	// var car=$('.car')[0];
	// car.onmouseover=function(){
	// 	zero.style.color='#c40000'
	// }
	// car.onmouseout=function(){
	// 	zero.style.color='#717171'
	// }

// 顶部效果
    var buying=$('.buying')[0];
	var sole=$('.sole')[0];
	buying.onmouseover=function(){
		buying.style.color='#c40000';
		buying.style.cursor='pointer';
		buying.style.textDecoration='underline';
	}
	buying.onmouseout=function(){
		buying.style.color='#717171';
		buying.style.cursor='none';
	    buying.style.textDecoration='none';
	}
	sole.onmouseover=function(){
		sole.style.color='#c40000';
		sole.style.cursor='pointer';
		sole.style.textDecoration='underline';
	}
	sole.onmouseout=function(){
		sole.style.color='#717171';
		sole.style.cursor='pointer';
		sole.style.textDecoration='none';
	}
    


   var buyed=$('.buyed')[0];
   var mytaobao=$('.mytaobao')[0];
   buyed.style.display='none';
   mytaobao.onmouseover=function(){
   	buyed.style.display='block';
   }
	mytaobao.onmouseout=function(){
   	buyed.style.display='none';
   }

  //右边浮动效果
  // var topF=$(".top_float")[0];
  // topF.style.height=ch+"px"
  var tf=$(".tf_hidden");
  var tfmove=$(".move");
  for(var i = 0; i < tfmove.length; i++){
    tffmove(i)
  };
  function tffmove(i){
    tfmove[i].onmouseover=function(){
      animate(tf[i],{left:-80,opacity:1},200)
      tf[i].style.display="block";
      tfmove[i].style.backgroundColor=" #cc0000"
    }
    tfmove[i].onmouseout=function(){
      animate(tf[i],{left:-120,opacity:0},200)
      tf[i].style.display="none";
      tfmove[i].style.backgroundColor=""    
    }
  }
  tfmove[7].onmouseover=function(){
      animate(tf[7],{left:-155,opacity:1},200)
      tfmove[7].style.backgroundColor="#cc0000"
      tf[7].style.display="block";
    }
  tfmove[7].onmouseout=function(){
      animate(tf[7],{left:-180,opacity:0},200)
      tfmove[7].style.backgroundColor=""
      tf[7].style.display="none";
  }
  //返回顶部 
  tfmove[tfmove.length-1].onclick=function(){
    animate(document.body,{scrollTop:0},500)
    animate(document.documentElement,{scrollTop:0},500)
  }

// 顶部效果
  var baby=$('.baby')[0];
	var store=$('.store')[0];
	baby.onmouseover=function(){
		baby.style.color='#c40000';
		baby.style.cursor='pointer';
		baby.style.textDecoration='underline';
	}
	baby.onmouseout=function(){
		baby.style.color='#717171';
		baby.style.cursor='none';
	    baby.style.textDecoration='none';
	}
	store.onmouseover=function(){
		store.style.color='#c40000';
		store.style.cursor='pointer';
		store.style.textDecoration='underline';
	}
	store.onmouseout=function(){
		store.style.color='#717171';
		store.style.cursor='pointer';
		store.style.textDecoration='none';
	}
    


   var collect=$('.collect')[0];
   var myfavority=$('.myfavority')[0];
   collect.style.display='none';
   myfavority.onmouseover=function(){
   	collect.style.display='block';
   }
	myfavority.onmouseout=function(){
   	collect.style.display='none';
   }
   



   var myphone=$('.myphone')[0];
    var phone=$('.phone')[0];
   var saoyisao=$('.saoyisao')[0];
    saoyisao.style.display='none';
   myphone.onmouseover=function(){
   	saoyisao.style.display='block';
   }
	myphone.onmouseout=function(){
   	saoyisao.style.display='none';
   }
   




    var shangjia=$('.shangjia')[0];
   var stores=$('.stores')[0];
    stores.style.display='none';
   shangjia.onmouseover=function(){
   	stores.style.display='block';
   }
	shangjia.onmouseout=function(){
   	stores.style.display='none';
   }

    var ear=$('.ear');
    var mytianmao=$('.mytianmao');
   for(var i=0;i<mytianmao.length;i++){
   	    mytianmao[i].index=i;
     	mytianmao[i].onmouseover=function(){ 
     	animate(ear[this.index],{top:-5})  				
    		ear[this.index].style.opacity=1;
   	}
    	mytianmao[i].onmouseout=function(){  
    	animate(ear[this.index],{top:0})  		
    		ear[this.index].style.opacity=0;

    	}
   } 
    
// banner效果

     var yuandian=$('.yuandian')[0];
     var lists=$('li',yuandian);
     var index=0;
     var imgs=$('.imgs');
     var bannerimg=$('.bannerimg')[0];
     var bannerbg=$('.bannerbg');
     var bannerfg=$('.bannerfg');
     var bannerbottom=$('.bannerbottom')[0];
     for(var i=0;i<imgs.length;i++){
     	imgs[i].style.opacity='0';
     	bannerfg[i].style.opacity=0;
      bannerbg[i].style.opacity=0;
      lists[0].className='shiquan';    

     }
     lists[0].className='kongquan';    
     imgs[0].style.opacity=1;
     bannerfg[0].style.opacity=1;
     bannerbg[0].style.opacity=1;


     var t=setInterval(fn,2000);

     function fn(){     	
      for(var i=0;i<imgs.length;i++){
       animate(imgs[index],{opacity:0}) 
       animate(bannerfg[index],{opacity:0})
       animate(bannerbg[index],{opacity:0}) 
        lists[i].className='shiquan';           
      }
      index++;
      if(index==imgs.length){
        index=0;
      }
     	animate(imgs[index],{opacity:1}) 
     	animate(bannerfg[index],{opacity:1})
     	animate(bannerbg[index],{opacity:1})
      lists[index].className='kongquan';   

     }

      var flag=true;
     for(var i=0;i<lists.length;i++){
      lists[i].index=i;
         lists[i].onmouseover=function(){ 
          if(flag){
            flag=false;
            for(var j=0;j<lists.length;j++){
          lists[j].className='shiquan'; 
          bannerfg[j].style.opacity=0;      
          bannerbg[j].style.opacity=0;      
        }
        animate(imgs[index],{opacity:0});
        lists[this.index].className='kongquan';
        animate(imgs[this.index],{opacity:1});
        animate(bannerfg[this.index],{opacity:1})
        animate(bannerbg[this.index],{opacity:1},function(){
          flag=true;
        })
        index=this.index; 
          }      
      }
       
      }
      
     bannerimg.onmouseover=function(){
      clearInterval(t);
     }
     bannerimg.onmouseout=function(){
      t=setInterval(fn,2000);
     }

  //banner 右边遮罩

  var bannerr=$(".banner_right")[0];

  var bannerr2=$(".banner_right2",bannerr)[0]
  // console.log(bannerr2)
  var bMask=$(".banner2_mask",bannerr)[0];
  // console.log(bMask)
  bannerr2.onmouseover=function(){
    bMask.style.opacity="0.8"
  }
  bannerr2.onmouseout=function(){
    bMask.style.opacity="0.5"
  }

// 下拉搜索框
var leftnavigate=$('.leftnavigate')[0];
var sflag=true;   
    var fixed=$('.fixed')[0];
    addEvent(window,'scroll',fnu)
   function fnu(){
      var obj=document.body.scrollTop?document.body:document.documentElement;
      if(obj.scrollTop>=700){
        if(sflag){
          sflag=false;
          animate(fixed,{top:0})
          leftnavigate.style.display='block';
        }
       
      }
      if(obj.scrollTop<700){
        if(!sflag){
          sflag=true;
          animate(fixed,{top:-50})
          leftnavigate.style.display='none'; 
        }
        
      }

    }


// 热门品牌 
var middleimg=$('.middleimg')[0];
var middleimgs=$('li',middleimg);
var brandmask=$('.brandmask',middleimg);
for(var i=0;i<middleimgs.length;i++){
brandmask[i].style.opacity=0;
}

for(var i=0;i<middleimgs.length;i++){
  middleimgs[i].index=i;
  middleimgs[i].onmouseover=function(){
    animate(brandmask[this.index],{opacity:1},100)
  }
  middleimgs[i].onmouseout=function(){
    animate(brandmask[this.index],{opacity:0},100)
  

  }
}

// main1 右边效果
var rightimg=$('.rightimg')[0];
var title=$('.title',rightimg);
var desa=$('.desa',rightimg);
var rightimgli=$('a',rightimg);
for(var i=0;i<rightimgli.length;i++){
  rightimgli[i].index=i;
  rightimgli[i].onmouseover=function(){
    animate(rightimgli[this.index],{opacity:0.7},200,function(){
     
  });
     title[this.index].style.color='red';
    desa[this.index].style.color='red';

  }
   rightimgli[i].onmouseout=function(){
    animate(rightimgli[this.index],{opacity:1});
   desa[this.index].style.color='';
  title[this.index].style.color='';


  }
}


// 图片的放大事件
var hotsa=$('.one');
  for(var j=0;j<hotsa.length;j++){ 
    hotsa[j].index=j;
    hotsa[j].onmouseover=function(){
       var imgs=$('img',hotsa[this.index])[0]; 
        animate(imgs,{width:150,height:160},300);
    }
    hotsa[j].onmouseout=function(){
       var imgs=$('img',hotsa[this.index])[0]; 
        animate(imgs,{width:133,height:133},300);

    }
  }


var smalllunbo=$('.smalllunbo');
for(var i=0;i<smalllunbo.length;i++){
  textlunbo(smalllunbo[i])
}

/*字的小轮播*/
function textlunbo(obj){
var lunbotext=$('.lunbo',obj);
var tops=parseInt(getStyle(obj,'height'));
var num=0;
var next=0;
for(var i=0;i<lunbotext.length;i++){
  lunbotext[i].style.top=tops+'px';
} 
  lunbotext[0].style.top=0;
  var t=setInterval(fn,1500)
  function fn(){
      next++;
      if(next==lunbotext.length){
        next=0;
      }
      lunbotext[next].style.top=tops+'px';
      animate(lunbotext[num],{top:-tops})
      animate(lunbotext[next],{top:0})
      num=next;


  }
}



// main3
 var qinziimgs=$('.qiziimgs');
 var tupians=$('.tupians');
 for(var i=0;i<qinziimgs.length;i++){
  qinziimgs[i].index=i;
  qinziimgs[i].onmouseover=function(){
    if(tupians[this.index].id=='bigimg'){
    animate(tupians[this.index],{left:110},400)     
    }
    else{
    animate(tupians[this.index],{left:70},400)
  }
  }



  qinziimgs[i].onmouseout=function(){
    if(tupians[this.index].id=='bigimg'){
    animate(tupians[this.index],{left:147},400)
    }
    else{
    animate(tupians[this.index],{left:90},400)
  }
  }
 }



var qinzibigimgs=$('.qizibigimgs')[0];
 var tupiansy=$('.tupiansy')[0];
  qinzibigimgs.onmouseover=function(){  
    animate(tupiansy,{left:260},400)     
  }
  qinzibigimgs.onmouseout=function(){    
    animate(tupiansy,{left:293},400)
 }







var qinzis=$('.qinzi')
var arrs=[];
var navs=$('.nav')[0];
navs.style.background='#DD2727';
var llast=$('.llast');
var kk=true;
// 获取每一个楼层距离顶部的高度。存进数组中
for(var i=0;i<qinzis.length;i++){
    arrs.push(qinzis[i].offsetTop)
  }

// 获得屏幕的可是高度
var ch=document.documentElement.clientHeight;

window.onscroll=function(){
// 此处做浏览器的兼容
var obj=document.body.scrollTop?document.body:document.documentElement;
var scrolltop=obj.scrollTop;
for(var i=0;i<arrs.length;i++){
  if(arrs[i]<=scrolltop+ch+50){
     var imgs=$('img',qinzis[i])
     for(var j=0;j<imgs.length;j++){
      imgs[j].src=imgs[j].getAttribute('imgpath');
     }

  }
}



if(kk==true){
 for(var i=0;i<qinzis.length;i++){
        if(scrolltop+ch>arrs[i]+200){
          for(var j=0;j<llast.length;j++){
          llast[j].style.background='';
        }
          llast[i].style.background=arrcolor[i];
        }
       }

}








}

var arrcolor=['#F7A945','#19C8A9','#F15453','#64C333','#0AA6E8','#EA5F8D','#DD2727','#DD2727']
var firstlast=$('.firstlast')[0];

firstlast.onclick=function(){
  animate(document.body,{scrollTop:0})
  animate(document.documentElement,{scrollTop:0},function(){
    leftnavigate.style.display='none';
  })


}



for(var i=0;i<llast.length;i++){
 
  llast[i].index=i;
  llast[i].onclick=function(){
    kk=false
     for(var j=0;j<llast.length;j++){
    llast[j].style.background='';
  }
    llast[this.index].style.background=arrcolor[this.index];
  animate(document.body,{scrollTop:arrs[this.index]-60},function(){
    flag=true;
  })
 animate(document.documentElement,{scrollTop:arrs[this.index]-60},function(){
  kk=true
 })

  }
}




// 猜你喜欢

var ssflag=true;
var likesli=$('.likesli');
var xihuanimg=$('.xuhuanimg');
for( var i=0;i<likesli.length;i++){
  likesli[i].index=i;
  likesli[i].onmouseover=function(e){
    var ev=window.event||e;
    ev.stopPropagation();
    if(ssflag==true){
      ssflag=false;
       animate(xihuanimg[this.index],{opacity:0.7},100);
      likesli[this.index].id='border';
    }   
  }
  likesli[i].onmouseout=function(e){
    var ev=window.event||e;
    ev.stopPropagation();
    xihuanimg[this.index].style.opacity=1;
    likesli[this.index].id='';
    ssflag=true

  }
}










}
