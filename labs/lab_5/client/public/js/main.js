let icon = document.getElementById("theme_icon");

    icon.onclick = function(){
        document.body.classList.toggle("light-theme");
    }


let navbar = document.querySelector('.navbar');

document.querySelector('#menu_icon').onclick = () => {
    navbar.classList.toggle('active');
}
    
window.onscroll = () => {
    navbar.classList.remove('active');
}
    
let header = document.querySelector('header');
    
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});




async function addFridge(id, name, weight, image_link) {
    let fridge = document.createElement('div')
    let fridgeContainer = document.querySelector('.models')

    let ViewerContent = `
    <div class="models__container">
        <h3>${id}</h3>
        <img src="${image_link}">
        <h4> ${name} </h4>
        <p>
            ${weight}
        </p>
    </div>`
    fridge.innerHTML = ViewerContent;
    fridgeContainer.append(fridge);
}

async function Get_Fridge() 
{
    fetch("http://localhost:3000/fridges").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let fridgeArray = JSON.parse(text)
        fridgeArray.forEach(item => {

            id = `${item.id}`
            model =`${item.name}`
            weight = `${item.weight} kg`
            img = `${item.image_link}`

            addFridge(id, model, weight, img)
        })
    })
}
Get_Fridge();