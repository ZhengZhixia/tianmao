$(function(){

//顶部下拉列表
var toprightone=$(".toprightone");
var toprightonexl=$(".top-right-one-xl");
for (var i = 0; i < toprightone.length; i++) {
  toprightone[i].index=i;
  hover(toprightone[i],function(){
       toprightonexl[this.index].style.display="block";
       toprightone[this.index].style.background="#fff";
  },function(){
       toprightonexl[this.index].style.display="none";
       toprightone[this.index].style.background="";
  })
};




//导航小猫动画
var navigationright=$(".navigation-right")[0];
var btns=$("a",navigationright);
// alert(btns.length)
var xiaomao=$(".xiaomao",navigationright);
// alert(xiaomao.length)
for (var i = 0; i < btns.length; i++) {
	btns[i].index=i;
	btns[i].onmouseover=function(){
        animate(xiaomao[this.index],{top:-13},200)
	};
	btns[i].onmouseout=function(){
        animate(xiaomao[this.index],{top:0},200)
	}
};



//banner轮播
var bannerbo=$(".banner-bo")[0];
var bannerboxs=$(".banner-box",bannerbo);
var bjs=$(".bj",bannerbo);
var bbn=$(".bbn",bannerbo)[0];
var bbns=$("li",bbn);
bannerboxs[0].style.display="bloack";
bbns[0].style.background="#fff";
var index=0;
var t=setInterval(move,1000);
function move(){
	index++;
	if (index==bannerboxs.length) {index=0};
	for (var i = 0; i < bannerboxs.length; i++) {
		bannerboxs[i].style.display="none";
		bbns[i].style.background="";
	};
	bannerboxs[index].style.display="block";
	bbns[index].style.background="#fff";
}

     bannerbo.onmouseover=function(){
         clearInterval(t);
     }
	 bannerbo.onmouseout=function(){
     	t=setInterval(move,2000)
     }
   
for (var j=0; j<bbns.length;j++) {
     	bbns[j].index=j;
     	bbns[j].onclick=function(){
           for (var k=0; k< bannerboxs.length; k++) {
           	  bannerboxs[k].style.display='none';
         	  bbns[k].style.background="";
           };
          bannerboxs[this.index].style.display='block';
          bbns[this.index].style.background="#fff";
          
     	}
 };


 //banner左边右拉框
 var li1=$(".li1");
var yc=$(".yc");
for (var i = 0; i < yc.length; i++) {
  yc[i].style.top=-i*31+"px";
};
for (var i = 0; i < li1.length; i++) {
  li1[i].index=i;
  hover(li1[i],function(){
       yc[this.index].style.display="block";
       li1[this.index].style.background="#fff";
  },function(){
       yc[this.index].style.display="none";
       li1[this.index].style.background="";
  })
};


//热门品牌部分遮罩
var content6centerlittle=$(".content-6-center-little");
var content6centerlittlezx=$(".content-6-center-littlezx");
var content6centerlittlezz=$(".content-6-center-littlezz");
for (var i = 0; i < content6centerlittle.length; i++) {
 content6centerlittle[i].index=i;
 hover(content6centerlittle[i],function(){
   content6centerlittlezx[this.index].style.display="block";
   content6centerlittlezz[this.index].style.display="block";
 },function(){
    content6centerlittlezx[this.index].style.display="none";
    content6centerlittlezz[this.index].style.display="none";
 })
};



//放大
var content7middlel=$(".content-7-middlel");
var content7middlezz=$(".content-7-middlezz");
for (var i = 0; i < content7middlel.length; i++) {
         content7middlel[i].index=i;
         content7middlel[i].onmouseover=function(){
            animate(content7middlezz[this.index],{'width':160,'bottom':23,"marginLeft":-80},100)
          }
          content7middlel[i].onmouseout=function(){
            animate(content7middlezz[this.index],{'width':140,'bottom':13,"marginLeft":-70},100)
          }
};


//左移
 var content9ll=$(".content9ll");
 var content9li=$(".content9li");
 for (var i = 0; i < content9ll.length; i++) {
   content9ll[i].index=i;
   content9ll[i].onmouseover=function(){
      animate(content9li[this.index],{right:20})
   }
   content9ll[i].onmouseout=function(){
      animate(content9li[this.index],{right:0})
   }
 };

//隐藏搜素框
var righta=$(".righta")[0];
window.onscroll=function(){
  var top=document.documentElement.scrollTop||document.body.scrollTop;
          if (top>=400) {
              
              righta.style.display="block";
          };
          if (top<700) {
              righta.style.display="none";
          };
};

//楼层跳转
      //  var floors=$(".floor");
        
      //   var arrb=[];
      //   var floorbar=$(".floor-bar")[0];

      //   var floorbars=$("span",floorbar);
      //   var as=$("a",floorbar);
      //   for (var i = 0; i < floors.length; i++) {
      //     arrb.push(floors[i].offsetTop);
      //   };
      //   // var indexa;
      //   window.onscroll=function(){
      //     var top=document.documentElement.scrollTop||document.body.scrollTop;
      //     if (top>600) {
      //       floorbar.style.display="block";
      //     };
      //     if (top<600) {
      //       floorbar.style.display="none";
      //     };
      //     for (var i = 0; i <arrb.length;i++) {
      //       if (arrb[i]<top+300) {
      //         for (var j = 0; j< floorbars.length; j++) {
      //           // floorbars[j].style.backgroundColor="";
      //           as[j].style.backgroundColor="";
      //         };
      //               // floorbars[i].style.backgroundColor="red";
      //           as[i].style.backgroundColor="red";
      //           // indexa=i;    
      //       };
            
      //     };
      //   }
      
      // for (var i = 0; i < floorbars.length; i++) {
      //   floorbars[i].index=i;
      //   floorbars[i].onclick=function(){
      //    // document.documentElement.scrollTop=arrb[this.index];
      //    // document.body.scrollTop=arrb[this.index];
      //    animate(document.documentElement,{scrollTop:arrb[this.index]});
      //    animate(document.body,{scrollTop:arrb[this.index]});
      //   }
      // };


      

})