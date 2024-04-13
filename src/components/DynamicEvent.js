function handleClick() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    let userInput = prompt('type a number')
    alert(`Computer number: ${randomNumber}, Your number: ${userInput}`)
}

export default handleClick;