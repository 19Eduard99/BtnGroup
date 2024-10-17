import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import classNames from 'classnames';

const BtnGroup = () => {
  const [activeButton, setActiveButton] = useState(null);

  const btnLeftClass = classNames({
    'active': activeButton === 'left',
  });

  const btnRightClass = classNames({
    'active': activeButton === 'right',
  });
  
  const toggleLeftBtn = () => setActiveButton(activeButton === 'left' ? null : 'left');
  const toggleRightBtn = () => setActiveButton(activeButton === 'right' ? null : 'right');

  return (
    <div className="btn-group" role="group">
      <button
        onClick={toggleLeftBtn}
        type="button"
        className={`btn btn-secondary left ${btnLeftClass}`}
      >
        Left
      </button>
      <button
        onClick={toggleRightBtn}
        type="button"
        className={`btn btn-secondary right ${btnRightClass}`}
      >
        Right
      </button>
    </div>
  );
};

export default BtnGroup;
