function Card(props){
    return(
        <div className="card">
            <div className="card-img"></div>
            <img src={`../images/${props.img}`}/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">{props.price}</span> / person</p>

        </div>
    )
}
export default Card;