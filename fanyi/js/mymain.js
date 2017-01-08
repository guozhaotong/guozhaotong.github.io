var ip="123.139.159.38:9218/API";
$(document).ready(function visitor(){ 
    
    $.ajax({
                type: "get",
                timeout: 10000,
                url: "http://"+ip+"/count/get",
                cache: false,
                dataType:"text",
                data: {name:"fanyi"},
                success: function(data) {
                    $("#ncount").html(data);
                },
                error: function(errorMsg) {
                    $("#ncount").html(">>>>>后台出错~~~程序员买服务器中~~~支付宝赞助：15667083270<<<<<");
                }
    });
}
)


document.onkeydown = function(e) {
        var theEvent = window.event || e;
        var code = theEvent.keyCode || theEvent.which;
        if (code == 13) {
           fanyi();
        }
    }

function fanyi(){
    $.ajax({
        type: "get",
        timeout: 10000,
        url: "http://"+ip+"/baidu/get",
        cache: false,
        dataType:"text",
        data: {q:$("#text").val()},
        success: function(data) {
             $("#baidu_result").html(data);
        },
        error: function(errorMsg) {
            $("#baidu_result").html("不好意思，后台服务器罢工了!正在购买新新服务器！友情赞助支付宝：15667083270");
        }
    });
     $.ajax({
        type: "get",
        timeout: 10000,
        url: "http://"+ip+"/bing/get",
        cache: false,
        dataType:"text",
        data: {q:$("#text").val()},
        success: function(data) {
             $("#Bing_result").html(data);
        },
        error: function(errorMsg) {
            $("Bing_result").html("不好意思，后台服务器罢工了!正在购买新新服务器！友情赞助支付宝：15667083270");
        }
    });
    $.ajax({
        type: "get",
        timeout: 10000,
        url: "http://"+ip+"/youdao/get",
        cache: false,
        dataType:"text",
        data: {q:$("#text").val()},
        success: function(data) {
             $("#youdao_result").html(data);
        },
        error: function(errorMsg) {
            $("#youdao_result").html("不好意思，后台服务器罢工了!正在购买新新服务器！友情赞助支付宝：15667083270");
        }
    });

     $.ajax({
        type: "get",
        timeout: 10000,
        url: "http://"+ip+"/aiciba/get",
        cache: false,
        dataType:"text",
        data: {q:$("#text").val()},
        success: function(data) {
             $("#aiciba_result").html(data);
        },
        error: function(errorMsg) {
            $("#aiciba_result").html("不好意思，后台服务器罢工了!正在购买新新服务器！友情赞助支付宝：15667083270");
        }
    });

     $.ajax({
        type: "get",
        timeout: 10000,
        url: "http://"+ip+"/google/get",
        cache: false,
        dataType:"text",
        data: {q:$("#text").val()},
        success: function(data) {
             $("#google_result").html(data);
        },
        error: function(errorMsg) {
            $("#google_result").html("不好意思，后台服务器罢工了!正在购买新新服务器！友情赞助支付宝：15667083270");
        }
    });
}