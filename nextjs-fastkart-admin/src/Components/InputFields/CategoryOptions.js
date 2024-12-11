
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { RiArrowRightSLine } from "react-icons/ri";

const CategoryOptions = ({ data, showList, setShowList, setFieldValue, setPath, name, values, getValuesKey }) => {
  const { t } = useTranslation( 'common');
  const handleSelect = (item) => {
    if (Array.isArray(values[name])) {
      if (values[name].includes(item[getValuesKey])) {
        setFieldValue(name, values[name].includes(item[getValuesKey]) ? values[name].filter((elem) => elem !== item[getValuesKey]) : values[name])
      } else {
        if ('id' in item && 'value' in item && 'name' in item) {
          setFieldValue(name, [...values[name], item])
        }else{
           setFieldValue(name, [...values[name], item[getValuesKey]])
        }
      }
    } else {
      setFieldValue(name, item[getValuesKey] == values[name] ? undefined : item[getValuesKey]);
    }
  }
  return (
    <>
      {showList?.map((item, i) => (
        <li key={i}>
          {item?.image && <Image src={item.image} className="img-fluid category-image" alt={item.name} height={80} width={80}
          />}
          {item?.name || item?.title}
          <a className={`select-btn ${Array.isArray(values[name]) ? values[name]?.includes(item[getValuesKey]) ? "selected" : values[name]?.some( data => data?.id == item[getValuesKey]) ?"selected wow":""
            : item[getValuesKey] == values[name] ? "selected" : ""}`}
            onClick={() => handleSelect(item)}>
            {/* To show the Select text */}
            {Array.isArray(values[name]) ? values[name]?.includes(item[getValuesKey]) ? t("Selected") : values[name]?.some( data => data?.id == item[getValuesKey]) ?t("Selected"): t("Select")
              : item[getValuesKey] == values[name] ? t("Selected") : t("Select")}
          </a>
          {Boolean((item?.subcategories?.length) || (item?.child?.length)) && (
            <a
              className="right-arrow"
              onClick={() => { setShowList(item?.subcategories || item?.child); setPath((prev) => [...prev, item]) }}>
              <RiArrowRightSLine />
            </a>
          )}
        </li>
      ))}
    </>
  );
};

export default CategoryOptions;
