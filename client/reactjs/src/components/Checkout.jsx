import React, { useEffect } from "react";
import classnames from 'classnames'
import { Context } from "./ContextProvider";

const prodtct = [
  {
    Ebook: "Javascript Basico",
    desc: "Livro de JavaScript basico ao avanssado",
    page: 333,
    Author: "José Snatana",
    Preço: 10
  },
  {
    Ebook: "Python Basico",
    desc: "Livro de Python basico ao avanssado",
    page: 333,
    Author: "Grasy Snatana",
    Preço: 15
  }
]

const Checkout = ({ onClick }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const { preferenceId, isLoading: disabled, orderData, setOrderData } = React.useContext(Context);
  const shoppingCartClass = classnames('shopping-cart dark', {
    'shopping-cart--hidden': !isVisible,
  })

  useEffect(() => {
    if (preferenceId) setIsVisible(false);
  }, [preferenceId])


  const updatePrice = (event) => {
    const quantity = event.target.value;
    const amount = parseInt(orderData.price) * parseInt(quantity);
    setOrderData({ ...orderData, quantity, amount });
  }

  return (
    <section className={shoppingCartClass}>
      <div className="container" id="container">
        <div className="block-heading">
          <h2>Carrinho de compras</h2>
          <p>This is an example of Checkout Pro integration of Mercado Pago</p>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="items">
                <div className="product">
                  <div className="info">
                    <div className="product-details">
                      <div className="row justify-content-md-center">
                        <div className="col-md-3">
                          <img
                            className="img-fluid mx-auto d-block image"
                            alt="Image of a product"
                            src="../img/product.png"
                          />
                        </div>
                        {prodtct.map(r => (
                          <div className="col-md-4 product-detail">
                            <h5>Produtos</h5>
                            <div className="product-info">
                              <b>Descrição: </b>
                              <span id="product-description">{r.desc}</span>
                              <br />
                              <b>Author: </b>{r.desc}
                              <br />
                              <b>Number of pages: </b>{r.page}
                              <br />
                              <b>Preco:</b> $ <span id="unit-price">{r.preco}</span>
                              <br />
                            </div>
                          </div>
                        ))}
                        <div className="col-md-3 product-detail">
                          <label htmlFor="quantity">
                            <b>Qunatidade</b>
                          </label>
                          <input
                            onChange={updatePrice}
                            type="number"
                            id="quantity"
                            value={orderData.quantity}
                            min="1"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="summary">
                <h3>Carrinho</h3>
                <div className="summary-item">
                  <span className="text">Subtotal</span>
                  <span className="price" id="cart-total">{orderData.amount}</span>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={onClick}
                  id="checkout-btn"
                  disabled={disabled}
                >
                  Confira
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;