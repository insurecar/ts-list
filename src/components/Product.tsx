import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps): JSX.Element => {
  const [details, setDetails] = useState(false);

  const btnClassName = [
    "py-2 px-4 border",
    details ? "bg-yellow-400" : "bg-blue-400 ",
  ].join(" ");

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        className={btnClassName}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Show Details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Raite{" "}
            <span style={{ fontWeight: "bold" }}>{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};
