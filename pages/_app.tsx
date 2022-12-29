import type { AppProps } from 'next/app'
import "../styles/map.css";
//@ts-ignore
import { ToastContainer } from 'react-nextjs-toast'
import { MapProvider } from '../hooks/useMap';
import { ModalProvider } from '../hooks/useModal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MapProvider>
        <ModalProvider>
          <Component {...pageProps} />;
          <ToastContainer />
        </ModalProvider>
      </MapProvider>
    </>
  )
}

export default MyApp
