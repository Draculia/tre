/**
 * Created by Administrator on 2020/5/26.
 */
var news=[

    "这动画结局直接封神!评分9.9,主角骚到你这辈子都忘不了!",
    "「灯泡动画」炎炎夏日,既然买不起空调,那么就去抢一个吧",
    "从星河舰队到鬼火摩托！带你看崩坏3理之律者的传承之路!",
    "高能炸裂，超神打斗！简评《鬼灭之刃》第19话",
    "网络故障全美仅一台电脑能联网,军人持枪看守,每人排队可用40秒..",
    "（一拳超人）新篇！S级1位爆破的首次登场！",
    "明日方舟手书-整合运动」voracity-来召开一场掠夺生命的盛宴吧-..."
];
var news2=[
"【清风】风云3第89期 梦断顽城 杀性难逃",
"【（假）互动视频】你能在猴山的龙舟大赛里，吃到粽子吗~",
"【七濑胡桃】日本水果的特点：贵！贵！贵！",
"【独家：异兽魔都】于噩梦中若隐若现的记忆碎片",
"【HUSH的硬核美漫】小丑“新欢”起源揭秘，这姑娘是个狠人！",
"【石上优】你温柔对待这个世界,世界会温柔对待你吗？",
"【小道消息】媒体报道江口拓也与引退女声优远藤祐里香同居 或已成婚"
];
var news3=[
    "7月新番代理归属及播放平台汇总与分析",
    "【朱一旦】金钱到底能够买什么？",
    "边吃荞麦面边哭诉的芦苇娘",
    "【A秀土味】：我真嘞好中意你（As.第124期）",
    "2020年碉堡有趣视频合辑【第20期】（5蕉看撸主女装？？~）",
    "【独家】阿苇不可告人的秘密【B-Box】",
    "【冰期】地球会不会再次进入冰期？冰期和物种演化有什么关系？"
];
var news4=[
"【木然/阿苇/奈奈/ATM】2020-06-26 盗贼之海 梦幻联动 直播录像",
"【密探来报】第七期 一鸡也行？亿鸡也行！",
"最强王者组有手就行の基本操作 #15",
"【游戏王OCG⑨课字幕组】我和朋友们的黑暗游戏Y 决胜吧！最强的三条次元！",
"【独家】《荣耀战魂》: 仍然有人靠爱守护着这个游戏",
    "连续销量不佳逼急制作人，做出这款另类的游戏",
    "大明竟然远洋美洲？看似星辰大海的路途却有暗流涌动"

];
var news6=[
   " 终究是输给了漂亮妹妹【acfun网文带师第八期】",
    "【唐茶直播精剪③】听过的人都fong了【歌曲鉴赏回】",
    "【独家】阿苇不可告人的秘密【B-Box】",
    "【奥雷】暗黑武术大会之后的新任务，灵界消失！神秘的冥界强敌！《幽游白书》18",
    "【新番导视】2020年7月新番介绍+国内版权分布（正式版）",
    "《道德经》十五章：蔽而新成。无为的逍遥圣人，到底是怎样的德行？",
    "【清风】风云3第89期 梦断顽城 杀性难逃"
];

