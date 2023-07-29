import type { AppProps } from 'next/app'
import RootLayout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css';
import '../src/globals.css'
import { useEffect, useState } from 'react';
import LangContext from '@/contexts/langContext';
import langFileEn from '@/lang/en/index.json'
import langFilefa from '@/lang/fa/index.json'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState({l:langFileEn})
  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      console.log('no set lang');
      localStorage.setItem('lang','en')
    }
      if (localStorage.getItem('lang') == 'en') {
        setLang({l:langFileEn})
      }else {
        setLang({l:langFilefa})
      }
      console.log('uyyy');
      
  }, [])
        return (
          <LangContext.Provider value={lang}>
            <RootLayout>
              <Component />
          </RootLayout>
          </LangContext.Provider>
          
          
        )
      }
