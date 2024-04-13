import logo from './logo.svg';
import './App.css';
import React, {useReducer} from "react";
import Heading from "./components/Heading";
import {Card} from "./components/Card";
import handleClick from "./components/DynamicEvent";
import Promo from "./components/Promo";
import InputComponent from "./components/InputComponent";
import MealsProvider from "./components/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import {FruitsCounter} from "./components/FruitsCounter";
import {HomePage} from "./components/HomePage";
import {AboutMe} from "./components/AboutMe";
import {Link, Route, Routes} from "react-router-dom";
import {Contact} from "./components/Contact";
import sampleLogo from "./assets/logo.png"
import {YouTubeVideo} from "./components/YouTubeVideo";

// React.createElement(
//     type,
//     [props],
//     [...children]
// )

function Main(props) {
    return <Header msg={props.msg}/>;
};

function Header(props) {
    return (
        <div style={{border: "10px solid whitesmoke"}}>
            <h1>Header here</h1>
            <Wrapper msg={props.msg}/>
        </div>
    );
};

function Wrapper(props) {
    return (
        <div style={{border: "10px solid lightgray"}}>
            <h2>Wrapper here</h2>
            <Button msg={props.msg}/>
        </div>
    );
};

function Button(props) {
    return (
        <div style={{border: "20px solid orange"}}>
            <h3>This is the Button component</h3>
            <button onClick={() => alert(props.msg)}>Click me!</button>
        </div>
    );
};

const reducer = (state, action) => {
    if (action.type === 'ride') return {money: state.money + 10};
    if (action.type === 'fule') return {money: state.money - 50};
    return new Error();
}

function CurrentDay() {
    const day = new Date().getDay();
    let message;
    if (day >= 1 && day <= 5) {
        message = 'Weekday'
    } else {
        message = 'Weekend'
    }

    return (
        <div>
            {message}
        </div>
    )
}

function App(props) {

    const initialState = {money: 100};
    const [state, dispatch] = useReducer(reducer, initialState);

    const [fruits] = React.useState([
        {fruitName: 'Orange', id: 1},
        {fruitName: 'Banana', id: 2},
        {fruitName: 'Mango', id: 3},
        {fruitName: 'Apple', id: 4}
    ]);

    const clickHandler = () => console.log('button clicked');

    const bird1 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );

    const bird2 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
    );

    function toggle1() {
        if (bird1.paused) {
            bird1.play();
        } else {
            bird1.pause();
        }
    };

    function toggle2() {
        if (bird2.paused) {
            bird2.play();
        } else {
            bird2.pause();
        }
    };


    return (
        <div className="App">
            <nav className='nav'>
                <Link to='/' className='nav-item'>Home Page</Link>
                <Link to='/about-me' className='nav-item'>About Me</Link>
                <Link to='/contact' className='nav-item'>Contact</Link>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about-me' element={<AboutMe/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <img
                height={200}
                width={300}
                src={sampleLogo}
                alt="Logo"
            />
            <header className="App-header">
                <h1>{props.title}</h1>
                <Heading firstName="Pradeep Arya"/>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <h1>Task: Add three Card elements
                    <Card h2="First card's h2" h3="First card's h3"/>
                    <Card h2="Second card's h2" h3="Second card's h3"/>
                    <Card h2="Third card's h2" h3="Third card's h3"/>
                </h1>

                <button onClick={handleClick}>Guess the number between 1 and 3</button>
                <Promo/>
                <InputComponent/>
            </header>

            <Main
                msg="I passed through the Header and the Wrapper and I reached the Button component"
            />

            <MealsProvider>
                <MealsList/>
                <Counter/>
            </MealsProvider>

            <div className='App'>
                <h1>Wallet: {state.money}</h1>
                <div>
                    <button onClick={() => dispatch({type: 'ride'})}>A new customer!</button>
                    <button onClick={() => dispatch({type: 'fule'})}>Refill the tank!</button>
                </div>

            </div>

            <Fruits fruits={fruits}/>
            <FruitsCounter fruits={fruits}/>

            <button onClick={clickHandler}>Click me!</button>
            <button onClick={() => console.log('button clicked')}>Click me!</button>

            <CurrentDay/>
            <img src={require('./assets/logo.png')} alt="Logo"/>
            <div className='App'>
                <YouTubeVideo/>
            </div>

            <div className='App'>
                <h1>Song playlist</h1>
                <button onClick={toggle1}>Caspian Tern 1</button>
                <button onClick={toggle2}>Caspian Tern 2</button>

            </div>

        </div>
    );
}

export default App;
