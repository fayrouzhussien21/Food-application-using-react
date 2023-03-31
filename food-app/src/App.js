import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import { useState } from "react";
import Cartprovider from "./store/Cartprovider";
function App() {
  const [isDisabled, setDisable] = useState(false);
  const setDiabletoTrueHandler = () => {
    setDisable(true);
    console.log(isDisabled);
  };
  const setDiabletoFalseHandler = () => {
    setDisable(false);
  };
  return (
    <Cartprovider>
      {isDisabled && <Cart onCloseClicked={setDiabletoFalseHandler} />}
      <Header onCartClicked={setDiabletoTrueHandler} />
      <main>
        <Meals></Meals>
      </main>
    </Cartprovider>
  );
}

export default App;
