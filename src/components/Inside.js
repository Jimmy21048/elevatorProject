import { Children } from "react";

const Button = ({children}) => {
    const handleButton = (event) => {
        console.log(event.target.value);
    }
    return (
        <div className="button">
            <button value={children} onClick={handleButton}>{children}</button>
        </div>
    )
}
const Inside = () => {
    return (
        <div className="inside">
            <Button value="1">1</Button>
            <Button value="2">2</Button>
            <Button value="3">3</Button>
            <Button value="4">4</Button>
            <Button value="5">5</Button>
            <Button value="6">6</Button>
            
        </div>
    )
}
export default Inside;