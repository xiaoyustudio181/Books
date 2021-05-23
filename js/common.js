//等待html文档载入完成后执行
$(function () {
  /***********************************************************************/
  //展开与折叠（原文）按钮的功能
  $('.open_content').on('click', function () {
    if ($(this).text() === '显示原文(w)') {
      $(this).text('隐藏原文(w)');
    } else {
      $(this).text('显示原文(w)');
    }
    $(this).parent().next().slideToggle(100);
  });
  /***********************************************************************/
//按钮
  $('#previous').on('click', function () {//上一章
    search--;
    location.search = '?' + search;
  });
  $('#next').on('click', function () {//下一章
    search++;
    location.search = '?' + search;
  });
  if (search == 1) {//已在第一章
    $('#previous').addClass('disabled');
    $('#previous').unbind('click');
  }
  if (search == data.length) {//已在最后一章
    $('#next').addClass('disabled');
    $('#next').unbind('click');
  }
  /***********************************************************************/
//热键
  document.onkeydown = function (e) {
    if(!e.ctrlKey){
      if (e.key == 's') {
        document.getElementById('back').click();
      }
      if (e.key == 'f') {
        document.getElementById('back2').click();
      }
      if (e.key == 'a') {
        document.getElementById('previous').click();
      }
      if (e.key == 'd') {
        document.getElementById('next').click();
      }
      if(e.key == 'w'){
        var temp=document.getElementsByClassName('open_content');
        if(temp.length !== 0){
          temp[0].click();
        }
      }
    }
  };
})
;