"use client";
import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { ModalContext } from "@/app/menu/categories/[category]/page";
import "./itemmodal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { addToCart } from "@/app/services/cartservices";
const ItemModal = () => {
  const [modalState, setModalState] = useState(false);
  const additionalDetailsRef = useRef<HTMLTextAreaElement>(null);
  let additionalDetails = "";
  const modalContent = useContext(ModalContext).modalContent;
  const setModalContext = useContext(ModalContext).setModalContent;
  useEffect(() => {
    if (modalContent.open == true) {
      setModalState(true);
    } else {
      setModalState(false);
    }
  }, [modalContent.open]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    additionalDetails = e.target.value;
  };

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
            <div className="modal-input-div">
              <textarea
                onChange={handleChange}
                name="additionalDetails"
                id="additionalDetails"
                rows={10}
                ref={additionalDetailsRef}
              ></textarea>
              <button
                className="oval-button"
                onClick={() => {
                  addToCart(modalContent._id, additionalDetails);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          <FontAwesomeIcon
            icon={faX}
            className="close-button"
            onClick={() => {
              if (
                additionalDetailsRef.current !== null &&
                additionalDetailsRef.current !== undefined
              ) {
                additionalDetailsRef.current.value = "";
              }
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
