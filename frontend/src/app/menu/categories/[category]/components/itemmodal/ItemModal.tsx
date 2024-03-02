"use client";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../CategoryContent";
import "./itemmodal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
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
  }, [modalContent.open]);

  return (
    <>
      <dialog className="modal" open={modalState}>
        <div
          className="modal-background"
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
        ></div>
        <div className="modal-content">
          <h2>{modalContent.name}</h2>
          <p>{modalContent.prices}</p>
          <p>{modalContent.desc}</p>

          <div className="item-card-image">
            {modalContent.name != "loading" && (
              <Image
                src={modalContent.img}
                alt={modalContent.name}
                width={1000}
                height={1000}
              />
            )}
          </div>

          <FontAwesomeIcon
            icon={faX}
            className="close-button"
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
          />
        </div>
      </dialog>
    </>
  );
};

ItemModal.displayName = "ItemModal";
export default ItemModal;
