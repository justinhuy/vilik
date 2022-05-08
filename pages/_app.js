import { TransitionProvider } from "../context/TransitionContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <Component {...pageProps} />
    </TransitionProvider>
  );
}

export default MyApp;
