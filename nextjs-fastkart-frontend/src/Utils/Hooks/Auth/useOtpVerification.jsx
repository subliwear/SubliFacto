import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import request from "../../AxiosUtils";
import { VerifyTokenAPI } from "../../AxiosUtils/API";
import { ToastNotification } from "../../CustomFunctions/ToastNotification";

const useOtpVerification = () => {
  const router = useRouter();
  return useMutation((data) => request({ url: VerifyTokenAPI, method: "post", data }, router), {
    onSuccess: (responseData, requestData) => {
      if (responseData.status === 200) {
        Cookies.set("uo", requestData?.token);
        router.push("/auth/update-password");
        ToastNotification("success", responseData.data.message);
      } else {
        ToastNotification("error", responseData?.response?.data?.message);
      }
    },
  });
};
export default useOtpVerification;
