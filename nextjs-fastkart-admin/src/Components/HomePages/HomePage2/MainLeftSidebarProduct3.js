import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from 'react-icons/ri';
import { Col, Row } from 'reactstrap';
import CheckBoxField from '../../InputFields/CheckBoxField';
import SearchableSelectInput from '../../InputFields/SearchableSelectInput';
import SimpleInputField from '../../InputFields/SimpleInputField';


const MainLeftSidebarProduct3 = ({ values, setActive, active, productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <Row className='align-items-center'>
            <Col xs="10">
                <div className='shipping-accordion-custom'>
                    <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(4)}>{values?.['content']?.['main_content']?.['section4_products']?.['title'] || "Text Here"}<RiArrowDownLine />
                    </div>
                    {active == 4 && (
                        <div className="rule-edit-form">
                            <SimpleInputField nameList={[
                                { name: `[content][main_content][section4_products][title]`, placeholder: t("EnterTitle"), title: "Title" }
                            ]} />
                            <SearchableSelectInput
                                nameList={
                                    [{
                                        name: 'mainContentSection4ProductIds',
                                        title: "Products",
                                        inputprops: {
                                            name: 'mainContentSection4ProductIds',
                                            id: 'mainContentSection4ProductIds',
                                            options: productData || [],
                                            setsearch: setSearch,
                                        }
                                    },
                                    ]}
                            />
                            <CheckBoxField name={`[content][main_content][section4_products][status]`} title="Status" />
                        </div>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default MainLeftSidebarProduct3