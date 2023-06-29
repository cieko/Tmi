"use client";

import { 
  useSessionContext, 
  useSupabaseClient 
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";


import useAuthModal from "@/hooks/useAuthModal";

import Modal from "./Modal";

const AuthModal = () => {

  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();

  // to trigger the modal
  const { onClose, isOpen } = useAuthModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  // useEffect hook to close the modal successful login / registration
  useEffect(() => {
    if(session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  return ( 
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth 
        theme="dark"
        magicLink
        providers={[
          "github",
        ]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#22c55e',
              }
            }
          }
        }}
      />
    </Modal>
  );
}

export default AuthModal;