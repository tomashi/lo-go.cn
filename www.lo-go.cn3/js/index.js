$(function(){


//orign
resize();
function resize(){
       $('#header,#black-bg,#content').css('height',$(window).height());
       $('#header .header-bg').css({height:'100%',width:'100%'});
       $('#content .content-text').css('margin-top',($(window).height()-$('#content .content-text').height())/6);
       $('#work').css('top',$(window).height());
       $('#info').css('top',$(window).height()+$('#work').outerHeight()-1+'px');
       $('#now').css('top',$(window).height()+$('#work').outerHeight()+$('#info').outerHeight()-2+'px');
       $('#content').css('top',$(window).height()+$('#work').outerHeight()+$('#info').outerHeight()+$('#now').outerHeight()-3+'px');
       $('#header .header-bg-img').children('img').css('height',$(window).height());
}
//orign


//common
(function($){
       var bgwidth='';
       var bgheight='';
       var bgouterWidth='';
       var bgouterHeight='';

       $('.btn-red').hover(function(){
              bgwidth=$(this).width();
              bgheight=$(this).height();
              bgouterWidth=$(this).outerWidth();
              bgouterHeight=$(this).outerHeight();
              $(this).children('.btn-red-bg').css({
                     width:bgwidth,
                     height:bgheight,
              });
              $(this).children('.btn-red-bg').css({
                     background:'#F04E59',
                     width:bgouterWidth-1,
                     height:bgouterHeight-1
              });
       },function(){
              $(this).children('.btn-red-bg').css({
                     width:bgwidth,
                     height:bgheight,
                     background:'transparent'
              });
       });
       $('.btn-blue').hover(function(){
              bgwidth=$(this).width();
              bgheight=$(this).height();
              bgouterWidth=$(this).outerWidth();
              bgouterHeight=$(this).outerHeight();
              $(this).children('.btn-blue-bg').css({
                     width:bgwidth,
                     height:bgheight,
              });
              $(this).children('.btn-blue-bg').css({
                     background:'#40C2D2',
                     width:bgouterWidth-2,
                     height:bgouterHeight-2
              });
       },function(){
              $(this).children('.btn-blue-bg').css({
                     width:bgwidth,
                     height:bgheight,
                     background:'transparent'
              });
       });
})(jQuery);

(function($){
       $('.img-hover').hover(function(){
              $(this).find('.img-bg').css({
                     opacity:0.9,
                     width:'calc(100% - 90px)',
                     height:'calc(100% -  90px)'
              });
              $(this).find('.img-sca').css('transform','scale(1.1)');
       },function(){
              $(this).find('.img-bg').css({
                     opacity:0,
                     width:'calc(100% - 150px)',
                     height:'calc(100% -  120px)'
              });
              $(this).find('.img-sca').css('transform','scale(1)');
       });
})(jQuery);
//common


//fixed
$('.block-fixed-toggle').on('mouseenter',function(){
       $(this).children('.block-fixed-1').css('width','32px');
       $(this).children('.block-fixed-3').css('width','32px');
}).on('mouseleave',function(){
       $(this).children('.block-fixed-1').css('width','20px');
       $(this).children('.block-fixed-3').css('width','25px');
});
(function($){
       var bg=$('#black-bg');
       var side=$('.side');
       var flag=true;
       var scroll='';
       var toggle=$('.block-fixed-toggle');
       var num='';
       var item=$('.item');
       toggle.click(function(){
              if(flag==true){
                     flag=false;
                     bg.css('display','block');
                     setTimeout(function(){
                            bg.css('opacity',1);
                     },50);
                     side.css('background','#FFC63B');
                     $(this).children('.block-fixed-1').css('transform','rotateZ(-45deg)').css('background','#F7C039');
                     $(this).children('.block-fixed-2').css('opacity',0);
                     $(this).children('.block-fixed-3').css('transform','rotateZ(45deg)').css('background','#F7C039');
                     $(this).unbind('mouseenter').unbind('mouseleave');
                     $(this).on('mouseenter',function(){
                            $(this).children('.block-fixed-1').css('background','#F7C039');
                            $(this).children('.block-fixed-3').css('background','#F7C039');
                     }).on('mouseleave',function(){
                            $(this).children('.block-fixed-1').css('background','white');
                            $(this).children('.block-fixed-3').css('background','white');
                     });
                     setTimeout(function(){
                            num=0;
                            item.eq(0).addClass('opa-item');
                            clear();
                     },300);
                     scroll=$(window).scrollTop();
              }else{
                     close();
              }
       });
       function clear(){
              var int=setInterval(function(){
                     if(num+1<item.length){
                            num++;
                            item.eq(num).addClass('opa-item');
                     }else{
                            clearInterval(int);
                     }
              },100);
       }
       $('.main').click(function(){
              close();
              setTimeout(function(){
                     $('body').animate({scrollTop:'0px'},800,'swing');
              },400);
       });
       $('.work').click(function(){
              close();
              setTimeout(function(){
                     $('body').animate({scrollTop:$('#work').offset().top+'px'},800,'swing');
              },400);
       });
       $('.info').click(function(){
              close();
              setTimeout(function(){
                     $('body').animate({scrollTop:$('#info').offset().top+'px'},800,'swing');
              },400);
       });
       $('.now').click(function(){
              close();
              setTimeout(function(){
                     $('body').animate({scrollTop:$('#now').offset().top+'px'},800,'swing');
              },400);
       });
       $('.content').click(function(){
              close();
              setTimeout(function(){
                     $('body').animate({scrollTop:$('#content').offset().top+'px'},800,'swing');
              },400);
       });
       function close(){
              flag=true;
              bg.css('opacity',0);
              setTimeout(function(){
                     bg.css('display','none');
              },400);
              side.css('background','#F04E59');
              toggleCss();
              toggle.children('.block-fixed-1').css('transform','rotateZ(0deg)');
              toggle.children('.block-fixed-2').css('opacity',1);
              toggle.children('.block-fixed-3').css('transform','rotateZ(0deg)');
              toggle.unbind('mouseenter').unbind('mouseleave');
              toggle.on('mouseenter',function(){
                     $(this).children('.block-fixed-1').css('width','32px');
                     $(this).children('.block-fixed-3').css('width','32px');
              }).on('mouseleave',function(){
                     $(this).children('.block-fixed-1').css('width','20px'); 
                     $(this).children('.block-fixed-3').css('width','25px');
              });
              setTimeout(function(){
                     item.removeClass('opa-item');
              },400);
              $(window).scrollTop(scroll);
       };

       //scroll
       toggleCss();
       $(window).scroll(function(){
              toggleCss();
              sectionClassRemove();
              resize();
              var workTop=$('#work').offset().top;
       });
       function toggleCss(){
              var topflag1=$('.info-top').offset().top;
              var topflag2=$('.now-top').offset().top;
              var topflag3=$('.content-top').offset().top;
              var screen=$(window).scrollTop()+($(window).height()/3)*2;
              var mainheight=$('#header').height();
              var workTop=$('#work').offset().top;
              var toggle=$('.block-fixed-toggle');
              var toggleTop=$('.block-fixed-toggle').offset().top;
              var toggleflag1=$('.toggle-flag1').offset().top;
              var toggleflag2=$('.toggle-flag2').offset().top;
              var toggleflag3=$('.toggle-flag3').offset().top;
              var toggleflag4=$('.toggle-flag4').offset().top;
              var toggleflag5=$('.toggle-flag5').offset().top;
              var toggleflag6=$('.toggle-flag6').offset().top;
              var toggleflag7=$('.toggle-flag7').offset().top;
              if(toggleTop<=mainheight){
                     toggle.children('.block-side-default').css('background','white');
              }else if(workTop<=toggleTop && toggleTop<=toggleflag1){
                     toggle.children('.block-side-default').css('background','black');
              }else if(toggleflag1<=toggleTop && toggleTop<=toggleflag2){
                     toggle.children('.block-side-default').css('background','white');
              }else if(toggleflag2<=toggleTop && toggleTop<=toggleflag3){
                     toggle.children('.block-side-default').css('background','black');
              }else if(toggleflag3<=toggleTop && toggleTop<=toggleflag4){
                     toggle.children('.block-side-default').css('background','white');
              }else if(toggleflag4<=toggleTop && toggleTop<=toggleflag5){
                     toggle.children('.block-side-default').css('background','black');
              }else if(toggleflag5<=toggleTop && toggleTop<=toggleflag6){
                     toggle.children('.block-side-default').css('background','white');
              }else if(toggleflag6<=toggleTop && toggleTop<=toggleflag7){
                     toggle.children('.block-side-default').css('background','black');
              }else if(toggleflag7<=toggleTop){
                     toggle.children('.block-side-default').css('background','white');
              }
              if(screen<=topflag1){
                     $('.side').css('background','#F04E59');
              }else if(topflag1<=screen && screen<=topflag2){
                     $('.side').css('background','#40C2D2');
              }else if(topflag2<=screen && screen<=topflag3){
                     $('.side').css('background','#77C383');
              }else if(topflag3<=screen){
                     $('.side').css('background','#FFC63B');
              }
       }
       function sectionClassRemove(){
              workClassRemove();
       }
       function workClassRemove(){
              var screenTopHeight=$(window).scrollTop()+$(window).height();
              $('.fn-animate').each(function(i,value){
                     var valMinTop=$(this).offset().top;
                     if(valMinTop<screenTopHeight-150){
                            if($(this).hasClass('fn-ok')){
                            }else{
                                   $(this).addClass('fn-ok');
                                   fnInt($(this));
                            }
                     }else{
                            $(this).removeClass('fn-ok');
                            $(this).children('.work-animate-orign').removeClass('work-animate');
                     }
              });
       }
       //scroll

function fnInt(_this){
       var num=0;
       var length=_this.children('.work-animate-orign').length;
       _this.children('.work-animate-orign').eq(num).addClass('work-animate');
       var int=setInterval(function(){
              if(num+1<length){
                     num++;
                     _this.children('.work-animate-orign').eq(num).addClass('work-animate');
              }else{
                     clearInterval(int);
              }
       },100);
}

})(jQuery);
(function($){
       var a='';
       var yellow='';
       $('#black-bg .item').hover(function(){
              a=$(this).children('a');
              yellow=$(this).children('.yellow');
              a.css('color','#F7C039');
              yellow.css('width',$(this).width());
       },function(){
              a=$(this).children('a');
              yellow=$(this).children('.yellow');
              a.css('color','white');
              yellow.css('width',0);
       });
})(jQuery);
//fixed


//section

//main
(function($){
       $('.work-scroll').click(function(){
              $('body').animate({scrollTop:$(window).height()+'px'},800,'swing');
       });
       $('.info-scroll').click(function(){
              $('body').animate({scrollTop:$('#now').offset().top+'px'},800,'swing');
       });
})(jQuery);
//main




//section


//orign
$(window).resize(function(){
       resize();
})
//orign

       
})