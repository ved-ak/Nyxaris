document.addEventListener('DOMContentLoaded', function () {
    var signInForm = document.getElementById('SignUpPage');
    var errorDisplay = document.getElementById('error');
    var webNameBlock = document.getElementsByClassName('webNameBlock');
    var container = document.getElementsByClassName('container');
    var webName = document.getElementsByTagName('h1')[0];
    var bodyOftheweb = document.getElementsByTagName('body')[0];
    var card = document.getElementsByTagName('form')[0];

    const handleResponsiveness = () => {
        if(window.innerWidth <= 768)
        {
            bodyOftheweb.style.flexDirection = "column";
            bodyOftheweb.style.backgroundColor = '#8244ad';
            webName.style.color = 'white'
            webName.style.fontSize = '13vw'
            Array.from(container).forEach(element => {
                element.style.height = '80vh';
                element.style.width = '100vw';
            });
            Array.from(webNameBlock).forEach(element => {
                element.style.height = '20vh';
                element.style.width = '100vw'
                element.style.backgroundColor = '#8244ad'
            });
            card.style.width = '70vw'
            card.style.height = '50vh'
        }
        else
        {
            webName.style.color = '#8244ad'
            webName.style.fontSize = '13vh'
            Array.from(container).forEach(element => {
                element.style.height = '';
                element.style.width = '';
            });
            Array.from(webNameBlock).forEach(element => {
                element.style.height = '';
                element.style.width = ''
                element.style.backgroundColor = ''
            });
            bodyOftheweb.style.backgroundColor = ''
            bodyOftheweb.style.flexDirection = 'row';
            card.style.width = ''
            card.style.height = ''
        }
    }

    window.addEventListener('resize', handleResponsiveness);
    handleResponsiveness();
    
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var userName = document.getElementById('signup-UserName');
        var email = document.getElementById('signup-Email');
        var password = document.getElementById('signup-Password');
        // send request to server
        // is user name or email already exists if yes return error
        // redirect to login page
        errorDisplay.style.color = 'red';
        errorDisplay.style.fontSize = '17px';
        errorDisplay.innerHTML = 'UserName or Email already exists';
    });
});
