"use client"

import { FC, useEffect, useState } from "react";


import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import SubscribeModal from "@/components/SubscribeModal";
import { ProductWithPrice } from "@/types";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: FC<ModalProviderProps> = ({
  products
}) => {

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
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
}

export default ModalProvider;
