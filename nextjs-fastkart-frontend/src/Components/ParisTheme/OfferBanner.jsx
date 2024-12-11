import { useContext } from 'react';
import Link from 'next/link';
import RatioImage from '@/Utils/RatioImage';
import ProductIdsContext from '@/Helper/ProductIdsContext';
import LiveImagePath from '@/Utils/Constants';


const OfferBanner = ({ classes = {}, imgUrl, ratioImage, customRatioClass = '', elem }) => {
  
  const { filteredProduct } = useContext(ProductIdsContext);
  const redirectToProduct = (productId) => {
    const product = filteredProduct.find((elem) => elem?.id == productId);
    return 'product/' + product?.slug;
  };
  return (
    <div className={`${classes?.customClass ? classes?.customClass : ''}`}>
      {elem?.redirect_link?.link_type === 'external_url' ? (
        <Link href={elem?.redirect_link?.link || '/'} target='_blank'>
          <div className={`${classes?.customHoverClass ? classes?.customHoverClass : 'home-contain hover-effect'}`}>
            {ratioImage ? <RatioImage src={`${LiveImagePath}${imgUrl}`} className={`bg-img ${customRatioClass}`} alt='banner' /> : <img src={`${LiveImagePath}${imgUrl}`} className={`img-fluid ${customRatioClass}`} alt='banner' />}
          </div>
        </Link>
      ) : elem?.redirect_link?.link_type === 'collection' ? (
        <Link href={`/collections?category=${elem?.redirect_link?.link}` || '/'}>
          <div className={`${classes?.customHoverClass ? classes?.customHoverClass : 'home-contain hover-effect'}`}>
            {ratioImage ? <RatioImage src={`${LiveImagePath}${imgUrl}`} className={`bg-img ${customRatioClass}`} alt='banner' /> : <img src={`${LiveImagePath}${imgUrl}`} className={`img-fluid ${customRatioClass}`} alt='banner' />}
          </div>
        </Link>
      ) : elem?.redirect_link?.link_type === 'product' ? (
        <Link href={`/${redirectToProduct(elem?.redirect_link?.link)}` || '/'}>
          <div className={`${classes?.customHoverClass ? classes?.customHoverClass : 'home-contain hover-effect'}`}>
            {ratioImage ? <RatioImage src={`${LiveImagePath}${imgUrl}`} className={`bg-img ${customRatioClass}`} alt='banner' /> : <img src={`${LiveImagePath}${imgUrl}`} className={`img-fluid ${customRatioClass}`} alt='banner' />}
          </div>
        </Link>
      ) : (
        <div className={`${classes?.customHoverClass ? classes?.customHoverClass : 'home-contain hover-effect'}`}>
          {ratioImage ? <RatioImage src={`${LiveImagePath}${imgUrl}`} className={`bg-img ${customRatioClass}`} alt='banner' /> : <img src={`${LiveImagePath}${imgUrl}`} className={`img-fluid ${customRatioClass}`} alt='banner' />}
        </div>
      )}
    </div>
  );
};

export default OfferBanner;
