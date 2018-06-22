$(function () {

    //快捷键
    document.onkeydown=function (e){
        if(e.key=='s'){//返回
            document.getElementById('back').click();
        }
        if(e.key=='d'){//下一节或下一张
            document.getElementById('next').click();
        }
        if(e.key=='a'){//上一节或下一张
            document.getElementById('previous').click();
        }
    };

});