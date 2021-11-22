
function FlowerMixTable({flowers, setNewFlower}) {

    function addFlower() {
        const currentScale = Math.random()*1.2 + .15
        const currentPetalColor = `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`
        const newFlowerStyle = {
            background: `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`,
            // height: Math.floor(Math.random()*350),
            // width: Math.floor(10+Math.random()*300),
            transform: `scale(${currentScale}, ${currentScale}) rotate(${Math.floor(Math.random()*180)}deg)`,
            position: 'absolute',
            top: `${Math.floor(Math.random() * 100)}%`,
            left: `${Math.floor(Math.random() * 100)}%`,
            borderRadius: '50%',
            /*  pétales  */
            boxShadow:
                `15px 25px ${currentPetalColor},
                -15px 25px ${currentPetalColor},
                -30px -7px ${currentPetalColor},
                0 -30px ${currentPetalColor},
                30px -7px ${currentPetalColor}`

    }
        ;
        setNewFlower([...flowers, newFlowerStyle])

    }

    return (
        <div className='flowerMixTable'>
            <button onClick={() =>
                addFlower()}>Nouvelle fleur
            </button>
        </div>
    );
}

export default FlowerMixTable