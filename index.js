// Scroll animation reveal
const animation_sections = document.querySelectorAll('.reveal-animation');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }else{
            entry.target.classList.remove('active')
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
        description: `Created with the MERN stack, this app lets users search for recipes based on preferences, save favorites, and post their own recipes securely.`,
        githublink: 'https://github.com/Nabeel-99/FoodRecipe.git',
        images: ['recipe9.png', 'recipe4.png', 'recipe5.png', 'recipe8.png',]
    },
    {
        image: 'dictionary.png',
        title: 'Dictionary App',
        description: ` Developed using React.js and Node.js, this app offers dynamic word searches with custom definitions and synonyms in a user-friendly interface.`,
        githublink: 'https://github.com/Nabeel-99/DictionaryApp.git',
        images: ['dictionary8.png', 'dictionary.png', 'dictionary7.png', 'dictionary5.png']
    },
    {
        image: 'taskmanager.png',
        title: 'Task Manager App',
        description: ` Built task manager app using svelte kit, this app organizes tasks efficiently with features like task creation, progress tracking, and priority management in a user-friendly interface.`,
        githublink: 'https://github.com/Nabeel-99/DictionaryApp.git',
        images: ['task12.png', 'task1.png', 'task4.png', 'task7.png', 'task5.png', 'task9.png']
    }
];

const projectTile = document.querySelector('.js-project-tile');

const setProjectCards = (arr = projects) => {
    projectTile.innerHTML = arr.map(({ image, description, title, githublink, images }, index) => {
        return `
            <div class="project-layout">
                <div class="project-card">
                    <img src="../Images/${image}" alt="${title}" class="project-img">
                    <div class="project-title">
                        <h3>${title}</h3>
                    </div>
                    <div class="project-slider" id="slider-${index}">
                        <div class="container">
                            <div class="slide">
                                ${images.map(image => `<div class="item" style="background-image: url('../Images/${image}')"></div>`).join('')}
                            </div>
                            <div class="button">
                                <button class="prev" data-slider-id="${index}"><i class="fa-solid fa-arrow-left"></i></button>
                                <button class="next" data-slider-id="${index}"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                            <div class="close-btn">
                                <button class=""><i class="fa fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-description">
                    <h5>${title}</h5>
                    <h4>Description: ${description}</h4>
                    <div class="links">
                        <div class="link">
                            <a href="${githublink}" class="github-link" target="_blank"><i class="fa fa-github" title="github"></i></a>
                            <p>Code</p>
                        </div>
                        <div class="link">
                            <button class="preview" data-slider-id="${index}"><i class="fa-regular fa-eye" title="live preview"></i></button>
                            <p>View</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners for next and prev buttons
    document.querySelectorAll('.next').forEach((button) => {
        button.addEventListener('click', function () {
            let sliderId = this.getAttribute('data-slider-id');
            let items = document.querySelectorAll(`#slider-${sliderId} .item`);
            document.querySelector(`#slider-${sliderId} .slide`).appendChild(items[0]);
        });
    });

    document.querySelectorAll('.prev').forEach((button) => {
        button.addEventListener('click', function () {
            let sliderId = this.getAttribute('data-slider-id');
            let items = document.querySelectorAll(`#slider-${sliderId} .item`);
            document.querySelector(`#slider-${sliderId} .slide`).prepend(items[items.length - 1]);
        });
    });
};

setProjectCards();
document.querySelectorAll('.preview').forEach((button, index) => {
    button.addEventListener('click', () => {
        const slider = document.querySelectorAll('.project-slider')[index];

        // Clone the slider element
        const clonedSlider = slider.cloneNode(true);
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        // Add cloned slider to overlay
        overlay.appendChild(clonedSlider);

        // Display overlay and slider
        overlay.style.display = 'block';
        clonedSlider.style.display = 'block';

        // Reassign event listeners for next, prev, and close buttons
        assignButtonEventListeners(clonedSlider);
        handleSwipeGesture(clonedSlider);
        // Disable scrolling
        document.body.style.overflow = 'hidden';
    });
});

function handleSwipeGesture(slider) {
    let initialX = null;

    // Add touchstart event listener
    slider.addEventListener('touchstart', (e) => {
        initialX = e.touches[0].clientX;
    });

    // Add touchmove event listener
    slider.addEventListener('touchmove', (e) => {
        if (initialX === null) {
            return;
        }

        let currentX = e.touches[0].clientX;
        let diffX = initialX - currentX;

        // Swipe left
        if (diffX > 0) {
            slideNext(slider);
        }
        // Swipe right
        else if (diffX < 0) {
            slidePrev(slider);
        }

        initialX = null;
    });
}

// Function to slide to next image
function slideNext(slider) {
    let items = slider.querySelectorAll('.item');
    slider.querySelector('.slide').appendChild(items[0]);
}

// Function to slide to previous image
function slidePrev(slider) {
    let items = slider.querySelectorAll('.item');
    slider.querySelector('.slide').prepend(items[items.length - 1]);
}
// Function to assign event listeners for next, prev, and close buttons
function assignButtonEventListeners(slider) {
    slider.querySelectorAll('.next').forEach((button) => {
        button.addEventListener('click', function () {
            let sliderId = this.getAttribute('data-slider-id');
            let items = slider.querySelectorAll(`#slider-${sliderId} .item`);
            slider.querySelector(`#slider-${sliderId} .slide`).appendChild(items[0]);
        });
    });

    slider.querySelectorAll('.prev').forEach((button) => {
        button.addEventListener('click', function () {
            let sliderId = this.getAttribute('data-slider-id');
            let items = slider.querySelectorAll(`#slider-${sliderId} .item`);
            slider.querySelector(`#slider-${sliderId} .slide`).prepend(items[items.length - 1]);
        });
    });

    slider.querySelectorAll('.close-btn button').forEach(button => {
        button.addEventListener('click', () => {
            slider.style.display = 'none';
            document.querySelector('.overlay').remove();
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    });
}



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
        image: "Images/logo-mongodb-png-mongodb-200.png",
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
        image: "Images/node-js-logo.png",
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







