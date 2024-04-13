import PromoHeading from "./PromoHeading";

const sale = {
    discount: 80
}
const current_date = new Date();

function Promo() {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
            </div>
            <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
            <PromoHeading discount={sale.discount} date={current_date.toLocaleString()}/>
        </div>
    );
}

export default Promo;