import CarItem from "../caritem/CarItem";
import {v4 as uuidv4} from 'uuid'

// Statt (props) kann man auch ({cars}) schreiben. Dann muss überall props.cars durch cars ausgetauscht werden.
const CarList = (props) => {
    console.log("props.cars:", props.cars);
    return (
        <>
            {/* <div>
                <h2>Farbe:{props.cars[0].farbe}</h2>
                <h2>Marke: {props.cars[0].marke}</h2>
                <p>Modell: {props.cars[0].modell}</p>
                <p>Produktionsjahr: {props.cars[0].produktionsjahr}</p>
                <p>PS: {props.cars[0].ps}</p>
            </div> */}

            <h1>Das ist ein CarList Component</h1>

            {props.cars.map((car, index) => {

                return (
                    <div key={index}>
                        <CarItem
                            keyID={uuidv4()}
                            marke={car.marke}
                            farbe={car.farbe}
                            modell={car.modell}
                            jahr={car.produktionsjahr}
                            ps={car.ps}
                        />
                    </div>
                )

            })}
        </>
    );
}

export default CarList;