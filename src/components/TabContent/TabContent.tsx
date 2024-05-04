import { useState } from "react";
import Tabs from "../Tabs/Tabs";
import styles from "./tabContent.module.css";
import DropDown from "../DropDown";

import { Contents } from "../../itemsIF";

function TabContent(items: {
  contents: Contents;
  photo: string | undefined;
  name: string;
  old: string;
  gender: string;
}) {
  const tabs = items.contents;

  const [active, setActive] = useState(0);
  const openTab = (e: { target: { dataset: { index: string | number } } }) =>
    setActive(+e.target.dataset.index);

  return (
    <div className={styles.tabWrapper}>
      <div className={styles.tabcontent}>
        <img src={items.photo} alt="photo" />
        <div className={styles.tabcontentAbout}>
          <p>{items.name}</p>
          <span>
            {items.old},&nbsp;{items.gender}
          </span>
        </div>

        <div className="dropPosition">
          <DropDown />
        </div>
      </div>

      <div className={styles.tabsWrap}>
        <ul className={styles.tabsBloks}>
          {Object.keys(tabs).map((n, i) => (
            <li
              key={i}
              className={`tabBlocklinks ${i === active ? "active" : ""}`}
              onClick={openTab}
              data-index={i}
            >
              {n === "notes" && "Заметки"}
              {n === "consultation" && "Консультации"}
              {n === "video" && "Видео"}
              {n === "activity" && "Мероприятия"}
            </li>
          ))}
        </ul>
        <div className={styles.recomend}>
          {active === 0 && <span> Новая заметка</span>}
          {active === 1 && <span> Записать</span>}
          {active > 1 && <span>Рекомендовать</span>}

          <button>
            <svg
              width="11.000000"
              height="12.000000"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <path
                id="+"
                d="M5.76 4.59L9.55 4.59C9.99 4.59 10.35 4.95 10.35 5.39L10.35 5.39C10.35 5.83 9.99 6.19 9.55 6.19L5.76 6.19L5.76 10.34C5.76 10.77 5.41 11.11 4.99 11.11L4.99 11.11C4.56 11.11 4.21 10.77 4.21 10.34L4.21 6.19L0.44 6.19C0 6.19 -0.36 5.83 -0.36 5.39L-0.36 5.39C-0.36 4.95 0 4.59 0.44 4.59L4.21 4.59L4.21 0.42C4.21 -0.01 4.56 -0.36 4.99 -0.36L4.99 -0.36C5.41 -0.36 5.76 -0.01 5.76 0.42L5.76 4.59Z"
                fill="#616F82"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
              <path
                id="+"
                d="M9.55 4.59C9.99 4.59 10.35 4.95 10.35 5.39C10.35 5.83 9.99 6.19 9.55 6.19L5.76 6.19L5.76 10.34C5.76 10.77 5.41 11.11 4.99 11.11C4.56 11.11 4.21 10.77 4.21 10.34L4.21 6.19L0.44 6.19C0 6.19 -0.36 5.83 -0.36 5.39C-0.36 4.95 0 4.59 0.44 4.59L4.21 4.59L4.21 0.42C4.21 -0.01 4.56 -0.36 4.99 -0.36C5.41 -0.36 5.76 -0.01 5.76 0.42L5.76 4.59L9.55 4.59Z"
                stroke="#8792A3"
                strokeOpacity="0"
                strokeWidth="0.000000"
              />
            </svg>
          </button>
        </div>
      </div>

      {active === 0 && <Tabs items={items.contents.notes} />}
      {active === 1 && <Tabs items={items.contents.consultation} />}
      {active === 2 && <Tabs items={items.contents.video} />}
      {active > 2 && <Tabs items={items.contents.activity} />}
    </div>
  );
}

export default TabContent;
