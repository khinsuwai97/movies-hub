'use client';
import { FC, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
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
}) => {
  if (!isOpen) {
    return null;
  }
  console.log(isOpen);

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
              />
              <Button
                disabled={disabled}
                label="Sign in with Google"
                secondary
                fullWidth
                large
                useIcon={true}
                signIn={true}
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
