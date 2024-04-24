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
    description: `Developed with the MERN stack (MongoDB, Express.js, React.js, Node.js)
    Fetches recipes dynamically using external APIs
    Search functionality based on ingredients, cuisine, and dietary preferences
    Allows users to save favorite recipes and post their own
    User authentication and authorization for secure access
    User-friendly interface for easy browsing and managing recipes`,  
    githublink: 'https://github.com/Nabeel-99/FoodRecipe.git'
   
},
{
    image: 'dictionary.png',
    title: 'Dictionary App',
    description: `Developed a Dictionary Application using React.js and Node.js.
    Features dynamic search functionality for word definitions and synonyms.
    Includes custom words with definitions, real-life scenarios, and optional code snippets.
    Provides a user-friendly interface with intuitive navigation.
    Stack Used: React.js, Node.js, MongoDB, RESTful APIs`,  
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

const skills = [
    {
        image: "Images/html-icon-original.svg",
        title: "HTML"
    },
    {
        image: "Images/css-icon-original.svg",
        title: "CSS"
    },
    {
        image: "Images/java-icon-original.svg",
        title: "Java"
    },
    {
        image: "Images/javascript-icon-original.svg",
        title: "JavaScript"
    },
    {
        image: "Images/Typescript_logo_2020-1960x1960.png",
        title: "TypeScript"
    },
      
    {
        image: "Images/file-type-tailwind-icon-original.svg",
        title: "Tailwind CSS"
    },
 
    {
        image: "Images/logo-mongodb-png-standard-logo-4167.jpg",
        title: "Mongo DB"
    },
  
    {
        image: "Images/react-logo-png-js-logo-react-react-js-icon-512x512.png",
        title: "React JS"
    },
    {
        image: "Images/spring-boot-logo.png",
        title: "Spring Boot"
    },
    {
        image: "Images/svelte-icon-icon-original.svg",
        title: "Svelte"
    },
    {
        image: "Images/aws-icon-original.svg",
        title: "AWS"
    },
    {
        image: "Images/1764866.jpg",
        title: "Node Js"
    },
   
]

const skillsHTML = document.querySelector('.skills-stack-js')

const  setSkills = (arr = skills) => {
    skillsHTML.innerHTML +=  arr.map(({image, title}) => {
        return `
        <div class="skill-div">
            <div class="skill-img">
             <img src="../${image}" alt="${title}" class="skill-img-design">
             </div>
            <p class="skill-name">${title}</p>
         </div>
        `
    }).join(" ")
}

setSkills()






























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

