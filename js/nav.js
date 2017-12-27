const navToggle = document.querySelector('.menu-button')
const nav = document.querySelector('nav') 
const containerAll = document.querySelector('.container-all')


const containerAllStyle = containerAll.style
const bodyClassList = document.body.classList

navToggle.addEventListener('click', _ =>{  // => zamiast pisac calej funkci co jest supa dupa :) 
    containerAllStyle.transition = 'transform 250ms ease-in-out'
    document.body.classList.toggle('nav-is-open') /// toggle aby cos pojawialo sie i znikalo tutaj svg hamburgera i potem zamienia sie w krzyzyk ktory dodalem w polaczeniu z scss -patrz tam display
})
nav.addEventListener('click', _=>{
    containerAllStyle.transition = '0ms' //wykluczamy transition - bug w chromie
    bodyClassList.remove('nav-is-open')//dzieki temu po przeniesieniu nas do wyb ms z nav bedziemy widziec normalna czesc str a nie scr na boki aby sie w niej polapac
        
    })

//note for me - you can mix zindex z animacjami i transistion.... ale :)
