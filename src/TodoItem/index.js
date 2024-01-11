// import { CompleteIcon } from './CompleteIcon.js'
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import './TodoItem.css'
// import CheckRed from './check-red.png';
// import CheckGreen from './check-green.png';
// import CheckBlack from './check-black.png';
// import CloseRed from './close-red.png'
// import CloseWhite from './close-white.png'

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='TodoItem'>
      {/* <img src={CheckRed} className='CheckRed CheckRed--active' /> */}
      {/* <img src={CheckGreen} className='CheckGreen CheckGreen--active' /> */}
      {/* <img src={CheckBlack} className='CheckBlack CheckBlack--active' /> */}
      {/* <span
        className={`Check ${completed && "Check--active"}`}
        onClick={onComplete}
      >V</span> */}
      {/* <CompleteIcon /> */}

      <FaCheckCircle
        className={`Check ${completed && "Check--active"}`}
        onClick={onComplete}
      />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
      {/* <span className='Delete' onClick={onDelete}>X</span> */}
      <IoClose
        className='Delete'
        onClick={onDelete}
      />
      {/* <img src={CloseRed} className='CloseRed CloseRed--delete' /> */}
      {/* <img src={CloseWhite} className='CloseWhite CloseWhite--delete' /> */}
    </li>
  );
}

export { TodoItem };