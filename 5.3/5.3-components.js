const fakeData = [
    'Button One',
    'Button Two',
    'Button Three',
    'Button Four',
    'Button Five'
]

function buttonCreator(text) {
    let button = document.createElement('button');
    button.textContent = text;
    button.classList.add('button');
    button.classList.add('large-button');
    button.addEventListener('click', (event) => {
        console.log(`The button clicked says: ${event.target.textContent}`)
    })

    return button;

}

let container = document.querySelector('.container');

fakeData.forEach((item) => {
    let button = buttonCreator(item);
    container.appendChild(button);    
});

