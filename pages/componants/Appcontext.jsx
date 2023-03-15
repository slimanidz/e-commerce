import deepmerge from "deepmerge";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
// import api from "../services/api";
const AppContext = createContext();
const initialState = {
  session: null,
};

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState);

  const updateState = useCallback(
    (newState) =>
      setState((previousState) => deepmerge(previousState, newState)),
    []
  );
  const setSession = useCallback(
    (jwt) => {
      if (!jwt) {
        localStorage.removeItem("session_jwt");
        updateState({ session: null });

        return;
      }

      // const { session } = JSON.parse(atob(jwt.split(".")[1]));
      const { payload: session } = JSON.parse(
        Buffer.from(jwt.split(".")[1], "base64").toString("utf-8")
      );

      localStorage.setItem("session_jwt", jwt);

      updateState({ session });
    },
    [updateState]
  );

  useEffect(() => {
    setSession(localStorage.getItem("session_jwt"));
  }, [setSession]);

  ///////////////////////////////////////////////

  const [nounouIdC, setNounouIdC] = useState(0);

  const setNounouIdC1 = useCallback((nounouId) => {
    setNounouIdC(nounouId);
  }, []);

  const [countComments, setCountComments] = useState(0);
  const [products, setProductes] = useState([]);
  const addComments = useCallback(
    (...comments) => setComments((previous) => [...previous, ...comments]),
    []
  );

  const [panier, setPannier] = useState([]);
  const addPannier = useCallback(
    (...panier) => setPannier((previous) => [...previous, ...panier]),
    []
  );

  const deletePanier = (i) => {
    setPannier(panier.filter((item, a) => a !== i));
  };
  const VidePanier = useCallback(
    (...panier) => setPannier((previous) => []),
    []
  );

  useEffect(() => {
    (async () => {
      const {
        data: { result },
      } = await api.get(`/api/products`);

      setProductes(result);
    })();
  }, []);

  return (
    <AppContext.Provider
      {...props}
      value={{
        setSession,
        state,
        setNounouIdC1,
        nounouIdC,
        products,
        addPannier,
        panier,
        deletePanier,
        VidePanier,
      }}
    />
  );
};
export default AppContextProvider;
