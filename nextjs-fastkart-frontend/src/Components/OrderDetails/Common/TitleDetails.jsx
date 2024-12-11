import {  useState } from 'react';
import Link from 'next/link';
import { RiDownload2Fill} from 'react-icons/ri';
import { useTranslation } from "react-i18next";
import request from '@/Utils/AxiosUtils';
import { OrderInvoiceAPI } from '@/Utils/AxiosUtils/API';

const TitleDetails = ({ params, data }) => {
  const { t } = useTranslation( 'common');

  return (
    <>
      <div className='title-header'>
        <div className='d-flex align-items-center flex-wrap gap-2'>
          <h5>{`${t('OrderNumber')}: #${params}`}</h5>
          {/* <div className='right-option'>
            {data?.invoice_url && data?.payment_status && data?.payment_status === 'COMPLETED' && (
              <div  onClick={downloadInvoice} className='btn btn-md fw-bold text-light theme-bg-color ms-auto'>
                {t('Invoice')} <RiDownload2Fill className='ms-2' />
              </div>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TitleDetails;
