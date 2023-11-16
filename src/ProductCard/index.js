import {Link} from 'react-router-dom'
import "./index.css";


const ProductCard = (props) => {
  const { details } = props;
  const { title, price, images, id} = details;
  const valueToSend = id;
  return (
    <li className="productcard">
      <img src={images} alt="product" className="productCardImage" />
      <h1 className="title">{title}</h1>
      <h1 className="price">${price}</h1>
      <div>
  <button type='button'> <Link to={`/card/${id}`} d={valueToSend}>View</Link></button>
     

        <button type="button" className="button">
          AddToCart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;