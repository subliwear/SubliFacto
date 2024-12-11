import { Fragment, useState } from 'react';
import Image from 'next/image';
import Btn from '@/Elements/Buttons/Btn';
import { placeHolderImage } from '../../../../../Data/CommonPath';
// import ColorTooltip from './ColorTooltip';

const ImageOtherAttributes = ({ setVariant, productState, elem, soldOutAttributesIds }) => {
  const [tooltipOpen, setTooltipOpen] = useState("");
  const toggle = (target) => {
    setTooltipOpen((prevState) => ({[target]: !prevState[target]}));
    };
  return (
    <ul className={`select-package  ${elem?.style ?? ''}`}>
      {elem?.attribute_values?.map((item, index) => (
        <Fragment key={index}>
          {productState?.attributeValues?.includes(item?.id) && (
            <li className={`${productState?.variantIds?.includes(item?.id) && !soldOutAttributesIds.includes(item?.id) ? 'active' : ''} ${productState?.statusIds?.includes(item?.id) ?  "disabled"   :soldOutAttributesIds?.includes(item.id) ? 'disabled' : ''}`} title={item?.value}>
              {elem?.style == 'image' ? (
                <Image
                  id={item?.value}
                  src={item?.variation_image ? item?.variation_image?.original_url : placeHolderImage}
                  onClick={() => setVariant(productState?.product?.variations, item)}
                  height={65}
                  width={65}
                  alt='Product'
                />
              ) : (
                <Btn id={item?.value} onClick={() => setVariant(productState?.product?.variations, item)}>{item?.value}</Btn>
              )}
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default ImageOtherAttributes;
