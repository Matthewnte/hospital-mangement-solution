$(() => {
    //login as admin
    $('#sign-up-app').on('click', (e) => {
        e.preventDefault();
        let $data = {
            signupEmail: $('#signupEmail').val(),
            signupPassword: $('#signupPassword').val()
        }
        $.post('http://localhost:3000/admin', $data, (data) => {
            localStorage.setItem('email', data.signupEmail)
            window.location = '../index.html';
        })
    })

    //sign in
    $('#sign-in-app').on('click', (e) => {
        let $data = {
            email: $('#loginEmail').val(),
            password: $('#loginPassword').val(),
        }
        $.get('http://localhost:3000/admin', data => {
            data.some(item => {
                if(item.signupEmail === $data.email && item.signupPassword === $data.password) {
                    localStorage.setItem('email', item.signupEmail);
                    window.location = '../index.html'
                    loginForm.reset();
                }
            });
        })
    })

    // switch log
    $('.switchLog1').on('click', function() {
        $('#loginForm').toggle('slow');
        $('#signupForm').toggle('slow')
        $(this).hide('fast');
        $('.switchLog2').show('fast');
    })
    $('.switchLog2').on('click', function() {
        $('#loginForm').toggle('slow');
        $('#signupForm').toggle('slow')
        $(this).hide('fast');
        $('.switchLog1').show('fast');
    })
})