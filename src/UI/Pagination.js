import React, { useEffect, useState } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButtons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);
  const onButtonCLick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="pagination">
      <ul>
        <li className="paniga-item">
          <a
            href="!#"
            className="paniga-link"
            onClick={() => onButtonCLick("prev")}
          >
            Prev
          </a>
        </li>
        {new Array(numberOfButtons).fill("").map((el, index) => {
          return (
            <li
              className={`pagina-item ${
                index + 1 === counter ? "active" : null
              }`}
            >
              <a
                href="!#"
                className="paniga-link"
                onClick={() => setCounter(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          );
        })}
        <li className="paniga-item">
          <a
            href="!#"
            className="paniga-link"
            onClick={() => onButtonCLick("next")}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
