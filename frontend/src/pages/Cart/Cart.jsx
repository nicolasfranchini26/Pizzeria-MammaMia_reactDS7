import { useCart } from "../../context/CartContext";
import "./Cart.css"
import { useUserContext } from "../../context/UserContext";

const Cart = () => {
  const { cart, removeFromCart, addToCart, getTotal } = useCart();
  const { token } = useUserContext();
  const total = getTotal();

  const aumentarCantidad = (id) => {
    addToCart({ id });
  };

  const disminuirCantidad = (id) => {
    removeFromCart(id);
  };

  return (
    <>
    <div className="cart">
    <h2 className="text-center p-4">Detalle del pedido.</h2>
    {cart.length === 0 ? (
      <p className="text-center">El carrito está vacío.</p>
    ) : (
      cart.map((pizza) => (
        <div key={pizza.id} className="cart-itemPizza col-12 mb-4">
          <div className="d-flex align-content-center justify-content-center align-items-stretch">
            <img
              className="rounded mb-2"
              style={{ width: "150px", height: "100px" }}
              src={pizza.img}
              alt={pizza.name}
            />
            <div className="item-info ms-md-5">
              <h3>Pizza {pizza.name}</h3>
              <p>Precio: $ {pizza.price}</p>
              <p>Cantidad: {pizza.count}</p>
              <div className="item2 ms-3 d-flex d-flex-align">
              <button
                  className="btn btn-xl btn btn-outline-danger m-2"
                  onClick={() => disminuirCantidad(pizza.id)}
                > -</button>
                <button
                  className="btn btn-xl btn btn-outline-success m-2"
                  onClick={() => aumentarCantidad(pizza.id)}
                > +</button>
              </div>
            </div>
          </div>
        </div>
      ))
    )}
      <div className="total d-flex justify-content-center flex-column align-items-center">
        <h3 className="">Total: ${total}</h3>
        <button 
          className="btn btn-dark w-10 m-xl-4 btn btn-secondary"
          disabled={!token}
        > {!token ? "Iniciar sesión para pagar 🚨" : "Pagar Aquí 🛒"}
        </button>
      </div>
    </div>
    </>
  );
};

export default Cart;