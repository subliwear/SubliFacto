import { Col } from 'reactstrap';
import StoreVendor from './StoreVendor';
import StoreName from './StoreName';
import SKStore from '@/Components/Common/SkeletonLoader/SellerSkeleton';
import Pagination from '@/Components/Common/Pagination';

import { useContext } from 'react';
import { useTranslation } from "react-i18next";

const ClassicStoreCard = ({ data, isLoading, setPage }) => {
  
  const { t } = useTranslation( 'common');
  const SkeletonItems = Array.from({ length: 15 }, (_, index) => index);
  return (
    <>
      {isLoading
        ? SkeletonItems?.map((elem, i) => (
            <Col xxl={4} md={6} key={i}>
              <SKStore />
            </Col>
          ))
        : data?.data.length > 0 && (
            <>
              {data?.data.map((elem, i) => (
                <Col xxl={4} md={6} key={i}>
                  <div className='seller-grid-box'>
                    <div className='grid-contain'>
                      <StoreVendor elem={elem} />
                      <StoreName classicImage={true} elem={elem} />
                    </div>
                  </div>
                </Col>
              ))}
              <nav className='custome-pagination'>
                <Pagination current_page={data?.current_page} total={data?.total} per_page={data?.per_page} setPage={setPage} />
              </nav>
            </>
          )}
    </>
  );
};

export default ClassicStoreCard;
