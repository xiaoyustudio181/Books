//等待html文档载入完成后执行
$(function () {

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

    //快捷键
    document.onkeydown=function (e){
        if(e.key=='s'){//返回
            document.getElementById('back').click();
        }
        if(e.key=='a'){//上一节
            document.getElementById('previous').click();
        }
        if(e.key=='d'){//下一节
            document.getElementById('next').click();
        }
    };

});