var news5=[
    "以理扶人：李子柒“变”越南人，越南偷中国文化上瘾了？",
    "隐藏结局全解读！国产悬疑封神作！最终真相令人窒息！",
"【史蒂芬周】城市深处潜伏巨大怪物，揭露令人不耻的人性。《神秘博士》S05E02讲解+梳理。",
"【万恶之源】桥本环奈的四大名场面，这一定是幻觉",
"《影视盲点》那个马家堡人死了，聊聊范德彪的魔幻现实主义。",
"《假面骑士build》e总皮套形态盘点！",
"【话奥26】你选择月亮，还是六便士？-『极致解读赛文xPart4』"
];
function getNews() {
    var newList=document.getElementById('new-list');

    var ol=document.createElement('ol');
    ol.style.paddingLeft="0";
    for(var i=0;i<news.length;i++){
        var li=document.createElement("li");
        var a=document.createElement("a");
        var tex=document.createTextNode(news[i]);
        a.setAttribute("href","new.html");
        li.append(a);
        ol.append(li);
        a.append(tex);
    }
    newList.appendChild(ol);



    var newList2 = document.getElementById('rank-list');

    var ol2 = document.createElement('ol');
    ol2.style.paddingLeft = "10";
    for (var i2 = 0; i2 < news2.length; i2++) {
        var li2 = document.createElement("li");
        var a2 = document.createElement("a");
        var tex2 = document.createTextNode(news2[i2]);
        a2.setAttribute("href", "new.html");
        li2.append(a2);
        ol2.append(li2);
        a2.append(tex2);
    }

    newList2.appendChild(ol2);

    var newList3 = document.getElementById('rank-list3');

    var ol3 = document.createElement('ol');
    ol3.style.paddingLeft = "10";
    for (var i3 = 0; i3 < news3.length; i3++) {
        var li3 = document.createElement("li");
        var a3 = document.createElement("a");
        var tex3 = document.createTextNode(news3[i3]);
        a3.setAttribute("href", "new.html");
        li3.append(a3);
        ol3.append(li3);
        a3.append(tex3);
    }

    newList3.appendChild(ol3);
    var newList4 = document.getElementById('rank-list4');

    var ol4 = document.createElement('ol');
    ol4.style.paddingLeft = "10";
    for (var i4 = 0; i4< news4.length; i4++) {
        var li4 = document.createElement("li");
        var a4 = document.createElement("a");
        var tex4 = document.createTextNode(news4[i4]);
        a4.setAttribute("href", "new.html");
        li4.append(a4);
        ol4.append(li4);
        a4.append(tex4);
    }

    newList4.appendChild(ol4);
    var newList5 = document.getElementById('rank-list5');

    var ol5 = document.createElement('ol');
    ol5.style.paddingLeft = "10";
    for (var i5 = 0; i5 < news5.length; i5++) {
        var li5 = document.createElement("li");
        var a5 = document.createElement("a");
        var tex5 = document.createTextNode(news5[i5]);
        a5.setAttribute("href", "new.html");
        li5.append(a5);
        ol5.append(li5);
        a5.append(tex5);
    }

    newList5.appendChild(ol5);
    var newList22 = document.getElementById('rank-list2');

    var ol22 = document.createElement('ol');
    ol22.style.paddingLeft = "10";
    for (var i22 = 0; i22 < news6.length; i22++) {
        var li22 = document.createElement("li");
        var a22 = document.createElement("a");
        var tex22 = document.createTextNode(news6[i22]);
        a22.setAttribute("href", "new.html");
        li22.append(a22);
        ol22.append(li22);
        a22.append(tex22);
    }

    newList22.appendChild(ol22);
}
$(function () {
    $(".animation").mouseenter(function () {

        $("#fanju").fadeIn(200,function(){
            $("#fanju").css("display","block");
        });
    });
    $(".animation").mouseleave(function () {

        $("#fanju").fadeOut(200,function(){
            $("#fanju").css("display","none");
        });
    });
    $(".mad").mouseenter(function () {

        $(".mad1").fadeIn(200,function(){
            $(".mad1").css("display","block");
        });
    });
    $(".mad").mouseleave(function () {

        $(".mad1").fadeOut(200,function(){
            $(".mad1").css("display","none");
        });
    });
    $(".philosophy").mouseenter(function () {

        $(".philosophy1").fadeIn(200,function(){
            $(".philosophy1").css("display","block");
        });
    });
    $(".philosophy").mouseleave(function () {

        $(".philosophy1").fadeOut(200,function(){
            $(".philosophy1").css("display","none");
        });
    });
    $(".movie").mouseenter(function () {

        $(".movie1").fadeIn(200,function(){
            $(".movie1").css("display","block");
        });
    });
    $(".movie").mouseleave(function () {

        $(".movie1").fadeOut(200,function(){
            $(".movie1").css("display","none");
        });
    });
    $(".technology").mouseenter(function () {

        $(".technology1").fadeIn(200,function(){
            $(".technology1").css("display","block");
        });
    });
    $(".technology").mouseleave(function () {

        $(".technology1").fadeOut(200,function(){
            $(".technology1").css("display","none");
        });
    });
    $(".dance").mouseenter(function () {

        $(".dance1").fadeIn(200,function(){
            $(".dance1").css("display","block");
        });
    });
    $(".dance").mouseleave(function () {

        $(".dance1").fadeOut(200,function(){
            $(".dance1").css("display","none");
        });
    });
    $(".liveStreaming").mouseenter(function () {

        $(".liveStreaming1").fadeIn(200,function(){
            $(".liveStreaming1").css("display","block");
        });
    });
    $(".liveStreaming").mouseleave(function () {

        $(".liveStreaming1").fadeOut(200,function(){
            $(".liveStreaming1").css("display","none");
        });
    });
    $(".food").mouseenter(function () {

        $(".food1").fadeIn(200,function(){
            $(".food1").css("display","block");
        });
    });
    $(".food").mouseleave(function () {

        $(".food1").fadeOut(200,function(){
            $(".food1").css("display","none");
        });
    });
    $(".live").mouseenter(function () {

        $(".live1").fadeIn(200,function(){
            $(".live1").css("display","block");
        });
    });
    $(".live").mouseleave(function () {

        $(".live1").fadeOut(200,function(){
            $(".live1").css("display","none");
        });
    });
    $(".music").mouseenter(function () {

        $(".music1").fadeIn(200,function(){
            $(".music1").css("display","block");
        });
    });
    $(".music").mouseleave(function () {

        $(".music1").fadeOut(200,function(){
            $(".music1").css("display","none");
        });
    });
    $(".sports").mouseenter(function () {

        $(".sports1").fadeIn(200,function(){
            $(".sports1").css("display","block");
        });
    });
    $(".sports").mouseleave(function () {

        $(".sports1").fadeOut(200,function(){
            $(".sports1").css("display","none");
        });
    });
    $(".star").mouseenter(function () {

        $(".star1").fadeIn(200,function(){
            $(".star1").css("display","block");
        });
    });
    $(".star").mouseleave(function () {

        $(".star1").fadeOut(200,function(){
            $(".star1").css("display","none");
        });
    });
    $(".game").mouseenter(function () {

        $(".game1").fadeIn(200,function(){
            $(".game1").css("display","block");
        });
    });
    $(".game").mouseleave(function () {

        $(".game1").fadeOut(200,function(){
            $(".game1").css("display","none");
        });
    });
    $(".novel").mouseenter(function () {

        $(".novel1").fadeIn(200,function(){
            $(".novel1").css("display","block");
        });
    });
    $(".novel").mouseleave(function () {

        $(".novel1").fadeOut(200,function(){
            $(".novel1").css("display","none");
        });
    });
    $(".fishPonds").mouseenter(function () {

        $(".fishPonds1").fadeIn(200,function(){
            $(".fishPonds1").css("display","block");
        });
    });
    $(".fishPonds").mouseleave(function () {

        $(".fishPonds1").fadeOut(200,function(){
            $(".fishPonds1").css("display","none");
        });
    });
});
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 3000,
    speed: 1000,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    effect: 'flip',//  effect: 'flip',effect: 'coverflow',slide', 'fade',cube
    grabCursor: true,
    cube: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94
    }
});

