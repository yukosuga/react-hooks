import { useContext } from "react"
import { MyContext } from "./contexts/context1"

export default function Sibling1() {
const {setPrice} = useContext(MyContext)

    return (
        <div class="flex w-1/2">
            <h1 className="m-2 p-2">Child 1</h1>
            <button className="px-4 py-2 m-4 text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
            onClick={() => setPrice(price => 2 * price)}>
{" "}
Change your sibling's price
            </button>
        </div>
    )
}