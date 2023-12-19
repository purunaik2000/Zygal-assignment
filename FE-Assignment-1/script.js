let inputBox = document.getElementById('inp');
let button = document.getElementById('btn');
let body = document.body;
let boxContainer = document.getElementById('box-container');

button.addEventListener('click', (event)=>{
    // height width of container
    let height = boxContainer.clientHeight;
    let width = boxContainer.clientWidth;

    // Get the value from the text box and trim it to remove any leading or trailing spaces
    let userInput = inputBox.value.trim();
    if(userInput === ''){
        alert("Please enter an integer number");
        inputBox.value = '';
        return;
    }

    let input = Number(userInput);
    if(!Number.isInteger(input)){
        alert("Please enter an integer number")
        inputBox.value = '';
        return;
    }

    // console.log(input, window.innerHeight/input);

    // To clear the box Container
    body.removeChild(boxContainer);
    boxContainer = document.createElement('div');
    boxContainer.setAttribute('id','box-container');
    body.appendChild(boxContainer);

    for(let i=0;i<input;i++) {
        let newDiv = document.createElement('div');
        newDiv.style.backgroundColor = 'black';
        newDiv.style.height = `${height/input}px`;
        newDiv.style.width = `${width/input}px`;
        newDiv.style.marginLeft = `${width-((width/input)*(i+1))}px`;
        boxContainer.appendChild(newDiv);
    }
})