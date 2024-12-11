import { RiArrowDownLine } from 'react-icons/ri'
import { Col, Row } from 'reactstrap'
import CheckBoxField from '../../InputFields/CheckBoxField'
import SearchableSelectInput from '../../InputFields/SearchableSelectInput'
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"

const LeftSidebarAccordion1 = ({ values, setActive, active, productData, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <Row className='align-items-center'>
            <Col xs="10">
                <div className='shipping-accordion-custom'>
                    <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(1)}>{values['content']['main_content']?.['section1_products']?.['title'] || 'Text Here'}<RiArrowDownLine />
                    </div>
                    {active == 1 && (
                        <div className="rule-edit-form">
                            <SimpleInputField nameList={[
                                { name: `[content][main_content][section1_products][title]`, placeholder: t("EnterTitle"), title: "Title" },
                                { name: `[content][main_content][section1_products][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
                            ]} />
                            <SearchableSelectInput
                                nameList={
                                    [{
                                        name: 'section1Products',
                                        title: "Products",
                                        inputprops: {
                                            name: 'section1Products',
                                            id: 'section1Products',
                                            options: productData || [],
                                            setsearch: setSearch,
                                        }
                                    },
                                    ]}
                            />
                            <CheckBoxField name={`[content][main_content][section1_products][status]`} title="Status" />
                        </div>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default LeftSidebarAccordion1