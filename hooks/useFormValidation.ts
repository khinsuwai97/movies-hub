const isEmpty = (value: string) => value.trim() === '';
const isFiveChar = (value: string) => value.trim().length === 5;
const emailValidate = (value: string) => value.trim().includes('@');

const useFormValidation = (name: string, email: string, password: string) => {
  const nameIsValid = !isEmpty(name);
  const emailIsValid = !isEmpty(email) && emailValidate(email);
  const passwordIsVaid = !isEmpty(password) && isFiveChar(password);

  return {
    nameIsValid,
    emailIsValid,
    passwordIsVaid,
  };
};

export default useFormValidation;
