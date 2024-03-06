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

  // adds a single item to local storage, if it already exists the quantity is incremented
  function addToCart() {
    if (
      localStorage.getItem("cartCount") === null ||
      localStorage.getItem("cartCount") == "NaN"
    ) {
      localStorage.setItem("cartCount", "0");
    }
    let numItems = parseInt(localStorage.getItem("cartCount") ?? "0") + 1;
    localStorage.setItem("cartCount", numItems.toString());

    let item = localStorage.getItem(`cart-item${modalContent._id}`);
    let quantity =
      item === null ? 0 : parseInt(JSON.parse(item ?? "").quantity ?? "0");
    quantity++;

    localStorage.setItem(
      `cart-item${modalContent._id}`,
      JSON.stringify({ item: modalContent, quantity })
    );
    window.dispatchEvent(new Event("storage"));
  }

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
          <div className="modal-content-image">
            {modalContent.name != "loading" && (
              <Image
                src={modalContent.img}
                alt={modalContent.name}
                width={1920}
                height={1080}
              />
            )}
          </div>

          <div className="modal-info">
            <h2>{modalContent.name + " " + modalContent.prices}</h2>
            <p>{modalContent.desc}</p>
            <p>INGREDIENTS STUFF</p>
            <button onClick={addToCart}>add to cart</button>
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
