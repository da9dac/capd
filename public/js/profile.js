var cont = document.querySelector('.cont');
var elsArr = [].slice.call(document.querySelectorAll('.el'));
var closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  cont.classList.remove('s--inactive');
}, 200);

elsArr.forEach(function(el) {
  el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return; 
    //s--active 값이 존재하는지 확인
    //존재하면 모든 함수 종료
    //아니면 아래 실행
    cont.classList.add('s--el-active');
    //cont에 s--el-active 클래스 값을 추가
    this.classList.add('s--active');
  });
});

closeBtnsArr.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});