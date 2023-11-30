// const btn = document.querySelector('.btn'),
//     input = document.querySelector('.input'),
//     name = document.querySelector('.name')
//
// btn.addEventListener('click', () =>{
//     name.textContent += input.value
//     input.value = ''
// })


const btn = document.querySelector('.menu-btn'),
    openBtn = document.querySelector('.open-btn'),
    closeBtn = document.querySelector('.close-btn'),
    menu = document.querySelector('.menu')

btn.addEventListener('click', () =>{
    if (menu.style.display === 'none'){
        menu.style.display = 'block'
        menu.style.display = 'flex'
        openBtn.style.display = 'none'
        closeBtn.style.display = 'block'
    }else {
        menu.style.display = 'none'
        openBtn.style.display = 'block'
        closeBtn.style.display = 'none'
    }
})

const modalOpen = document.querySelector('.modal-widow'),
    windowModal = document.querySelector('.widow'),
    modalClose = document.querySelector('.modal-close')

modalOpen.addEventListener('click', () => {
    windowModal.style.display = 'block'
    windowModal.style.display = 'flex'
})

modalClose.addEventListener('click' ,() =>{
    windowModal.style.display = 'none'
})


const btnOne = document.querySelector('.modal-btn-one'),
 btnTwo = document.querySelector('.modal-btn-two'),
 btnThree = document.querySelector('.modal-btn-three'),
    img = document.querySelector('.modal-img')

btnOne.addEventListener('click' ,() =>{
    img.classList.add('.modal-img')
    img.classList.remove('.modal-img-two')
    img.classList.remove('.modal-img-three')
    btnOne.style.background = '#04CE25'
    btnTwo.style.background = '#d9d9d9'
    btnThree.style.background = '#d9d9d9'
})


btnTwo.addEventListener('click' ,() =>{
    img.classList.add('modal-img-two')
    img.classList.remove('.modal-img')
    img.classList.remove('.modal-img-three')
    btnOne.style.background = '#d9d9d9'
    btnTwo.style.background = '#04CE25'
    btnThree.style.background = '#d9d9d9'
})

btnThree.addEventListener('click' ,() =>{
    img.classList.add('modal-img-three')
    img.classList.remove('.modal-img')
    img.classList.remove('.modal-img-two')
    btnOne.style.background = '#d9d9d9'
    btnTwo.style.background = '#d9d9d9'
    btnThree.style.background = '#04CE25'
})