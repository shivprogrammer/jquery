// javascript version of how to add dynamic behavior to a web page
const login = document.getElementById('login');

const loginMenu = document.getElementById('loginMenu');

login.addEventListener('click', () => {
    if (loginMenu.style.display === 'none') {
        loginMenu.style.display = 'inline';
    }
    else {
        loginMenu.style.display = 'none';
    }
})

// jQuery version of the above functionality
$('#login').click(() => {
    $('#loginMenu').toggle()
})

// jquery code for the first exercise
$('.login-button').on('click', () => {
    $('.login-form').toggle();
});

// NOTICE HOW THERE IS A DIFFERENCE IN THE TWO WAYS THAT YOU CAN CALL CLICK