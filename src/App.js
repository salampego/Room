import { Contacts } from "./component/contacts/contacts";
import { Cooperation } from "./component/cooperation/cooperation";
import { Header } from "./component/header/header";
import { Hero } from "./component/hero/hero";
import { Products } from "./component/products/products";

function App() {
  return (
    <>
      <Contacts />
      <Header />
      <main>
        <Hero />
        <Products />
        <Cooperation />
      </main>
    </>
  );
}

export default App;
