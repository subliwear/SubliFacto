import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import request from "../AxiosUtils";
import SuccessHandle from "../CustomFunctions/SuccessHandle";

const useCreate = (url, updateId, path = false, message, extraFunction, notHandler, setCouponError, responseType) => {
  const router = useRouter();
  const pathName = usePathname();
  return useMutation((data) => request({ url: updateId ? `${url}/${Array.isArray(updateId) ? updateId.join("/") : updateId}` : url, data, method: "post", responseType: responseType ? responseType : "" }, router), {
    onSuccess: (resDta) => {
      !notHandler && SuccessHandle(resDta, router, path, message, setCouponError, pathName);
      extraFunction && extraFunction(resDta);
    },
    onError: (err) => {
      return err;
    },
  });
};

export default useCreate;
