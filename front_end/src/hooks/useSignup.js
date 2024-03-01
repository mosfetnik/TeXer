import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/useAuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser}  = useAuthContext();
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-agent": "learning app",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      //local storage
      localStorage.setItem("chat-user", JSON.stringify(data));

      //context value
      setAuthUser(data);

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the field");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password do not matched");
    return false;
  }

  if (password.length < 6) {
    toast.error("password must be at least 6 character");
    return false;
  }
  return true;
}
