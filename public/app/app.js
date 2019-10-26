$(() => {
    const token = localStorage.getItem('email');
        
    if(token === null) {
        window.location = './src/login.html';
    }

    //Logout
    $('#sign-out').on('click', () => {
        localStorage.clear();
        window.location = './src/login.html';
    })
})