"use client";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../CategoryContent";
import "./itemmodal.css";
export default function ItemModal() {
  const [modalState, setModalState] = useState(false);
  const modalContext = useContext(ModalContext);
  useEffect(() => {
    /*
    modalContext.setModalContent({
      _id: "_id",
      name: "_name",
      desc: "_desc",
      img: "_img",
      prices: [1, 2, 3],
    });
*/
    modalContext.modalContent;
  });
  function modalOn() {
    setModalState(true);
  }
  function modalOff() {
    setModalState(false);
  }
  return (
    <>
      <button className="button open-modal" onClick={modalOn}>
        open modal
      </button>
      <dialog className="modal" open={modalState}>
        <h2>props.name</h2>
        <div className="item-card-image">
          {/*<img src={props.img} alt={props.name} width="200px" height="200px" />*/}
        </div>
        <p>props.prices</p>
        <p>props.desc</p>
        <button className=" button close-button" onClick={modalOff}>
          close modal
        </button>
      </dialog>
    </>
  );
}
