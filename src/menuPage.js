function createMenu(content){
    let menuDiv = document.createElement('p');
    menuDiv.textContent = 'TabSwitching test';
    menuDiv.className = 'menuDiv';
    content.appendChild(menuDiv);
}

function deleteMenu(content){
    if (!document.querySelector('.menuDiv')){
        return;
    }

    content.removeChild(document.querySelector('.menuDiv'));
}

export {createMenu, deleteMenu};