import { useEffect } from "react";



const Up = ({elevatorFloor,targetFloor,setTargetFloor,middleRef}) => {
    

    const handleUp = () => {
        setTargetFloor(elevatorFloor);
        console.log(middleRef.current);
    }

    useEffect(() => {
        console.log(targetFloor);
        middleRef.current.style.height=`${16*targetFloor}%`;
    },[targetFloor]);


    return (
        <div className="up">
            <button onClick={handleUp}>UP</button>
        </div>
    )
}

export default Up;