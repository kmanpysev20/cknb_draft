$(document).ready(function () {
  init();
});

function init() {
  introTxt();
}

// intro 텍스트 애니메이션 함수
function introTxt() {
  let text = $(".updown-transition").text();
  $(".updown-transition").html(""); // 기존 텍스트를 초기화
  for (let i = 0; i < text.length; i++) {
      let letter = text[i] === " " ? "&nbsp;" : text[i]; // 공백은 &nbsp;로 처리
      $(".updown-transition").append(`<span class="animate-letter">${letter}</span>`);
  }

  // 각 글자에 애니메이션 적용
  $(".animate-letter").each(function (index) {
      $(this).css("opacity", "0"); // 처음에 투명하게 설정
      setTimeout(() => {
          $(this)
              .animate({ top: "-10px", opacity: "1" }, 250) // 위로 10px 올라가면서 나타나기
              .animate({ top: "0px" }, 250); // 다시 제자리로 내려오기
      }, index * 100); // 각 글자마다 0.1초씩 지연 시간 부여
  });

  // 전체 애니메이션 완료 후 1초 대기 후 introTxt 반복
  setTimeout(introTxt, $(".animate-letter").length * 100 + 2500);

  // 애니메이션이 처음 실행된 후 5초 뒤 mainMove 함수 호출
  setTimeout(mainMove, $(".animate-letter").length * 100 + 5500);
}

// 페이지 이동 함수
function mainMove() {
  // git 전용
  // location.href ="../PYS_Portfolio/html/main.html";
  // local 전용
  location.href = "../src/html/main.html";
}