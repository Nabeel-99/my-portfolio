// Scroll animation reveal
const animation_sections = document.querySelectorAll('.reveal-animation');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
    })
}, {
    threshold: 0.2
});

// loop through the classes for observation
for(let i = 0; i < animation_sections.length; i++){
    const elements = animation_sections[i]
    observer.observe(elements)
}

// handle burger menu display

const burgerMenu = document.querySelector('.js-burger-menu');
const mobileMenu = document.querySelector('.js-links-container')
burgerMenu.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('is-open')
    mobileMenu.classList.toggle('is-open')
})
































// const lightBtn = document.querySelector('.js-btn');
// const light = document.querySelector('.js-bulb-img');
// const jsText = document.querySelector('.js-text');

// let lightOnSrc = '../Images/light-on.png';
// let lightOffSrc = '../Images/light-off.png';
// let isOn = false

// lightBtn.addEventListener('click', () => {
//     //display the text
//     isOn = !isOn
//     jsText.innerHTML = isOn ? 'Hey! I created this using Javascript.' : '';
//     light.src = isOn ?  lightOnSrc : lightOffSrc;
    
// })

// const container = document.querySelector('.grid-js')
// container.addEventListener('mouseleave', () => {
//     //hide the text when mouse leaves the button area
//     jsText.innerHTML = ''
//     light.src = lightOffSrc;
// })


// // //toggle on and off
// // function toggleLights(){
// //     isOn = !isOn
// //     const OnBtn = document.querySelector('.js-on')
// //     OnBtn.addEventListener('click', ()=>{
// //         light.src = lightOnSrc
// //     })
// //     const offBtn = document.querySelector('.js-off');
// //     offBtn.addEventListener('click', ()=>{
// //         light.src = lightOffSrc;
// //     })
// // }