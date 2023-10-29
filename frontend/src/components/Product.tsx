import * as React from "react";
import { Link } from "react-router-dom";

import { ProductType } from "../types";
import "../assets/styles/components/Product.scss";

interface ProductProps {
  product: ProductType;
  index: number;
}

const Product: React.FunctionComponent<ProductProps> = ({ product, index }) => {
  return (
    <div className={`product product-${index + 1} product-${product._id}`}>
      <Link
        className="product__image-wrapper"
        to={`/products/${product._id}`}
        aria-hidden={true}
      >
        <img
          className="product__image"
          src={product.image}
          alt={product.brand + product.name}
          aria-label={product.brand + product.name}
        />
      </Link>

      <div className="product__info">
        <Link
          className="product__title-wrapper"
          to={`/products/${product._id}`}
        >
          <h3 className="product__title">
            <span className="product__title-brand">{product.brand}</span>{" "}
            <span className="product__title-name">{product.name}</span>
          </h3>
        </Link>
        {product.unit && (
          <div className="product__unit">{`Unit: ${product.unit}`}</div>
        )}
        <div className="product__price">{`Price: ${product.price}$`}</div>
      </div>
    </div>
  );
};

export default Product;
