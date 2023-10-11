
const Up = ({presentFloor, position, setPosition}) => {
    const handleUp = () => {
        // let subtract = presentFloor>position? presentFloor-position :position-presentFloor;
    }
    return (
        <div className="up">
            <button onClick={handleUp}>UP</button>
        </div>
    )
}

export default Up;