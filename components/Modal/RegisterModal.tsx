'use client';
import { useState, useCallback } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
interface Props {}

const RegisterModal = (props: Props) => {
  const { isOpen, onClose: closeRegisterModal, onOpen } = useRegisterModal();
  const { onOpen: openLoginModal } = useLoginModal();

  const toggleModal = () => {
    closeRegisterModal();
    openLoginModal();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
    </div>
  );
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p className="">
        Already have an account?
        <span
          className="
            dark:text-white 
            text-slate-800
            cursor-pointer 
            hover:underline
            ml-1
            
          "
          onClick={toggleModal}
        >
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Create an account for watchlist"
      actionLabel="Register"
      body={bodyContent}
      footer={footerContent}
      isOpen={isOpen}
      onClose={closeRegisterModal}
    />
  );
};

export default RegisterModal;
