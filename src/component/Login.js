import React, {useRef, useState} from "react";
import Header from "./Header";
import validateForm from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../utils/fireBase";

const Login = () => {
  const [isSigninForm, setSinginForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignInForm = () => {
    setSinginForm(!isSigninForm);
  };

  const handlevalidate = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    if (!isSigninForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          alt="Body-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80 "
      >
        <h1 className="my-4 text-3xl font-bold">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSigninForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-2 my-3 w-full bg-gray-800"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Enter Email"
          className="p-2 my-3 w-full bg-gray-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-2 my-3 w-full bg-gray-800"
        />
        <p className="text-red-600 text-lg font-bold">{errMessage}</p>
        <button
          type="Submit"
          className="my-4 p-3 bg-red-700 w-full rounded-lg"
          onClick={handlevalidate}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignInForm}>
          {isSigninForm
            ? "New to Netflix? Sign up now"
            : "Already register? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
