import { useContext, useMemo } from 'react';
import { LeafSVG } from '@/Components/Common/CommonSVG';
import WrapperComponent from '@/Components/Common/WrapperComponent';
import ProductIdsContext from '@/Helper/ProductIdsContext';
import CustomHeading from '@/Components/Common/CustomHeading';
import ProductBox from '@/Components/Common/ProductBox';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';

const RelatedProduct = ({ productState }) => {
  const { filteredProduct } = useContext(ProductIdsContext);
  const { themeOption } = useContext(ThemeOptionContext);
  const filterProduct = useMemo(() => {
    return filteredProduct?.filter((el) => productState?.product?.related_products?.includes(el.id));
  }, [filteredProduct, productState?.product?.related_products]);
  return (
    <WrapperComponent classes={{ sectionClass: 'product-list-section section-b-space pt-0' }} noRowCol={true}>
      {productState?.product?.related_products.length && (
        <>
          <CustomHeading title="YouMayAlsoLike" svgUrl={<LeafSVG className='icon-width' />} />
          <div className={`${themeOption?.product?.full_border ? "full_border" : ''} ${themeOption?.product?.image_bg ? "product_img_bg" : ''} ${themeOption?.product?.product_box_bg ? "full_bg" : ''} ${themeOption?.product?.product_box_border ? "product_border" : ''} `}>
            <div className="row g-sm-3 g-2">
              {filterProduct?.map((product, i) => (
                <div key={i} className='col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain'>
                  <ProductBox product={product} style="'horizontal'" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </WrapperComponent>
  );
};

export default RelatedProduct;
