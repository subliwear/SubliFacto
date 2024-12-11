import React, { useContext } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import CustomHeading from '@/Components/Common/CustomHeading';
import Avatar from '@/Components/Common/Avatar';
import { placeHolderImage } from '../../../../../Data/CommonPath';
import CategoryContext from '@/Helper/CategoryContext';
import { useTranslation } from "react-i18next";

import NoDataFound from '@/Components/Common/NoDataFound';

const CategoryData = ({ dataAPI, isHeadingVisible = false, classes = {}, svgUrl }) => {
  const { filterCategory } = useContext(CategoryContext);

  const { t } = useTranslation('common');
  const categoryData = filterCategory('product');
  return (
    <>
      {isHeadingVisible ? <CustomHeading customClass={classes?.noCustomClass ? '' : 'section-t-space title'} title={dataAPI?.title} svgUrl={svgUrl} subTitle={dataAPI?.description} /> : ''}

      {categoryData?.length > 0 ? (
        <div className='category-slider-2 category-slider product-wrapper no-arrow'>
          <Slider {...classes?.sliderOption}>
            {categoryData?.map((elem,i) => (
              <div key={i}>
                <Link href={`/collections?category=${elem?.slug}`} className={`category-box ${classes?.link} category-dark`}>
                  <div>
                    <Avatar data={elem?.category_icon} placeHolder={placeHolderImage} name={elem.name} />
                    <h5>{elem.name}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <NoDataFound
          data={{
            customClass: 'bg-light no-data-added',
            title: 'No Category Found',
          }}
        />
      )}
    </>
  );
};

export default CategoryData;
