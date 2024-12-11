import AccountContext from '@/Helper/AccountContext';
import CartContext from '@/Helper/CartContext';
import CompareContext from '@/Helper/CompareContext';
import WishlistContext from '@/Helper/WishlistContext';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import request from '../../AxiosUtils';
import { CompareAPI, LoginAPI, SyncCart } from '../../AxiosUtils/API';
import useCreate from '../useCreate';

const transformLocalStorageData = (localStorageData) => {
  const transformedData = localStorageData?.map(item => ({
    product_id: item?.product_id,
    variation_id: item?.variation_id || '', 
    quantity:item?.quantity
  }));

  return transformedData
    
};
const LoginHandle = (responseData, router, refetch,compareRefetch,CallBackUrl,mutate,cartRefetch,setShowBoxMessage ,addToWishlist ,compareCartMutate) => {
  if (responseData.status === 200 || responseData.status === 201) {
    Cookies.set('uaf', responseData.data?.access_token, { path: '/', expires: new Date(Date.now() + 24 * 60 * 6000) });
    const ISSERVER = typeof window === 'undefined';
    if (typeof window !== 'undefined') {
      Cookies.set('account', JSON.stringify(responseData.data));
      localStorage.setItem('account', JSON.stringify(responseData.data));
    }

    const oldCartValue = JSON.parse(localStorage.getItem('cart'))?.items;
    oldCartValue?.length >0 && mutate(transformLocalStorageData(oldCartValue))
    refetch();
    compareRefetch()
    cartRefetch()
    const wishListID = Cookies.get('wishListID')
    const CompareId = Cookies.get('compareId')
    CompareId ? compareCartMutate({ product_id: CompareId }) : null
    const productObj ={ id : wishListID }
    wishListID ? addToWishlist(productObj) : null
    router.push(`/`);
    Cookies.remove("wishListID")
    Cookies.remove("compareId")
    localStorage.removeItem('cart');
    Cookies.remove("CallBackUrl")
  }else {
    setShowBoxMessage(responseData.response.data.message);
  }
};

const useHandleLogin = (setShowBoxMessage) => { 
  const { mutate } = useCreate(SyncCart, false, false, 'No',);
  const { addToWishlist} = useContext(WishlistContext);
  const { mutate:compareCartMutate } = useCreate(CompareAPI, false, false, 'Added to Compare List');

  const CallBackUrl = Cookies.get('CallBackUrl')
  const { refetch } = useContext(AccountContext);
  const { refetch:cartRefetch } = useContext(CartContext);
  const { refetch:compareRefetch } = useContext(CompareContext);
  const router = useRouter();
  return useMutation(
    (data) =>
      request({url: LoginAPI,method: 'post',data,}),
    {
      onSuccess: (responseData) => LoginHandle(responseData, router, refetch,compareRefetch,CallBackUrl,mutate,cartRefetch, setShowBoxMessage ,addToWishlist ,compareCartMutate),
    },
  );
};

export default useHandleLogin;

