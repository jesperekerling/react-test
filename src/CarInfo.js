function CarInfo (props) {
    console.log(props);
    return (
        <div>
            <p>Hämtad komponent från CarInfo</p>
            <p>
                {props.brand} {props.model}<br/>
                Årsmodell: {props.modelYear}
            </p>
        </div>
    )
}
export default CarInfo;