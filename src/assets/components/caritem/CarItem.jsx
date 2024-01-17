// statt (props) kann man (farbe, marke, modell, jahr, ps) schreiben.
const CarItem = (props) => {
    console.log("Car: ", props);
    console.log(props.keyID);
    return (
        <>
            <h1>Das ist ein CarItem</h1>
            <div keyID={props.keyID}>
                <h2>Farbe:{props.farbe}</h2>
                <h2>Marke: {props.marke}</h2>
                <p>Modell: {props.modell}</p>
                <p>Produktionsjahr: {props.jahr}</p>
                <p>PS: {props.ps}</p>
            </div>
        </>
    );
}

export default CarItem;