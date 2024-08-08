import './Posts.css';

function Posts() {

    return (
        <div>
            <div id="car" className="car">

                <div className="car-image">
                    <img src="./images/truck.png" alt="Volvo 480" />
                </div>

                <div className="info">
                    <p id="mark">Volvo 480ES</p>
                    <p className="price">1500$</p>
                </div>

                <div className="engine">
                    <p className="fuel">Benzin | 1800ccm</p>
                    <p className="year">1991. god.</p>
                </div> 
            </div>      
        </div>
    )
}

export default Posts;