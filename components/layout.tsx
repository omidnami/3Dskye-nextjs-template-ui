import { useContext, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import LangContext from "@/contexts/langContext";

 
export default function Layout({ children }:any) {
  return (
    <>
      
      
        <Header />
        <main>{children}</main>
        <Footer />
      
    </>
  )
}
