$(function(){
   //banner幻灯片-begin
    var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
	});
    //login登录-begin
    $(".login-container ul li").each(function(index,element){
    	$(this).bind("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
            if(index==0){
              	$(".line").css("left","7%");
            }else{
              	$(".line").css("left","57%");
            }
            $(".login-list .form").eq($(this).index()).show().siblings().hide();
    	});
    }); 
    $(".name input").on("focus",function(){
    	$(".error-prompt").show();
    })
    //icon-list  图标列表
    $(".icon-list .list-text").bind("mousemove",function(){
        $(this).addClass("active").siblings().removeClass("active");
    }); 
    //直播视频
    $(".live-top ul li").bind("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".live-text .live-text-list").eq($(this).index()).show().siblings().hide();
    });
    $(".title-nav li").bind("mousemove",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".live-text-list-container .list").eq($(this).index()).show().siblings().hide();   
    });
     $(".big-img-list").bind("mousemove",function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    //微信推广
    $(".WeChat-nav li").bind("mousemove",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".WeChat-text-all .WeChat-text-list").eq($(this).index()).show().siblings().hide();
    }); 
    //近7天头条阅读数图表
    $('#chart1').highcharts({
        credits: {
            text: '',
            href: ''
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['9-27', '9-28', '9-29', '9-30', '10-1', '10-2','10-3'],
            tickPixelInterval:1
        },
        yAxis: {
            title: {
                text: ''
            },
            tickPositions: [0,5, 10, 15],
            tickPixelInterval:1
        },
        series: [{
            name: '近7天头条阅读数',
            data: [10, 10, 10, 10, 10, 10]
        }]
    });
    $('#chart2').highcharts({
        credits: {
            text: '',
            href: ''
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['9-27', '9-28', '9-29', '9-30', '10-1', '10-2','10-3'],
            tickPixelInterval:1
        },
        yAxis: {
            title: {
                text: ''
            },
            tickPositions: [0,5, 10, 15],
            tickPixelInterval:1
        },
        series: [{
            name: '近7天头条阅读数',
            data: [10, 10, 10, 10, 10, 10]
        }]
    });
    $('#chart3').highcharts({
        credits: {
            text: '',
            href: ''
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['9-27', '9-28', '9-29', '9-30', '10-1', '10-2','10-3'],
            tickPixelInterval:1
        },
        yAxis: {
            title: {
                text: ''
            },
            tickPositions: [0,5, 10, 15],
            tickPixelInterval:1
        },
        series: [{
            name: '近7天头条阅读数',
            data: [10, 10, 10, 10, 10, 10]
        }]
    });
    //微博红人
    $(".Micro-nav li").bind("mousemove",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".Micro-text-all .Micro-text-list").eq($(this).index()).show().siblings().hide();
    }); 
    $('#microChart1').highcharts({
        credits: {
            text: '',
            href: '',
            backgroundColor: '#fbcb51',
            enabled:false 
        },
        colors: ['#fbcb51'],
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: '',
            x: -80
        },
        pane: {
            size: '80%'
        },
        xAxis: {
            categories: ['热门度', '性价比', '传播力', '覆盖度','互动性', '知名度'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 999990,
            layout: '0'
        },
        series: [{
            name: '数量',
            data: [50, 2, 42, 31, 26, 14],
            pointPlacement: 'on'
        }]
    });
    $('#microChart2').highcharts({
        credits: {
            text: '',
            href: '',
            backgroundColor: '#fbcb51',
            enabled:false 
        },
        colors: ['#fbcb51'],
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: '',
            x: -80
        },
        pane: {
            size: '80%'
        },
        xAxis: {
            categories: ['热门度', '性价比', '传播力', '覆盖度','互动性', '知名度'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 999990,
            layout: '0'
        },
        series: [{
            name: '数量',
            data: [50, 2, 42, 31, 26, 14],
            pointPlacement: 'on'
        }]
    });
    $(".highcharts-button").hide();
    //软文发稿
    $(".soft-nav li").bind("mousemove",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".soft-text-all .soft-text-list").eq($(this).index()).show().siblings().hide();
    }); 
    $(".soft-top li").bind("hover",function(){
        $(this).addClass("active").siblings().removeClass("active");
    }); 
    //蜂效应
    $(".bee-nav li").bind("mousemove",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".bee-text-all .bee-text-list").eq($(this).index()).show().siblings().hide();
    }); 
    //媒介专家
     $(".specialist-list").bind("hover",function(){
        $(this).toggleClass("active");
    }); 
	//成功案例
	$(".successful-ul li").bind("mousemove",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".successful-text-all .successful-text-list").eq($(this).index()).show().siblings().hide();
    }); 
    $(".link-img li").bind("hover",function(){
        $(this).addClass("active").siblings().removeClass("active");
    }); 
	//backtop
    $(".back-top .top").bind("click",function(){
        $('html,body').animate({scrollTop: '0px'}, 800);
    }); 
    $(".back-top .qq").bind("mousemove",function(){
       $(this).addClass("active");
    });
     $(".back-top .qq").bind("mouseout",function(){
       $(this).removeClass("active");
    });
      $(".back-top .top").bind("mousemove",function(){
       $(this).addClass("active");
    });
     $(".back-top .top").bind("mouseout",function(){
       $(this).removeClass("active");
    });

    //WeChat_promotion 微信推广01
    $(".promotion li").bind("mousemove",function(){
        $(this).addClass("active").siblings().removeClass("active");
    }); 
    //WeChat_promotion 微信推广02
    $(".WeChat-success-nav li").bind("mousemove",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".success-all .success-list").eq($(this).index()).show().siblings().hide();
    });

});