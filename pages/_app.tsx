import type { AppProps } from 'next/app'
import { CustomCursor } from 'react-svg-cursor';
import { GiMedievalGate } from "react-icons/gi";
import "../styles/map.css";
import { MapProvider } from '../hooks/useMap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MapProvider>
        <Component {...pageProps} />;
      </MapProvider>
    </>
  )
}

export default MyApp
