import Image from "../nillkin-case-1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({product}) =>  {
  let id = product.id;
  let prodUrl = "/products/view/" + id;


  return (
      <div className="col">
        <div className="card shadow-sm">
          <Link to={prodUrl} href="!#" replace>
            <img
                className="card-img-top bg-dark cover"
                height="200"
                alt=""
                src={Image}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title text-center text-dark text-truncate">
              {product.productName}
            </h5>
            <p className="card-text text-center text-muted mb-0">{product.price}</p>
            <div className="d-grid d-block">
              <button className="btn btn-outline-dark mt-3">
                <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Product;
