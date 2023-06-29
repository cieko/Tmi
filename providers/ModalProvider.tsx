"use client"

import { useEffect, useState } from "react";


import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)


  }, [])
  // to prevent hydration error, never want to render our modal if we are in server side rendering

  if(!isMounted) {
    return null;
  }


  return ( 
    <>
      <AuthModal />
    </>
  );
}

export default ModalProvider;
