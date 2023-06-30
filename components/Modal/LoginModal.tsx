'use client';
import { useState, useCallback } from 'react';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import Modal from '../Modal';
import Input from '../Input';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import useFormValidation from '@/hooks/useFormValidation';

const LoginModal = () => {
  const { isOpen, onClose: closeLoginModal } = useLoginModal();
  const { onOpen: openRegisterModal } = useRegisterModal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [validForm, setValidForm] = useState({
    email: true,
    password: true,
  });
  const { emailIsValid, passwordIsVaid } = useFormValidation(
    '',
    email,
    password
  );

  const onSubmit = useCallback(async () => {
    const formisValid = emailIsValid && passwordIsVaid;
    setValidForm({
      email: emailIsValid,
      password: passwordIsVaid,
    });

    if (!formisValid) {
      return;
    }
    try {
      setIsLoading(true);
      await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      closeLoginModal();

      toast.success('Signed in successfully.');
      redirect('/');
    } catch (error) {
      console.log(error);
      // toast.error('Error with sign in.Please try again!');
    } finally {
      setIsLoading(false);
    }
    setEmail('');
    setPassword('');
  }, [closeLoginModal, email, password, emailIsValid, passwordIsVaid]);

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
      {!validForm.email && (
        <p className="invalid-form-text">Please enter a valid email.</p>
      )}
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      {!validForm.password && (
        <p className="invalid-form-text">Please enter a valid password.</p>
      )}
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
