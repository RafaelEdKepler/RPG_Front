import type { AppProps } from 'next/app'
import { CustomCursor } from 'react-svg-cursor';
import { GiMedievalGate } from "react-icons/gi";
import "../styles/map.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomCursor
        component={GiMedievalGate}
        isDisabled={false}
        width={25}
        height={25}
        zIndex={420}
      />
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp
