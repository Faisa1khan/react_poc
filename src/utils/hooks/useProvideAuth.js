import { useState, useEffect } from "react";
import { user as userList } from "../../api/users";
import history from "../../history";
// Provider hook that creates auth object and handles state
export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const authenticated = () => window.localStorage.getItem("auth") || false;

  const [auth, setAuth] = useState(authenticated);
  // ... to save the user to state.
  const signin = (email, password) => {
    userList.name.map(name => {
      if (email === name && password === userList.password) {
        window.localStorage.setItem("auth", true);
        setAuth(true);
        setUser(email);
        return history.push("/server-side");
      } else {
        return console.warn("Incorrect Username or password");
      }
    });
  };
  const signout = () => {
    window.localStorage.removeItem("auth");
    setAuth(false);
    history.push("/");
  };
  const signup = (email, password) => {};
  const sendPasswordResetEmail = email => {};
  const confirmPasswordReset = (code, password) => {};

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {}, []);

  // Return the user object and auth methods
  return {
    auth,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}
