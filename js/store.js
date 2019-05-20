(function () {
    var morelist = $('#morelist>li');
    var con = $("#hot>.mlist");
    [...morelist].forEach((ele,index)=>{
        ele.onclick = function () {
            $('#morelist>li').eq(index).siblings().removeClass("active");
            $('#morelist>li').eq(index).addClass("active");
            $('#hot>.mlist').eq(index).siblings().removeClass("active");
            $('#hot>.mlist').eq(index).addClass("active");
        }
    })
})()