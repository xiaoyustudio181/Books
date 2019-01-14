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
  $('#previous').on('click', function () {//上跳
    if(chapter.data[datum_num-2] != undefined){//到上一节
      location.search = '?' + chapter_num+','+(datum_num-1);
    }else{//到上一章最后一节
      location.search = '?' + (chapter_num-1) +','+(data[chapter_num-2].data.length);
    }
  });
  $('#next').on('click', function () {//下跳
    if(chapter.data[datum_num] != undefined){//到下一节
      location.search = '?' + chapter_num+','+(parseInt(datum_num)+1);
    }else{//到下一章第一节
      location.search = '?' + (parseInt(chapter_num)+1) +',1';
    }
  });
  if (chapter_num == 1 && datum_num == 1) {//已在第一章
    $('#previous').addClass('disabled');
    $('#previous').unbind('click');
  }
  if (chapter.data[datum_num]==undefined && data[chapter_num]==undefined) {//已在最后一章
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