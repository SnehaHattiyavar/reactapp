function Card(prop){
    return(
        <>
            <div class='card'>
                <img src={prop.imgsrc} alt="Image_Not_Found"></img>
                <h3>{prop.title}</h3>
                <a href={prop.link} target="__blank">
                <button>Watch Now</button></a>
            </div>
        </>
    )
}
export default Card;