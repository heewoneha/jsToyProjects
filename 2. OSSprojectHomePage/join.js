window.addEventListener('load', function() {
    var signed = document.querySelector('#signed');
    signed.addEventListener('click', function() {
        var id = document.querySelector('#id');
        var pw1 = document.querySelector('#pw1');
        var pw2 = document.querySelector('#pw2');
        var name=document.querySelector('#name');

        if (id.value == '' || id.value.length < 8 || id.value.length > 12) {
            alert('아이디는 8~12자리입니다.');
        } else if (pw1.value == '' || pw1.value.length > 12 || pw1.value.length < 8) {
            alert('비밀번호는 8~12자리입니다.');
        } else if (pw1.value != pw2.value) {
            alert('패스워드가 일치하지 않습니다.');
        } else if (name.value == '') {
            alert("이름을 입력하세요.");
        } else {
            alert('회원가입 되었습니다.');
        }
    });
});