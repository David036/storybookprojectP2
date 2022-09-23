import React, { useState, useRef } from "react";
import cn from "classnames";

import styles from "./modal.module.scss";

export default function Modal({ size = "medium",corners='normal' }) {
  const mainCn = cn(styles.smallModal, styles[size],styles[corners]);

  const [showModal, setShowModal] = useState(false)

 const openModal = () => {
  setShowModal(true)
 }
const closeModal = () => {
  setShowModal(false)
}

  return (
    <div>
      {showModal && (
    <div
      className={styles.bigModal}
      onClick={closeModal}
    >
        <div onClick={(e) => {e.stopPropagation()}}  className={mainCn}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            harum odio culpa aspernatur molestiae error labore eum libero hic.
            Blanditiis in incidunt eligendi nisi pariatur expedita non dolore ex
            nostrum sequi iure perferendis, minima provident corporis facere
            odit animi nemo tempora quas iusto cumque saepe?
          </p>
        </div>
    </div>
      )}
    <button onClick={openModal} >Open Modal</button>
    </div>
  );
}
