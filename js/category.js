window.addEventListener("load",function(){
    var swiper = new Swiper('.category-left .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true
      });
      var swiper1 = new Swiper('.category-right .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
          }
      });
      //左边导航烂点击事件
      var lis = this.document.querySelectorAll(".category-left ul li");
      for (let index = 0; index < lis.length; index++) {
          lis[index].index = index;
          lis[index].addEventListener("click",function(){
            //   console.log(lis[index].index);  
            //   得到li的高度
            var liHeight = this.offsetHeight;
            // console.log(liHeight);
            // 计算要滑动的距离
            var translateY = -index*liHeight;
            // console.log(translateY);
            
            var ulHeight = document.querySelector(".category-left ul").offsetHeight;
            // console.log(ulHeight);
            // 获取滑动高度
            var swiperHeight = document.querySelector(".category-left .swiper-wrapper").offsetHeight;
            //  console.log(swiperHeight);
            //  计算最小位移距离
            var minTranslateY = swiperHeight -ulHeight;
            // console.log(minTranslateY);
            if (translateY<minTranslateY){
                translateY=minTranslateY;
            }
            for(let i =0;i<lis.length;i++){
                lis[i].classList.remove('active');
            }
            this.classList.add("active");
            document.querySelector(".category-left  .swiper-wrapper").style.transform = "translate3d(0px, "+translateY+"px, 0px)"
            document.querySelector(".category-left  .swiper-wrapper").style.transition="(all,1s)";

          });
          
      }
});