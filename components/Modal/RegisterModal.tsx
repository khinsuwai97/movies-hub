'use client';
import { useState, useCallback } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RegisterModal = () => {
  const { isOpen, onClose: closeRegisterModal, onOpen } = useRegisterModal();
  const { onOpen: openLoginModal } = useLoginModal();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleModal = () => {
    if (isLoading) {
      return;
    }
    closeRegisterModal();
    openLoginModal();
  };

  const onSumbit = useCallback(async () => {
    setIsLoading(true);
    try {
      await axios.post('/api/register', {
        name,
        email,
        password,
      });
      toast.success('Account Created.');
      closeRegisterModal();
      signIn('credentials', {
        email,
        password,
      });
    } catch {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, [name, email, password, closeRegisterModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
        value={name}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        value={email}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        value={password}
      />
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
      onSubmit={onSumbit}
      isLoading={isLoading}
    />
  );
};

export default RegisterModal;
