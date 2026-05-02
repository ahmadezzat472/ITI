// import "@/styles/globals.css";
import { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/NavBar";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("../../node_modules/bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
