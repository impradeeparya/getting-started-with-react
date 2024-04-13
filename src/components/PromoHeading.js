function promoHeading(props) {
    return (
        <div>
            <div>Sale starts at {props.date}</div>
            <div>{props.discount}% off on sale!!</div>
        </div>
    )
}

export default promoHeading;