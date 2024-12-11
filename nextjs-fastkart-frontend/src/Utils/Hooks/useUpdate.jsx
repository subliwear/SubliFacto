import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import request from "../AxiosUtils";
import SuccessHandle from "../CustomFunctions/SuccessHandle";

const useUpdate = (url, updateId, path, message, extraFunction) => {
  const router = useRouter();
  return useMutation((data) => request({ url: `${url}/${Array.isArray(updateId) ? updateId.join("/") : updateId}`, method: "put", data }, router), {
    onSuccess: (resData) => {
      SuccessHandle(resData, router, path, message);
      extraFunction && extraFunction(resData);
    },
  });
};
export default useUpdate;
