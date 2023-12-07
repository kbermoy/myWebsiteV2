const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
const shapes = document.querySelectorAll('.shape')

let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    // get mouse position
    const x = event.clientX * scaleFactor // divide by 20 allows the translate to not
    const y = event.clientY * scaleFactor // move to much from its og position
    // console.log(x, y) prints location of mouse everytime we move it
    // we want to re-position the coordinates everytime we move the mouse

    // loop every element in the shapes array, querySelectorAll returns an array
    for(let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += ' dark-theme'
    } else {
        document.body.classList.remove('dark-theme')
    }
    
}

function contact(event) {
    event.preventDefault();
    loading.classList += ' modal__overlay--visible'
    
    emailjs
        .sendForm (
            'service_a91zgae',
            'template_olmehqj',
            event.target,
            'D6l8IRVfDinaWvoI6'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert('The email service is temporarily unavailable. Please contact me directly on kbermoy02@gmail.com')
    })
    
    setTimeout(() => {
        
        console.log('worked 1')
    }, 1000)
}
 
function toggleModal() {
    document.body.classList += ' showModal'
}

function closeModal() {
    document.body.classList.remove('showModal')
}