import "./style.css";
import ProductCard from "./Component/Cards/Cards";
import Phones from "../public/data";
export function App() {
    return (
        <>
          <h1>Store</h1>
          <section className="row">
            <ProductCard title={Phones.title} />
            <ProductCard />
            <ProductCard />
          </section>
        </>
      );
    }