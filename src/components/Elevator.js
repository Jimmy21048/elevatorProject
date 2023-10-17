import Up from "./Up";
import Down from "./Down";
import { useState } from "react";

const Elevator = () => {
    const [elevatorFloor, setElevatorFloor] = useState(0);
    const [targetFloor, setTargetFloor] = useState(0);
    return (
        <div className="elevator">
            <div className="left">
                <div className="floor">
                    <input
                    type="number"
                    min="0"
                    max="6"
                    value={elevatorFloor}
                    onChange={(e) =>setElevatorFloor(e.target.value)} />
                </div>
                <Up />
                <Down />
            </div>
            <div className="middle"></div>
            <div className="right"></div>
        </div>
    )
}

export default Elevator;