import { useState } from 'react';
import styles from './MyPopupModal.module.css';

const MyPopupModal = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup((prevShowPopup) => !prevShowPopup);
  return (
    <div className={`card ${styles.box}`}>
      <button className={styles.button} onClick={togglePopup}>
        Pop!
      </button>
      {showPopup && (
        <div className={styles.popup} onClick={togglePopup}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <h1>Modal</h1>
              <button className={styles.closeButton} onClick={togglePopup}>
                &times;
              </button>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPopupModal;
