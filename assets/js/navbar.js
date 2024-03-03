const menuMobile = document.querySelector('#mobile');
let isMobileOn = false;

menuMobile.addEventListener('click', () => {
    const linksBar = document.querySelector('.links-bar');
    if (!isMobileOn) {
        linksBar.style.transform = 'translateX(-100%)';
        isMobileOn = true;
    } else {
        linksBar.style.transform = 'translateX(0)';
        isMobileOn = false;
    }
});

window.addEventListener('resize', screenSizeHandler);

function screenSizeHandler() {
    if (window.innerWidth > 750) {
        const linksBar = document.querySelector('.links-bar');
        linksBar.style.transform = 'translateX(0)';
        isMobileOn = false;
    }
}
