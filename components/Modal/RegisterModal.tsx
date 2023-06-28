'use client';
import { useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import useFormValidation from '@/hooks/useFormValidation';

const RegisterModal = () => {
  const { isOpen, onClose: closeRegisterModal } = useRegisterModal();
  const { onOpen: openLoginModal } = useLoginModal();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validForm, setValidForm] = useState({
    name: true,
    password: true,
    email: true,
  });
  const { nameIsValid, emailIsValid, passwordIsVaid } = useFormValidation(
    name,
    email,
    password
  );
  const router = useRouter();

  const toggleModal = () => {
    if (isLoading) {
      return;
    }
    closeRegisterModal();
    openLoginModal();
  };

  const onSumbit = useCallback(async () => {
    const formisValid = nameIsValid && emailIsValid && passwordIsVaid;
    setValidForm({
      name: nameIsValid,
      email: emailIsValid,
      password: passwordIsVaid,
    });

    if (!formisValid) {
      return;
    }

    setIsLoading(true);
    //create an account first
    try {
      await axios.post('/api/register', {
        name,
        email,
        password,
      });
      toast.success('Account Created.');
      closeRegisterModal();
      //after creating an account, sign automatically
      signIn('credentials', {
        email,
        password,
      });
      router.push('/watchlist');
    } catch {
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }

    setName('');
    setEmail('');
    setPassword('');
  }, [
    name,
    email,
    password,
    closeRegisterModal,
    router,
    nameIsValid,
    emailIsValid,
    passwordIsVaid,
  ]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
        value={name}
      />
      {!validForm.name && (
        <p className="invalid-form-text">Please enter a valid name.</p>
      )}
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        value={email}
      />
      {!validForm.email && (
        <p className="invalid-form-text">Please enter a valid email.</p>
      )}
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        value={password}
      />
      {!validForm.password && (
        <p className="invalid-form-text">Password must be 5 characters long.</p>
      )}
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
