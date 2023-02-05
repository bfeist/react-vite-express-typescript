import styles from "./App.module.css";
import axios from "axios";
import { useState } from "react";
import { ROOT_URL } from "../../common/src/constants";
import { validation } from "../../common/src/utils";

function App() {
  const [data, setData] = useState();
  const urlWithProxy = ROOT_URL;

  validation();

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className={styles.app}>
      <button className={styles.button} onClick={getDataFromServer}>
        Access server using proxy
      </button>
      <p>data : {data}</p>
    </div>
  );
}

export default App;
