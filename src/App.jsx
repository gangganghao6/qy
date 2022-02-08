import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import ContentContainer from "./components/ContentContainer.jsx";
import { Alert, Space, Spin } from "antd";

export let loadingContext = createContext({});
export let loginContext = createContext({});

function App() {
  let [loading, setLoading] = useState(false);
  let [centerLoading, setCenterLoading] = useState(false);
  let [login, setLogin] = useState(localStorage.getItem("login") === "true");
  setLoading = useCallback(setLoading, []);
  setCenterLoading = useCallback(setCenterLoading, []);
  setLogin = useCallback(setLogin, []);

  return (
    <div className="App">
      <loginContext.Provider value={{ login, setLogin }}>
        <loadingContext.Provider value={{ loading, setLoading, centerLoading, setCenterLoading }}>
          <ContentContainer />
        </loadingContext.Provider>
      </loginContext.Provider>
      <div className={"loading"} style={centerLoading ? { display: "flex" } : { display: "none" }}>
        <Spin size="large" spinning={centerLoading}></Spin>
      </div>
    </div>
  );
}

export default App;
