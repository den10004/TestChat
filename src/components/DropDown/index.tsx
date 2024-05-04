import { useState } from "react";
import styles from "./DropDown.module.css";

function DropDown() {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseLeave={() => setOpen(false)} className={styles.dropDownWrapper}>
      <button className={styles.btnDropdown} onMouseOver={() => setOpen(true)}>
        <svg
          width="20.000000"
          height="4.000000"
          viewBox="0 0 20 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs />
          <mask id="mask_2_5553" fill="white">
            <path
              id="Combined Shape"
              d="M2 4C0.895386 4 0 3.10461 0 2C0 0.895386 0.895386 0 2 0C3.10461 0 4 0.895386 4 2C4 3.10461 3.10461 4 2 4ZM10 4C8.89539 4 8 3.10461 8 2C8 0.895386 8.89539 0 10 0C11.1046 0 12 0.895386 12 2C12 3.10461 11.1046 4 10 4ZM16 2C16 3.10461 16.8954 4 18 4C19.1046 4 20 3.10461 20 2C20 0.895386 19.1046 0 18 0C16.8954 0 16 0.895386 16 2Z"
              clipRule="evenodd"
              fill=""
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </mask>
          <path
            id="Combined Shape"
            d="M2 4C0.895386 4 0 3.10461 0 2C0 0.895386 0.895386 0 2 0C3.10461 0 4 0.895386 4 2C4 3.10461 3.10461 4 2 4ZM10 4C8.89539 4 8 3.10461 8 2C8 0.895386 8.89539 0 10 0C11.1046 0 12 0.895386 12 2C12 3.10461 11.1046 4 10 4ZM16 2C16 3.10461 16.8954 4 18 4C19.1046 4 20 3.10461 20 2C20 0.895386 19.1046 0 18 0C16.8954 0 16 0.895386 16 2Z"
            clipRule="evenodd"
            fill="#161718"
            fillOpacity="1.000000"
            fillRule="evenodd"
            mask="url(#mask_2_5553)"
          />
          <path
            id="Combined Shape"
            d=""
            fill="#979797"
            fillOpacity="0.000000"
            fillRule="nonzero"
          />
        </svg>
      </button>

      <div>
        <ul
          className={styles.dropdownList}
          style={{
            display: open ? "block" : "none",
          }}
        >
          <li className={styles.dropList}>
            <p>Изменить</p>
          </li>
          <li className={styles.dropList}>
            <p>Удалить</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
