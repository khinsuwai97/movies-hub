'use client';
import Modal from '../Modal';
import Input from '../Input';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { useState } from 'react';
interface Props {}

const LoginModal = (props: Props) => {
  const { isOpen, onOpen, onClose: closeLoginModal } = useLoginModal();
  const { onOpen: openRegisterModal } = useRegisterModal();

  const toggleModal = () => {
    openRegisterModal();
    closeLoginModal();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
    </div>
  );
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Movies Hub?
        <span
          className="
          dark:text-white 
          text-slate-800 
              cursor-pointer 
              hover:underline
            "
          onClick={toggleModal}
        >
          {' '}
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Login"
      actionLabel="Sign in"
      body={bodyContent}
      footer={footerContent}
      isOpen={isOpen}
      onClose={closeLoginModal}
    />
  );
};

export default LoginModal;
