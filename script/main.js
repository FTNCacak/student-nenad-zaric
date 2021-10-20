document.getElementById("switch").addEventListener("change", changeTheme);

function changeTheme(){
    sswitch = document.getElementById("switch");
    if(sswitch.checked){
        document.querySelector('body').className = 'dark';
        document.querySelector('.card').classList.replace('light_card', 'dark_card')
    }
    else{
        document.querySelector('body').className = 'light';
        document.querySelector('.card').classList.replace('dark_card', 'light_card')
    }
}