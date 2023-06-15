import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <div className="product__thumb">
        <img src={imageUrl} alt={name} />
      </div>
    

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>
        <div class="product_bottom__details">
          <p className="info__price">₱{price}</p>
        </div>
        <Link to={`/product/${productId}`} className="btn info__button">
          View More
        </Link>
      </div>
    </div>
  );
};

export default Product;
