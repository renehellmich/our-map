const CarItem = (props) => {
    console.log("Car: ", props);
    return (
        <>
            <h1>Das ist ein CarItem</h1>
            <h2>Farbe:{props.farbe}</h2>
            <h2>Marke: {props.marke}</h2>
            <p>Modell: {props.modell}</p>
            <p>Produktionsjahr: {props.jahr}</p>
            <p>PS: {props.ps}</p>
        </>
    );
}

export default CarItem;