import Up from "./Up";
import Down from "./Down";
import Inside from "./Inside";
import './elevator.css';

const Elevator = () => {
    return (
        <div className="elevator">
            <div className="elevatorLeft">
                <Up />
                <Down />
            </div>
            <div className="elevatorRight">
                <Inside />
            </div>
        </div>
    )
}

export default Elevator;