const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')

let contrastToggle = false;

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
    console.log('working click')
}

function closeModal() {
    document.body.classList.remove('showModal')
}


/* FINAL SECTION ON BACKGROUND ANIMATIONS 2:30  */