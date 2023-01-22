import { Contacts } from "./component/contacts/contacts";
import { Cooperation } from "./component/cooperation/cooperation";
import { Header } from "./component/header/header";
import { Hero } from "./component/hero/hero";
import { Products } from "./component/products/products";
import { Slick } from "./component/slicker/slick";

function App() {
  return (
    <>
      <Contacts />
      <Header />
      <main>
        <Hero />
        <Products />
        <Cooperation />
        <Slick />
      </main>
    </>
  );
}

export default App;
