import { ProductList } from "./components/product-list/ProductList";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header";

export const MOCK_PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function App() {
  const searchTerm = "Ba";

  return (
    <div className="App">
      <Header title="Best web app ☁️" />
      <div>
        <div>
          <input type="text" placeholder="Filter..." />
          <label>
            <input type="checkbox" value="instock" /> Hide out of stock
            products.
          </label>
        </div>
        <ul>
          {MOCK_PRODUCTS.filter((product) =>
            product.name.includes(searchTerm)
          ).map((product) => (
            <li>
              <strong>{product.name}</strong>
              {product.price}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
