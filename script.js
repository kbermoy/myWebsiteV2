const openModal = document.querySelector('.openModal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.closeModal')
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')

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

// adding event listeners
openModal.addEventListener('click', () => {
    modal.classList += ' showModal'
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('showModal')
})