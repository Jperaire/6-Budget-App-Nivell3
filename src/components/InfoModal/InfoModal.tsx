import { useId } from "react";
import infoIcon from "../../assets/images/info.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./InfoModal.module.css";

interface ModalProps {
    modalTitle: string;
    modalContent: string;
}

const InfoModal = ({ modalTitle, modalContent }: ModalProps) => {
    const modalId = useId();

    return (
        <>
            <button
                type="button"
                className="btn btn-link p-0 border-0"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
            >
                <img
                    src={infoIcon}
                    alt="Information Icon"
                    className={styles.infoIcon}
                />
            </button>

            <div
                className="modal fade"
                id={modalId}
                tabIndex={-1}
                aria-labelledby={`${modalId}Label`}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`modal-content ${styles.modalContent}`}>
                        <h5 className="modal-title" id={`${modalId}Label`}>
                            {modalTitle}
                        </h5>
                        <div>{modalContent}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoModal;
