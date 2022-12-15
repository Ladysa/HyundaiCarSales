$(function(){
    var total = $(".slide-page").length;
    var currBanner = 1;
    var banWidth = ($(".slide-page").width() * 100 / screen.width);

    var int;

    function bannerSlider(){
        int = setInterval(function(){
            if(currBanner == total){
                $(".slide-in").animate({"margin-left":"0vw"}, 1000);
                currBanner = 1;
            }else{
                $(".slide-in").animate({"margin-left":"-=" + banWidth + "vw"}, 1000);
                currBanner += 1;
            }
        }, 2500)
    }

    $('.next').on('click', function(){
        if(currBanner == total){
            currBanner = 1;
        }else{
            currBanner += 1;
        }
        $(".slide-in").animate({"margin-left" : "-" + (currBanner-1)*banWidth + "vw"}, 1000);
        clearInterval(int);
        bannerSlider();
    });

    $('.prev').on('click', function(){
        if(currBanner == 1){
            currBanner = total;
        }else{
            currBanner -= 1;
        }
        $(".slide-in").animate({"margin-left" : "-" + (currBanner-1)*banWidth + "vw"}, 1000);
        clearInterval(int);
        bannerSlider();
    });

    bannerSlider();
});