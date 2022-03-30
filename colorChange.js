/*  작성자 : 201712933 경영정보학과 김정우
    연결파일 : assign_4W.html
    설명 : 배경화면 색을 사용자가 입력하고 입력된 값들에 대해서 변경
*/

const button = document.getElementById('changeBtn'); // 배경 변경 버튼
const button1 = document.getElementById('arr_check'); // 색상 목록 확인버튼
const button2 = document.getElementById('arr_del'); // 마지막으로 추가한 색 삭제 버튼
const button3 = document.getElementById('resets'); // 현재 배경화면을 하얀색(초기화) 버튼
const colors = ['red', 'orange', 'yellow']; // 기본 색상들

function change() {
  document.body.style.background = colors[Math.floor(colors.length * Math.random())];
}

button.addEventListener('click', change);

// 사용자 지정 색 추가하는 함수
function addColor() {
  let color = document.getElementById('usr_color');
  // 입력값이 있다면
  if (color.value != '') {
    alert(color.value + ' 를 목록에 추가했습니다');
    colors.push(color.value);
    color.value = null;
    color.focus();
  } else {
    alert('색상을 입력해주세요');
    color.focus();
  }
}

// 색상 삭제
function delColor() {
  if (colors.length == 3) {
    window.alert('삭제할 색상이 없습니다!');
    color.focus();
  } else {
    colors.pop();
    window.alert('마지막 색을 삭제했습니다');
    color.focus();
  }
}

button2.addEventListener('click', delColor);

// 색상 초기화
function resetColor() {
  document.body.style.background = 'white';
}
button3.addEventListener('click', resetColor);

// 디버깅용 함수 (colors 배열을 확인)
function show() {
  window.alert('현재 색상 목록은 ' + colors + ' 입니다');
  //document.write("<input type='button' value='뒤로가기' onclick='history.back(1)'>");
}
button1.addEventListener('click', show);
