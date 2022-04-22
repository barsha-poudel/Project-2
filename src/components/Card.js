function Card(props){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLDOUT"
    }else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }


    return(
        <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
            <div className="card-img"></div>
            <img src={`../images/${props.item.coverImg}`}/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">{props.item.price}</span> / person</p>

        </div>
    )
}
export default Card;
