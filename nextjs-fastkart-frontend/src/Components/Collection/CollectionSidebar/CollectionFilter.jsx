import {useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useCustomSearchParams } from '@/Utils/Hooks/useCustomSearchParams';
import { useTranslation } from "react-i18next";
import { RiCloseLine } from 'react-icons/ri';

const CollectionFilter = ({ filter, setFilter }) => {
  const router = useRouter();
  const [layout] = useCustomSearchParams(['layout']);
  const { t } = useTranslation( 'common');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const pathname = usePathname();
  const splitFilter = (filterKey) => {
    return filter && filter[filterKey] ? filter[filterKey] : [];
  };
  const filterObj = {
    category: splitFilter('category'),
    attribute: splitFilter('attribute'),
    price: splitFilter('price'),
    rating: splitFilter('rating'),
    brand: splitFilter('brand'),
  };
  const mergeFilter = () => {
    setSelectedFilters([...filterObj['category'],...filterObj['brand'], ...filterObj['attribute'], ...filterObj['price'], ...filterObj['rating'].map((val) => (val.startsWith('rating ') ? val : `rating ${val}`))]);
  };
  useEffect(() => {
    mergeFilter();
  }, [filter]);

  const removeParams = (slugValue) => {
    Object.keys(filterObj).forEach((key) => {
      filterObj[key] = filterObj[key].filter((val) => {
        if (key === 'rating') {
          return val !== slugValue.replace(/^rating /, '');
        }
        return val !== slugValue;
      });
      mergeFilter();
      setFilter(filterObj);
      const params = {};
      Object.keys(filterObj).forEach((key) => {
        if (filterObj[key].length > 0) {
          params[key] = filterObj[key].join(',');
        }
      });
      const queryParams = new URLSearchParams({ ...params, ...layout }).toString();
      router.push(`${pathname}?${queryParams}`);
    });
  };
  const clearParams = () => {
    setSelectedFilters([]);
    setFilter({ category: [], attribute: [], price: [], rating: [] });
    router.push(pathname);
  };
  if (selectedFilters.length <= 0) return null;
  return (
    <div className='filter-category'>
      <div className='filter-title'>
        <h2>{t('Filters')}</h2>
        <a onClick={() => clearParams()}>{t('ClearAll')}</a>
      </div>
      <ul>
        {selectedFilters?.map((elem, i) => (
          <li key={i}>
            <a>{elem}</a>
            <span onClick={() => removeParams(elem)}>
              <RiCloseLine />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionFilter;
