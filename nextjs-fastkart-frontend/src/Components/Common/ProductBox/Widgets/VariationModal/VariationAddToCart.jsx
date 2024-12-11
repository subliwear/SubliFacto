import Btn from '@/Elements/Buttons/Btn';
import CartContext from '@/Helper/CartContext';
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';

const VariationAddToCart = ({ cloneVariation, setVariationModal }) => {
  const { cartCanvas, setCartCanvas } = useContext(ThemeOptionContext);
  const { t } = useTranslation( 'common');
  const { handleIncDec, isLoading } = useContext(CartContext);
  const productInStock = cloneVariation?.selectedVariation ? cloneVariation?.selectedVariation?.stock_status == 'in_stock' : cloneVariation?.product?.stock_status == 'in_stock';

  const addToCart = (allProduct) => {
    if (cloneVariation?.selectedVariation) {
      handleIncDec(cloneVariation.productQty, allProduct, false, false, false, cloneVariation);
      setVariationModal(false);
    } else {
      handleIncDec(cloneVariation.productQty, allProduct, false, false, false);
      setVariationModal(false);
    }
    setCartCanvas(!cartCanvas)
  };
  return (
    <div className='addtocart_btn'>
      <Btn
        className='btn btn-md fw-bold icon text-white theme-bg-color view-button text-uppercase'
        disabled={(cloneVariation?.selectedVariation && cloneVariation?.selectedVariation?.stock_status !== 'in_stock') || (cloneVariation?.product?.stock_status !== 'in_stock' && true)}
        onClick={() => addToCart(cloneVariation.product)}
        loading={Number(isLoading)}>
        <RiShoppingCartLine />
        <span>{productInStock ? t('AddToCart') : t('SoldOut')}</span>
      </Btn>
    </div>
  );
};
export default VariationAddToCart;
