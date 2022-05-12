const selectors = {
    goodsInput: '.js-goods-input',
    addButton: '.js-add-btn',
    resetButton: '.js-reset-btn',
    writeout: '.js-list',
    listrow: 'js-listrow'
}

let listItemCount = 0;
const goodsInput = document.querySelector(selectors.goodsInput);
const addButton = document.querySelector(selectors.addButton);
const resetButton = document.querySelector(selectors.resetButton);
const writeout = document.querySelector(selectors.writeout);
const listrow = document.querySelector(selectors.listrow);
goodsInput.addEventListener('keypress', function (){
    if (event.key === 'Enter'){
        event.preventDefault();
        addToList();
    }
})

addButton.addEventListener("click", function () {
    addToList();
});
resetButton.addEventListener("click", function () {
    resetList();
})

function addToList() {
    let li = document.createElement('li');
    let goodsRow = document.createElement('input');
    let goodsLable = document.createElement('label');

    goodsRow.type = 'checkbox';
    goodsRow.value = goodsInput.value;
    goodsRow.name = goodsInput.value;
    goodsRow.id = 'listrow' + listItemCount;
    goodsRow.className = 'listrow js-listrow';
    listItemCount = listItemCount + 1;
    goodsLable.className = 'strikethrough';
    goodsLable.innerHTML = goodsInput.value;

    li.appendChild(goodsRow);
    li.appendChild(goodsLable);
    writeout.appendChild(li);

    resetInput();
} 

function resetInput() {
    goodsInput.value = "";
    //goodsInput.value = (Math.floor(Math.random() * 10) + 1) + ' Piima'
}

function resetList(){
    while (writeout.firstChild) {
        writeout.removeChild(writeout.firstChild);
    }
}

function checkedGoods(){
    console.log("checked");
}