import { useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      await projectFirestore
        .collection("users")
        .doc(res.user.uid)
        .update({ online: true });

      dispatch({ type: "LOGIN", payload: res.user });

      setIsPending(false);
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  const resetPassword = async (email) => {
    setError(null);
    setIsPending(true);

    try {
      await projectAuth.sendPasswordResetEmail(email);
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, resetPassword, isPending, error };
};
