window.addEventListener('load', function() {
    var logined = document.querySelector('#login');
    logined.addEventListener('click', function() {
        var id = document.querySelector('#id');
        var pw = document.querySelector('#pw');
        if (id.value == '' || id.value.length < 8 || id.value.length > 12) {
            alert('아이디는 8~12자리입니다.');
        } else if (pw.value == '' || pw.value.length > 12 || pw.value.length < 8) {
            alert('비밀번호는 8~12자리입니다.');
        } else {
            alert('로그인 되었습니다.');
        }
    });
});