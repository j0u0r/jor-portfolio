import Header from "./assets/components/header/Header";
import Footer from "./assets/components/footer/Footer";
import Body from "./assets/components/Body/Body";
import { useEffect, useState } from "react";

function App() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    console.log(opacity)
    if (opacity == 0) {
      setTimeout(() => setOpacity(1), 500)
    }
  }, [opacity])

  return(
    <>
        <Header setOpacity={setOpacity}/>
        <Body opacity={opacity}/>
       <Footer/>
    </>
  );
}

export default App
