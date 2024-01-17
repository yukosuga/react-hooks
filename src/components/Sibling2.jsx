import { useContext } from "react";
import { MyContext } from "./contexts/context1"

export default function Sibling2() {
    // const data = useContext(MyContext);
    const {price} = useContext(MyContext)
    // console.log("Data from context:", data);

    return (
        <div className="w-1/2">
            <h1 className="m-2 p-2">Child 2, price: {price} Euro</h1>
        </div>
    )
}