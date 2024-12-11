

import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from "react-icons/ri";
import SimpleInputField from '../../InputFields/SimpleInputField';
import CheckBoxField from '../../InputFields/CheckBoxField';
import SearchableSelectInput from "../../InputFields/SearchableSelectInput";

const SliderProduct1 = ({ setActive, active, values, productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <div className='shipping-accordion-custom'>
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(1)}>{values['content']?.['slider_products']?.['product_slider_1']?.['title'] || "Text Here"}<RiArrowDownLine /></div>
                {active == 1 && (
                    <>
                        <div className="rule-edit-form">
                            <SimpleInputField nameList={[{ name: "[content][slider_products][product_slider_1][title]", placeholder: t("EnterTitle"), title: "Title" }
                            ]} />
                            <SearchableSelectInput
                                nameList={
                                    [{
                                        name: 'sliderProduct1',
                                        title: "Products",
                                        inputprops: {
                                            name: 'sliderProduct1',
                                            id: 'sliderProduct1',
                                            options: productData || [],
                                            setsearch: setSearch,
                                        }
                                    },
                                    ]}
                            />
                            <CheckBoxField name="[content][slider_products][product_slider_1][status]" title="Status" />
                        </div>
                    </>
                )}
            </div>
            <div className='shipping-accordion-custom'>
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(2)}>{values['content']?.['slider_products']?.['product_slider_2']?.['title'] || "Text Here"}<RiArrowDownLine /></div>
                {active == 2 && (
                    <>
                        <div className="rule-edit-form">
                            <SimpleInputField nameList={[{ name: "[content][slider_products][product_slider_2][title]", placeholder: t("EnterTitle"), title: "Title" }
                            ]} />
                            <SearchableSelectInput
                                nameList={
                                    [{
                                        name: 'sliderProduct2',
                                        title: "Products",
                                        inputprops: {
                                            name: 'sliderProduct2',
                                            id: 'sliderProduct2',
                                            options: productData || [],
                                            setsearch: setSearch,
                                        }
                                    },
                                    ]}
                            />
                            <CheckBoxField name="[content][slider_products][product_slider_2][status]" title="Status" />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default SliderProduct1