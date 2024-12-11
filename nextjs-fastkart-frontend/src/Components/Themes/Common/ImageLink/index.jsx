import { useContext } from 'react';
import Link from 'next/link';
import RatioImage from '@/Utils/RatioImage';
import ProductIdsContext from '@/Helper/ProductIdsContext';
import Image from 'next/image';
import LiveImagePath  from '@/Utils/Constants';


const ImageLink = ({ classes = {}, imgUrl, ratioImage, customRatioClass = '', link, height , width}) => {
  const { filteredProduct } = useContext(ProductIdsContext);
  const redirectToProduct = (productId) => {
    const product = filteredProduct.find((elem) => elem?.id == productId);
    return 'product/' + product?.slug;
  };

  return (
    <div className={`${classes?.customClass ? classes?.customClass : ''}`}>
      {link?.redirect_link?.link_type === 'external_url' ? (
        <Link href={link?.redirect_link?.link || '/'} target='_blank'>
          <div className={`${classes?.customHoverClass ? classes?.customHoverClass : 'home-contain hover-effect'}`}>
         
            {ratioImage ? <RatioImage src={`${LiveImagePath}${imgUrl}`} className={`bg-img ${customRatioClass}`} alt='banner' /> : imgUrl && <Image src={`${LiveImagePath}${imgUrl}`} className={`img-fluid ${customRatioClass}`} alt='banner' height={height} width={width}/>}
          </div>
        </Link>
      ) : link?.redirect_link?.link_type === 'collection' ? (
        <Link href={`/category/${link?.redirect_link?.link}` || '/'}>
          <div className={`${classes?.customHoverClass ? classes?.customHoverClass : 'home-contain hover-effect'}`}>
            {ratioImage ? <RatioImage src={`${LiveImagePath}${imgUrl}`} className={`bg-img ${customRatioClass}`} alt='banner' /> : imgUrl &&  <Image src={`${LiveImagePath}${imgUrl}`} className={`img-fluid ${customRatioClass}`} alt='banner' height={height} width={width}/>}
          </div>
        </Link>
      ) : link?.redirect_link?.link_type === 'product' ? (
        <Link href={`/${redirectToProduct(link?.redirect_link?.link)}` || '/'}>
          <div className={`${classes?.customHoverClass ? classes?.customHoverClass : 'home-contain hover-effect'}`}>
            {ratioImage ? <RatioImage src={`${LiveImagePath}${imgUrl}`} className={`bg-img ${customRatioClass}`} alt='banner' /> : imgUrl &&  <Image src={`${LiveImagePath}${imgUrl}`} className={`img-fluid ${customRatioClass}`} alt='banner' height={height} width={width}/>}
          </div>
        </Link>
      ) : (
        <div className={`${classes?.customHoverClass ? classes?.customHoverClass : 'home-contain hover-effect'}`} >
          {ratioImage ? <RatioImage src={`${LiveImagePath}${imgUrl}`} className={`bg-img ${customRatioClass}`} alt='banner'/> : imgUrl &&  <Image src={`${LiveImagePath}${imgUrl}`} className={`img-fluid ${customRatioClass}`} alt='banner'  height={height} width={width}/>}
        </div>
      )}
    </div>
  );
};

export default ImageLink;