$(function(){
    var n=document.getElementById('head-mid');
    var c=document.getElementsByClassName('background-center');
    var nn=n.offsetTop;
    var toTop=document.getElementById("btn");
    toTop.style.display="none";
    console.log(nn);//321//
    var pageHeight=200;
    window.onscroll=function () {
        var backTop=document.documentElement.scrollTop ||document.body.scrollTop;
//            吸顶灯
        if(backTop>=255){

            n.style.position="fixed";
//            n.style.marginTop="0";
            n.style.top="50px";
//            n.style.left="0";
            n.style.zIndex="10";
            c.style.marginTop="148"

        }
        else {
            n.style.position="";
        }

        if(backTop>pageHeight){
            toTop.style.display="block";
        }
        else {
            toTop.style.display="none";
        }
    };
    var timer=null;
    toTop.onclick=function () {
        timer=setInterval(function () {
            var backTop=document.documentElement.scrollTop ||document.body.scrollTop;
            var speedTop=backTop/5;
            document.documentElement.scrollTop= backTop - speedTop;
            if(backTop == 0){
                clearInterval(timer);
            }
        },30)
    };
});

$(function(){
    $("dd").width(120);
});



$(function(){

    $("#r1").mouseenter(function () {

        $("#r11").slideDown(200,function(){
            $("#r11").css("display","block");
            $("#r111").css("display","none");
        });
    });
    $("#r11").mouseleave(function () {

        $("#r11").slideUp(200,function(){
            $("#r11").css("display","none");
            $("#r111").css("display","block");
        });
    });
    $("#r2").mouseenter(function () {

        $("#r22").slideDown(200,function(){
            $("#r22").css("display","block");
            $("#r222").css("display","none");
        });
    });
    $("#r22").mouseleave(function () {

        $("#r22").slideUp(200,function(){
            $("#r22").css("display","none");
            $("#r222").css("display","block");
        });
    });
    $("#r3").mouseenter(function () {

        $("#r33").slideDown(200,function(){
            $("#r33").css("display","block");
            $("#r333").css("display","none");
        });
    });
    $("#r33").mouseleave(function () {

        $("#r33").slideUp(200,function(){
            $("#r33").css("display","none");
            $("#r333").css("display","block");
        });
    });
    $("#r4").mouseenter(function () {

        $("#r44").slideDown(200,function(){
            $("#r44").css("display","block");
            $("#r444").css("display","none");
        });
    });
    $("#r44").mouseleave(function () {

        $("#r44").slideUp(200,function(){
            $("#r44").css("display","none");
            $("#r444").css("display","block");
        });
    });
    $("#r5").mouseenter(function () {

        $("#r55").slideDown(200,function(){
            $("#r55").css("display","block");
            $("#r555").css("display","none");
        });
    });
    $("#r55").mouseleave(function () {

        $("#r55").slideUp(200,function(){
            $("#r55").css("display","none");
            $("#r555").css("display","block");
        });
    });
    $("#r6").mouseenter(function () {

        $("#r66").slideDown(200,function(){
            $("#r66").css("display","block");
            $("#r666").css("display","none");
        });
    });
    $("#r66").mouseleave(function () {

        $("#r66").slideUp(200,function(){
            $("#r66").css("display","none");
            $("#r666").css("display","block");
        });
    });



});



