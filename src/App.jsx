import { useState } from "react";
import "./App.css";
import productsData from "./productsData";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="App">
      <h1>Магазин гаджетов</h1>

      <input
        type="text"
        placeholder="Поиск товара"
        className="search-input"
      />

      <div className="products-grid">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
          >
            <div class="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <h2>{product.title}</h2>
            <div className="product-footer">
              <p>{product.price} &#8381;</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setSelectedProduct(null)}>&#10005;</button>
            <div className="modal-image">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <h2>{selectedProduct.title}</h2>
            <p className="modal-description">{selectedProduct.description}</p>
            <p className="modal-price">{selectedProduct.price} ₽</p>
            <button className="buy-button">Купить</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
