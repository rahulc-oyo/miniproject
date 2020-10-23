function Greeting() {

    let date = new Date();
    let time = date.getHours();
    let greeting = '';

    if (time >= 5 && time < 12) {
        greeting = 'Good Morning!';
    } else if (time >= 12 && time < 16) {
        greeting = 'Good Afternoon!';
    } else if (time >= 16 && time < 19) {
        greeting = 'Good Afternoon!';
    }else {
        greeting = 'Good Night!';
    }
    return greeting;
}

export default Greeting;