// $(function(){
// window.onload=function () {
// $(".row1").on('mouseenter',function (event) {
//     {
//        var x=event.target;
//         $((x.id)).css("display","none");
//     }
//
// });
// }
// });
// document.getElementById('center-block-movie').addEventListener("click",function(e){
//     console.log(e);
// });

// $(function aaaa() {
//   var cbm=document.getElementById('center-block-movie');
//   cbm.onmouseover=function (e) {
//       var event = e || window.event;
//       var target = event.target || event.srcElement;
//       if(target.tagName.toLowerCase()=='img'){
//           switch (target.id){
//               case 'r1':
//                   $("#r11").slideDown(200,function(){
//                       $("#r11").css("display","block");
//                       $("#r111").css("display","none");
//                   });
//                   break;
//               case 'r2':
//                   $("#r22").slideDown(200,function(){
//                       $("#r22").css("display","block");
//                       $("#r222").css("display","none");
//                   });
//                   break;
//               case 'r3':
//                   $("#r33").slideDown(200,function(){
//                       $("#r33").css("display","block");
//                       $("#r333").css("display","none");
//                   });
//                   break;
//               case 'r4':
//                   $("#r44").slideDown(200,function(){
//                       $("#r44").css("display","block");
//                       $("#r444").css("display","none");
//                   });
//                   break;
//               case 'r5':
//                   $("#r55").slideDown(200,function(){
//                       $("#r55").css("display","block");
//                       $("#r555").css("display","none");
//                   });
//                   break;
//               case 'r6':
//                   $("#r66").slideDown(200,function(){
//                       $("#r66").css("display","block");
//                       $("#r666").css("display","none");
//                   });
//                   break;
//           }
//
//       }
//   }
// });








    //
    // //    else if(target.nodeName.toLowerCase()=='span'){
    //         cbm.onload=function (e) {
    //             var event = e || window.event;
    //             var target = event.target || event.srcElement;
    //             if(target.mouseleave='span'){
    //             switch (target.id){
    //                 case 'r1':
    //                     $("#r11").slideUp(200,function(){
    //                         $("#r11").css("display","none");
    //                         $("#r111").css("display","block");
    //                     });
    //                     break;
    //                 case 'r2':
    //                     $("#r22").slideDown(200,function(){
    //                         $("#r22").css("display","none");
    //                         $("#r222").css("display","block");
    //                     });
    //                     break;
    //                 case 'r3':
    //                     $("#r33").slideDown(200,function(){
    //                         $("#r33").css("display","none");
    //                         $("#r333").css("display","block");
    //                     });
    //                     break;
    //                 case 'r4':
    //                     $("#r44").slideDown(200,function(){
    //                         $("#r44").css("display","none");
    //                         $("#r444").css("display","block");
    //                     });
    //                     break;
    //                 case 'r5':
    //                     $("#r55").slideDown(200,function(){
    //                         $("#r55").css("display","none");
    //                         $("#r555").css("display","block");
    //                     });
    //                     break;
    //                 case 'r6':
    //                     $("#r66").slideDown(200,function(){
    //                         $("#r66").css("display","none");
    //                         $("#r666").css("display","block");
    //                     });
    //                     break;
    //             }}
    //         }
    //
    //     });
    //



// var time=null;
// function () {
//     if(timer){
//         clearTimeout(time);
//     }
//     time=setTimeout(()=>{
//         aaa
//         })
// }




