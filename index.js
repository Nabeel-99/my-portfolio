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

// Close burger menu when clicking on a link in the menu
const burgerMenuLinks = document.querySelectorAll('.burger-nav-links a');

burgerMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
    });
});


// listen to event listener when body is tappend and burger menu open, closes
 document.addEventListener('click', (e) => {
    if(!burgerMenu.contains(e.target) && !mobileMenu.contains(e.target)){
        burgerMenu.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
    }
 })

//  store projects
const projects = [
    {
    image: 'mealmate.png',
    title: 'Recipe App',
    description: `Food Recipe App
     Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js)
    Utilizes external APIs to fetch recipes dynamically
    Users can search for recipes based on various criteria (ingredients, cuisine, dietary preferences)
    Allows users to save their favorite recipes for future reference
    Implements user authentication and authorization for secure access to saved recipes
    Includes a feature for users to post their own recipes for others to discover and try
    Provides a user-friendly interface for browsing and managing saved and posted recipes`,  
    githublink: 'https://github.com/Nabeel-99/FoodRecipe.git'
   
},
{
    image: 'dictionary.png',
    title: 'Dictionary App',
    description: `Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js)
    Utilizes external APIs to fetch recipes dynamically
    Users can search for recipes based on various criteria (ingredients, cuisine, dietary preferences)
    Allows users to save their favorite recipes for future reference
    Implements user authentication and authorization for secure access to saved recipes
    Includes a feature for users to post their own recipes for others to discover and try
    Provides a user-friendly interface for browsing and managing saved and posted recipes`,  
    githublink: 'https://github.com/Nabeel-99/DictionaryApp.git'
   
},
 
]
 
// project items
const projectTile = document.querySelector('.js-project-tile')

const setProjectCards = (arr = projects) => {
    projectTile.innerHTML += arr.map(({image,description, title, githublink}) => {
       return `
       <div class="project-layout">
           <div class="project-card">
                <img src="../Images/${image}" alt="${title}" class="project-img">
                <div class="project-title">
                    <h3>${title}</h3>
                </div>
            </div>
            <div class="project-description">
                <h4>Description:</h4>
                <ul>
                    ${description.split('\n').map(line => `<li>${line.trim()}</li>`).join('')}
                </ul>
                <p>Project Link: <a href="${githublink}">${githublink}</a></p>
            </div>
        </div>
        `
    }).join('')
}

setProjectCards()
































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

