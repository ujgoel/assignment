const add = document.querySelector('#add');
const sub = document.querySelector("#sub");
const canList = document.querySelector("#candidates-list");
const addCanBtn = document.querySelector("#add-can")
const vote = document.querySelector("span");
const newName = document.querySelector("#new-name");


add.addEventListener('click', ()=>{
    vote.textContent = parseInt(vote.textContent) + 1;
})

sub.addEventListener('click', ()=>{
    vote.textContent = parseInt(vote.textContent) - 1;
})



addCanBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const newEle = canList.createElement('li');
    newEle.textContent = `${newName}`;
    canList.appendChild(newEle);
})