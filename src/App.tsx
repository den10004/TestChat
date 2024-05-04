import { useState } from "react";
import TabContent from "./components/TabContent/TabContent";
import { items } from "./items";
import Users from "./components/Users/Users";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [active, setActive] = useState(0);
  const openTab = (e: { target: { dataset: { index: string | number } } }) =>
    setActive(+e.target.dataset.index);

  return (
    <div className="main">
      <ul className="tab">
        <Search />
        <div className="tab-count">
          <span>{items.length}</span>
          <span>Выбрать</span>
        </div>
        {items.map((n, i) => (
          <li key={i} className="tabList">
            <Users openTab={openTab} active={active} i={i} n={n} />
          </li>
        ))}
      </ul>

      {items[active] && <TabContent {...items[active]} />}
    </div>
  );
}

export default App;
