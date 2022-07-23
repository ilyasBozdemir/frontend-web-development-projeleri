import React from 'react'
import styles from './styles.module.css'
const Modal = ({ show, onClose }) => {
    if (!show) {
        return null
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <div className={styles.modalBox}>
                    <div className={styles.modalHeader}>
                        <h1>RULES</h1>
                        <button onClick={onClose} className={styles.close}>
                            <img src="https://react-js-rock-paper-scissors-game.vercel.app/icon-close.87fe8efe.svg" alt=""></img>
                        </button>
                    </div>
                    <img src="https://react-js-rock-paper-scissors-game.vercel.app/image-rules.000711c8.svg" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Modal
