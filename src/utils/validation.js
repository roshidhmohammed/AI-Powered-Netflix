export const validationData = (email, password, fullName, isSignInForm) => {
  const isFullNameValid = fullName.length > 3;
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isSignInForm) {
    if (!isFullNameValid) return "Please Enter Your Full Name";
  }

  if (!isEmailValid) return "Please enter a valid email";

  if (!isPasswordValid) return "Please enter the valid password";

  return null;
};
