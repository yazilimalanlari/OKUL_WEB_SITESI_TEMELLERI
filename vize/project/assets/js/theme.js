function init() {
    const darkModeElement = document.getElementById('dark-mode');
    
    const setTheme = e => {
        const element = darkModeElement.nextElementSibling.children.item(0);
        let checked;
        if (typeof e === 'boolean') checked = e;
        else {
            localStorage.setItem('dark-mode', e.target.checked.toString());
            checked = e.target.checked;
        }
        
        if (checked) {
            element.classList.add('open');
            document.body.classList.add('dark');
        } else {
            element.classList.remove('open');
            document.body.classList.remove('dark');
        }
    }

    if (localStorage.getItem('dark-mode') === 'true') setTheme(true);
    darkModeElement.addEventListener('click', setTheme);

    setTimeout(() => {
        document.body.classList.remove('preload');
        setTimeout(() => document.querySelector('.loader-wrapper').remove(), 500);
    }, 1500);
}

document.addEventListener('DOMContentLoaded', init);