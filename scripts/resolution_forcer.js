function ForceResolution() {
    //console.log(window.outerWidth, window.outerHeight)

    if (window.outerWidth > window.outerHeight < 1080) {
        const content = document.querySelector('.main');
        content.style.display = 'inherit'
    }
}

window.onresize = window.onload = ForceResolution