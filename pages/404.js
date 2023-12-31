import Link from "next/link";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import fetcher from "../src/dataProvider";

export default function FourOhFour() {
  var router = useRouter();
  const { profile } = useSelector((state) => state.user);
  const { mutate: addUserPaymentLog } = useMutation(
    (logData) => fetcher.post("/v1/user/log", logData),
    {
      onSuccess: (response) => {
        console.log("success log: ", response);
      },
      onError: (error) => {
        console.log("fail log: ", error);
      },
    }
  );
  useEffect(() => {
    console.log("Logging");
    const temp = { profile: profile, router: router };
    addUserPaymentLog(temp);
  }, []);
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}
