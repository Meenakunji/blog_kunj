import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function GoogleSignInButton(prop) {
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    clientId:
      "326983461013-r3ej3ecqlon91rc9olrq1fakslq435fn.apps.googleusercontent.com",
    onSuccess: (response) => {
      console.log("Print resposne google login======>>>>", response);
      getUserProfile(response.access_token);
    },
    onFailure: (error) => {
      console.log("Print resposne google login error ======>>>>", error);
      console.log("Login Failed:", error);
    },
  });

  const getUserProfile = (accessToken) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
      )
      .then((res) => {
        console.log("Print resposne google getUserProfile", response);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
        </div>
      ) : (
        <button onClick={login}>Sign in with Google</button>
      )}
    </>
  );
}
