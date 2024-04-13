function Heading(props) {
    const getRandomNum = () => Math.floor(Math.random() * 10) + 1
    return (
        <div>
            <h1>
                Hello, {props.firstName}
            </h1>
            <h6>
                <br/>
                Random number: {Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}
                <br/>
                Here's a random number from 0 to 10: {Math.floor(Math.random() * 10) + 1}
                <br/>
                Here's a random number from 0 to 10: {getRandomNum()}
            </h6>
        </div>
    )
}

export default Heading