function AdInfo (props) {
    console.log(props);
    return (
        <article className="annons">
            <div className="annonsbild">
                <img src={props.imageUrl} alt={props.type} />   
            </div>
            <div className="annonsinfo">
                <h2>{props.type}</h2>
                <p>
                <span>{props.city}</span>
                <span>{props.price} kr</span></p>
                <p>{props.description}</p>
                <button>Köp</button>
            </div>
        </article>
        
    )
}
export default AdInfo;