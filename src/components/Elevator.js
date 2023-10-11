import Up from "./Up";
import Down from "./Down";
import Inside from "./Inside";
import './elevator.css';
import { useState } from "react";

const Elevator = () => {
    const [presentFloor, setPresentFloor] = useState(0);
    const [position, setPosition] = useState(5);
    return (
        <div className="elevator">
            <div className="elevatorLeft">
                <div className="presentFloor">
                    <input
                    type="number"
                    value={presentFloor}
                    onChange={(e) =>setPresentFloor(e.target.value)} />
                </div>
                <Up
                {...{presentFloor, position, setPosition}} />
                <Down
                {...{presentFloor, position}} />
            </div>
            <div className="elevatorMiddle">
                <Middle value={position[6]} />
                <Middle value={position[5]} />
                <Middle value={position[4]} />
                <Middle value={position[3]} />
                <Middle value={position[2]} />
                <Middle value={position[1]} />
                <Middle value={position[0]} />
            </div>
            <div className="elevatorRight">
                <Inside />
            </div>
        </div>
    )
}

function Middle({value}) {
    return (
        <div className="floor">
            <input
            value={value}
            type="number" />
        </div>
    )
}

export default Elevator;