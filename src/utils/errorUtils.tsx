// errorUtils.ts
interface FormData {
  email: string;
  password: string;
  passwordConfirm: string;
}

const isValidEmail = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const validateFields = (formData: FormData): string | null => {
  const { email, password, passwordConfirm } = formData;

  if (!email || !password || !passwordConfirm) {
    return 'Please complete all fields';
  }
  if (password !== passwordConfirm) {
    return 'Passwords do not match';
  }
  if (password.length && passwordConfirm.length < 8) {
    return 'Password must contain at least 8 characters';
  }
  if (!isValidEmail(email)) {
    return 'Invalid email format';
  }

  return null; // No errors
};

const getInputVersion = (
  fieldName: string,
  formData: FormData,
  error: string | null
): string => {
  const { email, password, passwordConfirm } = formData;

  if (error) {
    if (fieldName === 'email' && !email) {
      return 'error';
    }

    if (fieldName === 'password' && !password) {
      return 'error';
    }

    if (fieldName === 'passwordConfirm' && !passwordConfirm) {
      return 'error';
    }

    if (
      fieldName === 'password' &&
      password.length &&
      passwordConfirm.length < 8
    ) {
      return 'error';
    }

    if (
      (fieldName === 'password' || fieldName === 'passwordConfirm') &&
      password !== passwordConfirm
    ) {
      return 'error';
    }

    if (fieldName === 'email' && !isValidEmail(email)) {
      return 'error';
    }
  }
  return 'default';
};

export default { validateFields, getInputVersion };
