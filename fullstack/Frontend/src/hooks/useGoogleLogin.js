import { useState } from "react";
import { useMutation } from "react-query";
import fetcher from "../dataProvider";

export default function useGoogleLogin() {
  const [isGoogleLoginSuccess, setIsGoogleLoginSuccess] = useState(false);

  const { mutate: loginGoogle } = useMutation(
    ({ id_token }) =>
      fetcher.post(`v1/auth/login`, {
        id_token,
      }),
    {
      onSuccess: (res) => {
        const accessToken = res.tokens?.access?.token;
        const refreshToken = res.tokens?.refresh?.token;
        console.log("accessToken", accessToken, refreshToken);
        // Perform actions on success, such as setting tokens in local storage
      },
      onError: (error) => {
        console.log("Error:", error);
      },
    }
  );

  return [isGoogleLoginSuccess, loginGoogle];
}
