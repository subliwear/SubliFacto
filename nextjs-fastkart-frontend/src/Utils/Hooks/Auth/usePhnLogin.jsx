
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useRouter, useSearchParams } from 'next/navigation';
import request from '../../AxiosUtils';
import { LoginPhnAPI } from '../../AxiosUtils/API';

const useHandlePhnLogin = () => { 
  const router = useRouter();
  return useMutation(
    (data) =>
      request({url: LoginPhnAPI,method: 'post',data,}),
    {
        onSuccess: (responseData, requestData) => {
        if (responseData.status === 200) {
            Cookies.set("uc", requestData.country_code);
            Cookies.set("up", requestData.phone);
            router.push("/auth/phn-otp");
          }
      }
    },
  );
};

export default useHandlePhnLogin;

