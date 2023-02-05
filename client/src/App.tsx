import styles from "./App.module.css";
import { useState } from "react";
import { ROOT_URL } from "../../common/src/constants";
import { commonExample } from "../../common/src/utils";
import type { RespExampleType } from "../../common/src/typings/types";

function App() {
  const [data, setData] = useState<RespExampleType>();
  const urlWithProxy = ROOT_URL;

  commonExample();

  async function getDataFromServer() {
    const res = await fetch(urlWithProxy);
    const data: RespExampleType = await res.json();
    setData(data);
  }

  return (
    <div className={styles.app}>
      <button className={styles.button} onClick={getDataFromServer}>
        Access server using proxy
      </button>
      <p>data : {data?.text}</p>
    </div>
  );
}

export default App;
