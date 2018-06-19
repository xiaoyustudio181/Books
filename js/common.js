//等待html文档载入完成后执行
$(function () {

    //首次进入，折叠所有原文
    $('.content').each(function () {
        $(this).hide();
    });

    //展开与折叠（原文）按钮的功能
    $('.open_content').each(function () {
        $(this).on('click',function () {
            if($(this).text()=='展开原文'){
                $(this).text('折叠原文');
            }else{
                $(this).text('展开原文');
            }
            $(this).parent().next().slideToggle(100);
        });
    });

});