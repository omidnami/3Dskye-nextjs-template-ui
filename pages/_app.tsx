import type { AppProps } from 'next/app'
import RootLayout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css';
import '../src/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
       
        return (
          <RootLayout>
            <Component />
          </RootLayout>
        )
      }
