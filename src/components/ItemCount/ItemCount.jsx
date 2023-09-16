import { useState } from "react";
import PropTypes from "prop-types";
import "./ItemCount.css";

function ItemCount({ stock, initial }) {
  
  const [count, setCount] = useState(initial);

  const addCount = (num) => {
    setCount(count + num);
  };

  return (
    <div className="count-container">
      <button
        disabled={count <= 1}
        className="button-count"
        onClick={() => {
          addCount(-1);
        }}
      >
        -
      </button>
      <div className="box-qty">{count}</div>
      <button
        disabled={ count >= stock }
        className="button-count"
        onClick={() => {
          addCount(1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default ItemCount;

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired
}

ItemCount.defaultProps = {
  stock: 0,
  initial: 1
}