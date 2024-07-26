import './homeStyle.css';
import rockImg from './images.jpg';
export {createContent, clearContent};

function createContent(content){
    let title = document.createElement("div");
    let rockGolem = document.createElement("img");
    rockGolem.src = rockImg;
    title.className = 'title';
    rockGolem.className = 'rock';
    title.appendChild(rockGolem);

    let brand = document.createElement('p');
    brand.textContent = "Rocky Cafe";
    brand.className = "brand";

    title.appendChild(brand);
    
    let descriptionDiv = document.createElement("div");
    descriptionDiv.className = "descDiv";
    let description = document.createElement("p");
    description.textContent = "Rocky Cafe is your one stop cafe for all your daily coffee needs. From Lattes to americano, to the most delicious and savoury desserts, our menu is sure to leave your taste buds wanting more."
    description.className = "desc";

    let menuBtn = document.createElement("button");
    menuBtn.textContent = "Order Now";
    menuBtn.className = "menu";

    descriptionDiv.appendChild(description);
    descriptionDiv.appendChild(menuBtn);
    content.appendChild(title);
    content.appendChild(descriptionDiv);
}

function clearContent(content){
    if (!doccument.querySelector('.title')){
        return;
    }

    content.removeChild(document.querySelector(".title"));
    content.removeChild(document.querySelector('.descDiv'));
}
