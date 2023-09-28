import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import auth from '../api/firebase.config';
import errorUtils from '../utils/errorUtils';

interface FormData {
  email: string;
  password: string;
  passwordConfirm: string;
}

const mapFirebaseErrorToMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'Sorry, this email is already registered.';
    case 'auth/invalid-login-credentials':
      return 'Oops! Incorrect Username or Password. Please try again.';
    default:
      return 'An error occurred. Please try again later.';
  }
};

const useAuthForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserCredential | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    const validationError = errorUtils.validateFields(formData);
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setUser(userCredential);
      navigate('/');
    } catch (errorAuth) {
      const errorCode = (errorAuth as { code: string }).code;
      const errorMessage = mapFirebaseErrorToMessage(errorCode);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setUser(userCredential);
      navigate('/');
    } catch (errorAuth) {
      const errorCode = (errorAuth as { code: string }).code;
      const errorMessage = mapFirebaseErrorToMessage(errorCode);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    error,
    user,
    isLoading,
    handleChange,
    handleSignIn,
    handleLogin,
  };
};

export default useAuthForm;
