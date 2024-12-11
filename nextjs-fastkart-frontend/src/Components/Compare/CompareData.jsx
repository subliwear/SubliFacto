import { useContext, useEffect } from 'react';
import { Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
import { CompareAPI } from '@/Utils/AxiosUtils/API';
import useDelete from '@/Utils/Hooks/useDelete';
import CompareAction from './CompareAction';
import CompareWrapper from './CompareWrapper';
import CompareContext from '@/Helper/CompareContext';
import NoDataFound from '../Common/NoDataFound';
import emptyImage from '../../../public/assets/svg/no-category.svg';
import { ModifyString } from '@/Utils/CustomFunctions/ModifyString';
import SettingContext from '@/Helper/SettingContext';
import ProductRating from '../Common/ProductBox/Widgets/ProductRating';

const CompareData = () => {
  const { compareState, refetch } = useContext(CompareContext);
  const { convertCurrency } = useContext(SettingContext);
  const { data, mutate: compareMutate, isLoading: compareLoading } = useDelete(CompareAPI, `/compare`);
  useEffect(() => {
    if (data?.status == 200 || data?.status == 201) {
      refetch();
    }
  }, [compareLoading]);
  return (
    <>
      {compareState?.length > 0 ? (
        compareState?.map((product, i) => (
          <Col key={i}>
            <div className='compare-part'>
              <div className='img-section'>
                <div>
                 {product.product_thumbnail.original_url && <Image src={product.product_thumbnail ? product.product_thumbnail.original_url : placeHolderImage} className='img-fluid' alt={product.name} height={130} width={130} />}
                </div>
                <Link href={`/product/${product?.slug}`}>
                  <h5 className='text-title'>{product?.name}</h5>
                </Link>
              </div>
              <CompareWrapper data={{ title: 'Discount', value: product?.discount ? product?.discount : '-' }} />
              <CompareWrapper data={{ title: 'Price', value: convertCurrency(product?.sale_price) }} />
              <CompareWrapper data={{ title: 'Availability', value: ModifyString(product?.stock_status) }} />
              <CompareWrapper data={{ title: 'Rating' }}>
                <div className='compare-rating'>
                  <ProductRating totalRating={product?.rating_count || 0} />
                  <span className='text-content rating-text'>{`(${product?.rating_count?.toFixed(2) || 0} Rating)`}</span>
                </div>
              </CompareWrapper>
              <CompareWrapper data={{ title: 'Weight', value: product?.weight ? product?.weight : '-' }} />
              <CompareAction product={product} compareMutate={compareMutate} />
            </div>
          </Col>
        ))
      ) : (
        <NoDataFound
          data={{
            customClass: 'no-data-added',
            imageUrl: emptyImage,
            title: 'NoItemsAdded',
            description: 'NoItemsAddedDescription',
            height: 50,
            width: 50,
          }}
        />
      )}
    </>
  );
};

export default CompareData;
