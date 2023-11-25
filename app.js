if(localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark';
    toggle.checked = true;
}


const toggle = documetn.querySelector('input[type="checkbox')
toggle.addEventListener('click', function(e){
    const{checked} = toggle;
    if(checked){
        localStorage.setItem('darkModeEnabled', true);
    }
    else{
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className =toggle.checked ? 'dark' : ''

})
