
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import { useContext } from 'react';
import { RiFacebookFill, RiInstagramFill, RiInstagramLine, RiPinterestLine, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';

const SellerSocialCard = ({ StoreData }) => {

  const { t } = useTranslation('common');
  return (
    <div className='vendor-share'>
      <h5>{t('FollowUs')} :</h5>
      <ul>
        {StoreData?.facebook && (
          <li>
            <Link href={String(StoreData?.facebook)} target='_blank'>
              <RiFacebookFill />
            </Link>
          </li>
        )}
        {StoreData?.twitter && (
          <li>
            <Link href={String(StoreData?.twitter)} target='_blank'>
              <RiTwitterFill />
            </Link>
          </li>
        )}
        {StoreData?.instagram && (
          <li>
            <Link href={String(StoreData?.instagram)} target='_blank'>
              <RiInstagramFill />
            </Link>
          </li>
        )}
        {StoreData?.youtube && (
          <li>
            <Link href={String(StoreData?.youtube)} target='_blank'>
              <RiYoutubeFill />
            </Link>
          </li>
        )}
        {StoreData?.pinterest && (
          <li>
            <Link href={String(StoreData?.pinterest)} target='_blank'>
              <RiPinterestLine />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SellerSocialCard;
