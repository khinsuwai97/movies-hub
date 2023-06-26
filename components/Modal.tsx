'use client';
import { FC, useCallback, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  isLoading: boolean;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  isLoading,
}) => {
  const [googleSignisLoading, setGoogleSignIsLoading] = useState(false);
  const { onClose: closeRegisterModal } = useRegisterModal();
  const { onClose: closeLoginModal } = useLoginModal();
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  const signInWithGoogle = async () => {
    try {
      setGoogleSignIsLoading(true);
      await signIn('google');
      toast.success('Signed in successfully.');
      closeRegisterModal();
      closeLoginModal();
    } catch (error) {
      toast.error('Error with sign in.Please try again!');
    } finally {
      setGoogleSignIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-[999] 
          outline-none 
          focus:outline-none
          bg-neutral-800
          bg-opacity-70
        "
      >
        <div className="relative md:w-[50%] w-[90%] ">
          {/*content*/}
          <div
            className="
            h-full
            lg:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            dark:bg-black 
            bg-white
            outline-none 
            focus:outline-none
            "
          >
            {/*header*/}
            <div
              className="
              flex 
              items-center 
              justify-between 
              p-10 
              rounded-t
              dark:text-white text-slate-800
              "
            >
              <h3 className="text-3xl font-semibol">{title} </h3>
              <button
                className="
                  p-1 
                  ml-auto
                  border-0 
                  text-white 
                  hover:opacity-70
                  transition
                "
                onClick={onClose}
              >
                <AiOutlineClose
                  size={20}
                  className="dark:text-white dark:hover:bg-gray-800 text-slate-800 hover:bg-slate-200 rounded-md "
                />
              </button>
            </div>
            <div className="relative p-10 flex-auto">{body}</div>
            {/*footer*/}
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                signIn={true}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
                isLoading={isLoading}
              />
              <Button
                disabled={disabled}
                label="Sign in with Google"
                secondary
                fullWidth
                large
                useIcon={true}
                signIn={true}
                onClick={signInWithGoogle}
                isLoading={googleSignisLoading}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
