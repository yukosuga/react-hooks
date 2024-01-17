import Sibling1 from "./Sibling1";
import Sibling2 from "./Sibling2";
import {MyContextProvider} from "./contexts/context1";

export default function Parent() {
  return (
    <MyContextProvider>
      <div className="flex m-4">
        <Sibling1 />
        <Sibling2 />
      </div>
    </MyContextProvider>
  );
}
