//오늘의 운세 함수
function todayFortune(){
    var arr=['즐거운 하루가 되겠네요! ','오늘은 무슨 일이든 잘 풀려요. ','해답은 나에게 있다. ', '좋은 소식이 들려와요. ']; //배열 1 (운세)
    var arr2=['다이아몬드','에메랄드','루비','사파이어']; //배열2 (보석)
    const what1=Math.floor(Math.random()*4); //배열1 인덱스 난수
    const what2=Math.floor(Math.random()*4); //배열2 인덱스 난수
    alert('오늘의 운세: '+arr[what1] +'\n오늘의 보석: '+arr2[what2]); //경고창에 출력
}
//현재 시간 화면 출력 함수
window.onload = function whatTime() {
    var clk = document.getElementById('clock');
    setInterval(function() {
        var now = new Date();
        clock.innerHTML = now.toString();
    }, 1000);
  };