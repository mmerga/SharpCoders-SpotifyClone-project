"use strict";

function doubtClicked(event){
    const eventId = event.target.dataset.id;
    let id =  eventId.slice(-1);
    id = eventId + '-' + id
    const doubtHidded = document.getElementById(id)
    doubtHidded.classList.toggle('hidden')

    const div =  document.getElementById(eventId)
    if(div.children[1].dataset.isOpen === 'false'){
        div.children[1].innerHTML = '<i data-id="doubt-1" class="fa-solid fa-chevron-down"></i>'
        div.children[1].dataset.isOpen = 'true'
    }else{
        div.children[1].innerHTML = '<i class="fa-solid fa-chevron-up"></i>'
        div.children[1].dataset.isOpen = 'false'
    }
}

function doubt(){
    const items = document.getElementsByClassName('doubt-item');
    for(let i = 0 ; i < items.length ; i++){
        items[i].addEventListener('click', doubtClicked)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    doubt();
});