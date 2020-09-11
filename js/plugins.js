
$(function(){

$(".j p:first-of-type span").on("click",function(){

$(this).css("backgroundColor","green").siblings().css("backgroundColor","black")

})

$(".j p:first-of-type span:first-of-type").on("click",function(){

$(".par p:first-of-type").fadeIn(2000).siblings().hide()

})

$(".j p:first-of-type span:nth-of-type(2)").on("click",function(){

$(".par p:nth-of-type(2)").fadeIn(2000).siblings().hide()

})

$(".j p:first-of-type span:nth-of-type(3)").on("click",function(){

$(".par p:nth-of-type(3)").fadeIn(2000).siblings().hide()
        
})

$(".j p:first-of-type span:nth-of-type(4)").on("click",function(){

$(".par p:nth-of-type(4)").fadeIn(2000).siblings().hide()

})

$(".j p:first-of-type span:nth-of-type(5)").on("click",function(){

$(".par p:nth-of-type(5)").fadeIn(2000).siblings().hide()
        
})








});
