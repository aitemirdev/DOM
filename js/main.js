// console.log(document.getElementsByTagName("h1"))
// console.log(document.getElementsByClassName("hello"))
// console.log(document.getElementById("input"))

// let h1ClassName = document.querySelector(".h1")
// console.log(h1ClassName)
//
// let h1tekName = document.querySelector('h1')
// console.log(h1tekName)
//
// let pCLassName = document.querySelectorAll('.block .title')
// console.log(pCLassName)
//
// let id = document.querySelectorAll('#input')
// console.log(id)

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'pink',
    'white',
    'black'
];

//
let blk = document.querySelectorAll('.block')

blk.forEach((el,idex) =>{
    el.addEventListener('click', () =>{
        el.style.background = colors[Math.floor(Math.random() * colors.length)]

    })
})

$(document).ready(function(){
    $(".burger-menu").click(function(event){
        event.stopPropagation();
    });

    $(document).click(function(){
        $(".burger-menu-items").css("right", "-250px");
        $('input[type="checkbox"]').prop('checked', false);
    });
});
