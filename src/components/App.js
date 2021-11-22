
import FlowerSquare from "./FlowerSquare";
import FlowerMixTable from "./FlowerMixTable";
import {useState} from "react";


function App() {
    const [flowers, setNewFlower] = useState([])

    return (
        <div className='container'>
                <FlowerMixTable flowers={flowers} setNewFlower={setNewFlower} />
            <div className='flowerSquare'>
            {flowers.map((style) =>
                <FlowerSquare style={style}/>
            )}
            {/*créer un composant pour la fleur et stocker chaque instance du composant dans un tableau*/}
        </div>
        </div>
    )
}

export default App;
