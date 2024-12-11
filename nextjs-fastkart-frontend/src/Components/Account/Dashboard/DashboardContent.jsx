import AccountHeading from '@/Components/Common/AccountHeading';
import AccountContext from '@/Helper/AccountContext';
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import coinSvg from '../../../../public/assets/images/svg/coin.svg';
import orderSvg from '../../../../public/assets/images/svg/order.svg';
import wallerSvg from '../../../../public/assets/images/svg/wallet.svg';
import ProfileInformation from './ProfileInformation';
import SettingContext from '@/Helper/SettingContext';

const DashboardContent = () => {
  const { t } = useTranslation('common');
  const { accountData } = useContext(AccountContext);
  const { convertCurrency } = useContext(SettingContext);

  return (
    <div className='dashboard-home'>
      <AccountHeading title="MyDashboard" />
      <div className='dashboard-user-name'>
        <h6 className='text-content'>
          {t('Hello')}, <b className='text-title'>{accountData?.name ?? t('User')}</b>
        </h6>
        <p className='text-content'>{t("DashboardDescription")}</p>
      </div>

      <div className='total-box'>
        <Row className='g-sm-4 g-3'>
          <Col xxl={4} lg={6} md={4} sm={6}>
            <div className='total-contain'>
              {wallerSvg && <Image src={wallerSvg} className='img-1' alt='wallerSvg' height={90} width={90} />}
              {wallerSvg && <Image src={wallerSvg} alt='wallerSvg' height={60} width={60} />}
              <div className='total-detail'>
                <h5>{t('Balance')}</h5>
                <h3>{accountData?.wallet ? convertCurrency(accountData?.wallet?.balance) : 0 ?.toFixed(2)}</h3>
              </div>
            </div>
          </Col>

          <Col xxl={4} lg={6} md={4} sm={6}>
            <div className='total-contain'>
              {coinSvg && <Image src={coinSvg} className='img-1 ' alt='coinSvg' height={90} width={90} />}
              {coinSvg && <Image src={coinSvg} className='' alt='coinSvg' height={60} width={60} />}
              <div className='total-detail'>
                <h5>Total Coins</h5>
                <h3>{Number(accountData?.point ? accountData?.point?.balance : 0)?.toFixed(2)}</h3>
              </div>
            </div>
          </Col>

          <Col xxl={4} lg={6} md={4} sm={6}>
            <div className='total-contain'>
              {orderSvg && <Image src={orderSvg} className='img-1 ' alt='orderSvg' height={90} width={90} />}
              {orderSvg && <Image src={orderSvg} className='' alt='orderSvg' height={60} width={60} />}
              <div className='total-detail'>
                <h5>{t("TotalOrders")}</h5>
                <h3>{Number(accountData?.orders_count)}</h3>
              </div>
            </div>
          </Col>
          <ProfileInformation />
        </Row>
      </div>
    </div>
  );
};

export default DashboardContent;
