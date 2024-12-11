import React, { useContext } from 'react';
import Btn from '@/Elements/Buttons/Btn';
import CartContext from '@/Helper/CartContext';
import CompareContext from '@/Helper/CompareContext';
import { useTranslation } from "react-i18next";
import { RiDeleteBinLine } from 'react-icons/ri';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';

const CompareAction = ({ product, compareMutate }) => {
  const { setCompareState } = useContext(CompareContext);
  const { t } = useTranslation( 'common');
  const { themeOption, cartCanvas, setCartCanvas } = useContext(ThemeOptionContext);

  const { handleIncDec, isLoading } = useContext(CartContext);
  const removeFromCompare = (productObj) => {
    compareMutate(productObj.id);
    setCompareState((prevState) => prevState.filter((elem) => elem.id !== productObj?.id));
  };
  const addToCart = () => {
    setCartCanvas(true)
    handleIncDec(1, product);
  };
  return (
    <>
      <div className='btn-part'>
        <Btn className='btn-animation btn-sm' onClick={addToCart}>
          {t('MoveToCart')}
        </Btn>
      </div>
      <div className='remove-part' onClick={() => removeFromCompare(product)}>
        <a className='text-content remove_column'>
          <RiDeleteBinLine /> {t('Remove')}
        </a>
      </div>
    </>
  );
};

export default CompareAction;
