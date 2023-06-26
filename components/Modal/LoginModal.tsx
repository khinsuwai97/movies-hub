'use client';
import { useState, useCallback } from 'react';
import { redirect, useRouter } from 'next/navigation';
import Modal from '../Modal';
import Input from '../Input';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
interface Props {}

const LoginModal = (props: Props) => {
  const { isOpen, onOpen, onClose: closeLoginModal } = useLoginModal();
  const { onOpen: openRegisterModal } = useRegisterModal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await signIn('credentials', {
        email,
        password,
      });

      router.push('/watchlist');
      closeLoginModal();
      toast.success('Signed in successfully.');
    } catch (error) {
      console.log(error);
      toast.error('Error with sign in.Please try again!');
    } finally {
      setIsLoading(false);
    }
  }, [closeLoginModal, email, password, router]);

  const toggleModal = () => {
    if (isLoading) {
      return;
    }
    openRegisterModal();
    closeLoginModal();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
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
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
};

export default LoginModal;
