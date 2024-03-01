"use client";
import { useContext, useEffect, useState, forwardRef } from "react";
import { ModalContext } from "../CategoryContent";
import "./itemmodal.css";

const ItemModal = () => {
  const [modalState, setModalState] = useState(false);
  const modalContent = useContext(ModalContext).modalContent;
  const setModalContext = useContext(ModalContext).setModalContent;

  useEffect(() => {
    if (modalContent.open == true) {
      setModalState(true);
    } else {
      setModalState(false);
    }
  });

  return (
    <>
      <dialog className="modal" open={modalState}>
        <h2>{modalContent.name}</h2>
        <div className="item-card-image">
          {
            <img
              src={modalContent.img}
              alt={modalContent.name}
              width="200px"
              height="200px"
            />
          }
        </div>
        <p>{modalContent.prices}</p>
        <p>{modalContent.desc}</p>
        <button
          className=" button close-button"
          onClick={() => {
            setModalContext({
              _id: modalContent._id,
              name: modalContent.name,
              desc: modalContent.desc,
              img: modalContent.img,
              prices: modalContent.prices,
              open: false,
            });
          }}
        >
          close modal
        </button>
      </dialog>
    </>
  );
};

ItemModal.displayName = "ItemModal";
export default ItemModal;
