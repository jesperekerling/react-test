function AdInfo (props) {
    console.log(props);
    return (
        <article className="annons">
            <div className="annonsbild">
                <img src={props.bostader} alt={props.type} className="annons" width="100" />   
            </div>
            <div className="annonsinfo">
                <h2>{props.type}</h2>
                <span>{props.price}</span>
                <p>{props.description}</p>
                <button>Köp</button>
                {props.model} {props.bostader}<br/>
                Årsmodell: {props.modelYear}
            </div>
        </article>
        
    )
}
export default AdInfo;