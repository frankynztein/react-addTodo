import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import './TodosLoading.css';

function TodosLoading() {
  return (
    <>
      {/* <div className="spinner">
        <div className="spinnerin"></div>
      </div> */}
      <div className="LoadingTodo-container">
        {/* <span className="LoadingTodo-completeIcon"></span> */}
        {/* <FaCheckCircle className="LoadingTodo-Check" /> */}
        {/* <p className="LoadingTodo-textJDC"></p> */}
        <p className="LoadingTodo-text"></p>
        {/* <span className="LoadingTodo-deleteIcon"></span> */}
        {/* <IoClose className="LoadingTodo-Delete" /> */}
      </div>
    </>
  )
}

export { TodosLoading };