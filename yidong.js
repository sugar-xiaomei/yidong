$(function(){
  function one(){   //banner轮播
	    var imgs=$(".ii");
	    var left=$(".d-l-k")[0];
	    var right=$(".d-r-k")[0];
	    var circles=$(".circle");
	    var middle=$("#d-middle");
	    var n=0;
	    var next=0;
      var t=setInterval(move,2000);
      var flag=true;
      function move(){
        	flag=false;
           next=n+1;
        if(next>=imgs.length){
     	     next=0;
          }
        for(var i=0;i<circles.length;i++){
     	     circles[i].style.background="#ccc";
          }
           circles[next].style.background="red";
           imgs[next].style.opacity=0;
           animate(imgs[n],{opacity:0},300);
           animate(imgs[next],{opacity:1},300 ,function(){flag=true;});
     	      n=next;
          }
      function move1(){
 	       if(!flag){
 		        return;
 	        }
 	          flag=false;
 	          next=n-1;
 	       if(next<=0){
 		        next=imgs.length-1;
 	        }
 	       for(var i=0;i<circles.length;i++){
     	      circles[i].style.background="#ccc";
          }
            circles[next].style.background="red";
 	          imgs[next].style.opacity= 0;
            animate(imgs[n],{opacity:0},300);
            animate(imgs[next],{opacity:1},300, function(){flag=true;});
     	      n=next;
        }
            middle.onmouseover=function(){
 	                clearInterval(t);
            }
            middle.onmouseout=function(){
                	t=setInterval(move,2000);
            }
         for(var i=0;i<imgs.length;i++){
 	                circles[i].index=i;
                	circles[i].onmouseover=function(){
 	      	          if(this.index==n){
 			                  return;
 		                 }else if(this.index>n){
                      for(var i=0;i<circles.length;i++){
                          circles[i].style.background="#ccc";
                          }
                          circles[this.index].style.background="red";
                          imgs[this.index].style.opacity= 0;
                          animate(imgs[n],{opacity:0},300);
                          animate(imgs[this.index],{opacity:1},300, function(){flag=true;});
                          n=this.index;
                        }else{
         	                  for(var i=0;i<circles.length;i++){
                          circles[i].style.background="#ccc";
                          }
                          circles[this.index].style.background="red";
                          imgs[this.index].style.opacity= 0;
                          animate(imgs[n],{opacity:0},300);
                          animate(imgs[this.index],{opacity:1},300, function(){flag=true;});
                          n=this.index;
                       }
 	                }
 	        }
            right.onclick=function(){
	             move();
            }
            left.onclick=function(){
	              move1();
            }
} one();

function two(){    //滚动轮播
	  var g=$(".gungun");
	  var w=parseInt(getStyle(g[0],"width"));
    var t=setInterval(dong,3000);
    var n=0;
    var next=0;
    var left=$(".gj")[0];
    var right=$("#gjr");
    var gbox=$(".dg")[0];
    var flag=true;
    function dong(){
    	flag=false;
    	next=n+1;
    	 if(next>=g.length){
    		   next=0;
    	 }
    	 g[next].style.left=-w+"px";
       animate(g[n],{left:w},3000);
       animate(g[next],{left:0},3000,function(){flag=true;});
       n=next;
    }
    function dong1(){
    	  if(!flag){
    		  return;
       	}
    	  flag=false;
    	  next=n-1;
    	  if(next<=0){
    		  next=g.length-1;
    	  }
        g[next].style.left=w+"px";
        animate(g[n],{left:-w},3000);
        animate(g[next],{left:0},3000,function(){flag=true;});
        n=next;
    }
        gbox.onmouseover=function(){
	           clearInterval(t);
          }
        gbox.onmouseout=function(){
	           t=setInterval(dong,3000);
          }
        left.onclick=function(){
             dong1();
        }
        right.onclick=function(){
             dong();
        }
}
 // two();

function three(){   //导航栏效果

     // console.log(hidden);
     var nav=$(".nav-1");
     var hidden=$(".hidden",nav-1);
     for(var i=0;i<nav.length;i++){
      nav[i].index=i;//给元素加标识
         nav[i].onmouseover=function(){
            for(var i=0;i<nav.length;i++){
               hidden[i].style.display="none";
            }
            hidden[this.index].style.display="block";
         }
         nav[i].onmouseout=function(){
            hidden[this.index].style.display="none";
          }
      }
}three(); //调用函数

 function four(){  //登录效果
        var  dd=$("#dddd");
        var  hidden=$("#hidden");
        var  kong=$(".kong")[0];
        dd.onmouseover=function(){
           hidden.style.display="block";
           kong.style.display="block";
         }
        dd.onmouseout=function(){
            hidden.style.display="none";
            kong.style.display="none";
         }

 }four();

  function five(){  //登录效果
        var  dd=$("#ddde");
        var  hidden=$("#hidden1");
        var  kong=$(".kong1")[0];
        dd.onmouseover=function(){
           hidden.style.display="block";
           kong.style.display="block";
         }
        dd.onmouseout=function(){
            hidden.style.display="none";
            kong.style.display="none";
         }

 }five();

 function six(){
          var  sz=$(".shuozhou")[0];
          var  logo=$(".logo")[0];
         logo.onmouseover=function(){
            sz.style.display="block";
           }
        logo.onmouseout=function(){
            sz.style.display="none";
          }
    }six();
})
