// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0

      cartList.forEach(item => {
        total += item.price * item.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="order-total-value">
            <span className="order-total-label">Order Total: </span>Rs {total}
          </h1>
          <p className="items-count">{cartList.length} Items in Cart</p>
          <button type="button" className="checkout-button d-sm-none">
            Checkout
          </button>
          <button type="button" className="checkout-button d-lg-none">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
