$(() => {
    // Sign in
    $('#sign-in').on('click', (event) => {
        $(event.target).hide();
        $('#sign-out').fadeIn('slow');
    })

    //Sign Out
    $('#sign-out').on('click', (event) => {
        $(event.target).hide();
        $('#sign-in').fadeIn('slow');
    })
})