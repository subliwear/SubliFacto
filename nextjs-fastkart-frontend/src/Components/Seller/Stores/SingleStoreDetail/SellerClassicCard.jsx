import Link from 'next/link';
import { Col, Row } from 'reactstrap';
import StoreImage from '../StoreImage';
import SellerSocialCard from './SellerSocialCard';


import { useTranslation } from "react-i18next";
import ProductRating from '@/Components/Common/ProductBox/Widgets/ProductRating';
const SellerClassicCard = ({ StoreData }) => {
  const { t } = useTranslation( 'common');
  return (
    <div className='vendor-detail-box-2'>
      <Row className='g-4'>
        <Col xxl={2} md={3}>
          <div className='vendor-logo'>
            <StoreImage customClass={'img-fluid'} elem={StoreData} height={140} width={142} />
          </div>
        </Col>
        <Col xxl={8} md={6}>
          <div className='vendor-name p-center-left'>
            <div>
              <div className='vendor-list-name'>
                <h3>{StoreData?.store_name}</h3>
                <div className='product-rating vendor-rating'>
                  <ProductRating totalRating={StoreData?.rating_count || 0} />
                  <h6 className='ms-2'>({StoreData?.reviews_count} Reviews)</h6>
                </div>
              </div>
              <p>{StoreData?.description}</p>
            </div>
          </div>
        </Col>
        <Col xxl={2} md={3}>
          <div className='share-contact'>
            <div>
              <SellerSocialCard StoreData={StoreData} />
              <div className='vendor-contect'>
                <h5>{t('IfYouAnyQuery')}?</h5>
                <Link href={`/contact-us`} className='btn btn-sm btn-animation'>
                  {t('ContactUS')}
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SellerClassicCard;
