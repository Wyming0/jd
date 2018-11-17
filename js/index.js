window.addEventListener("load",function(){
    //1. 滚动事件
    var sildeHeight = this.document.querySelector("#slides").offsetHeight;
    getOpacity();
    window.addEventListener("scroll",getOpacity);
    function getOpacity(){
        var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
        var opacity = scrollHeight/sildeHeight;
        if(opacity<=1){
            document.querySelector("#header").style.backgroundColor="rgba(222, 24, 27, "+opacity+")"
        }else {
            document.querySelector("#header").style.backgroundColor="rgba(222, 24, 27, 1)"
        } 
    }
    //2.倒计时
    var futureTime = new Date(2018,10,14,17,00,00).getTime();//未来时间
    // console.log(futureTime);
    var nowTime = new Date().getTime();//当前时间
    // console.log(nowTime);
    
    var time = Math.floor((futureTime - nowTime)/1000);
    // console.log(time);
    var timeSpan = this.document.querySelectorAll(".seckill-time span");
    setInterval(function(){
        time--;
        var hour = Math.floor( time / 3600 );
        // console.log(hour);
        //例如:  3670s /60  得分 有可能超过1小时 %60(把小时去掉)   
        var min = Math.floor(time / 60 % 60 );
        // console.log(min);
        // %60      70 % 60 =10   130%60 =10
        var sec = Math.floor(time%60);
        // console.log(sec);
        timeSpan[0].innerHTML =Math.floor(hour/10);
        timeSpan[1].innerHTML =Math.floor(hour%10);
        timeSpan[3].innerHTML =Math.floor(min/10);
        timeSpan[4].innerHTML =Math.floor(min%10);
        timeSpan[6].innerHTML =Math.floor(sec/10);
        timeSpan[7].innerHTML =Math.floor(sec%10);
    },1000);

}
);