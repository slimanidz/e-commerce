import "../styles/globals.css";
import AppContextProvider from "./componants/Appcontext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      {" "}
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
