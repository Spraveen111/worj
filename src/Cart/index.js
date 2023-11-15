import "./index.css";

function Cart() {
  return (
    <div className="mainFirstContainer">
      <div>
        <h1 className="shopping">Shopping Cart</h1>
        <div className="mainContainer">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
            alt="i"
            className="imageCart"
          />
          <div>
            <p>Iphone</p>
            <p>
              <span className="spanColor">Color:</span> Grey
            </p>
          </div>
          <input type="text" placeholder="1" className="check" />
          <p className="price">$499</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
          </svg>{" "}
        </div>

        <div className="payment-box">
          <button className="proceed-button">Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;