function CarInfo (props) {
    console.log(props);
    return (
        <div>
            <p>CarInfo:</p>
            <p>
                <img src={props.bostader} alt={props.brand} className="annons" width="100" />
                {props.brand} {props.model} {props.bostader}<br/>
                Årsmodell: {props.modelYear}
            </p>
        </div>
    )
}
export default CarInfo;