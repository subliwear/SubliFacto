import { RiArrowDownLine } from 'react-icons/ri'
import { Col, Row } from 'reactstrap'
import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText'
import CheckBoxField from '../../InputFields/CheckBoxField'
import FileUploadField from '../../InputFields/FileUploadField'
import MultiSelectField from '../../InputFields/MultiSelectField'
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"

const LeftSidebarAccordion2 = ({ values, setFieldValue, setActive, active, categoryData }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <Row className='align-items-center'>
            <Col xs="10">
                <div className='shipping-accordion-custom'>
                    <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(2)}>{values['content']['main_content']['section2_categories_icon_list']['title'] || 'Text Here'}<RiArrowDownLine />
                    </div>
                    {active == 2 && (
                        <div className="rule-edit-form">
                            <SimpleInputField nameList={[
                                { name: `[content][main_content][section2_categories_icon_list][title]`, placeholder: t("EnterTitle"), title: "Title" },
                                { name: `[content][main_content][section2_categories_icon_list][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
                            ]} />
                            <MultiSelectField values={values} setFieldValue={setFieldValue} name='leftCategory2' title="Category" data={categoryData} />
                            <FileUploadField name="mainContentLeftCategoryImage" title='Image' id="mainContentLeftCategoryImage" showImage={values['mainContentLeftCategoryImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('157x157px')} />
                            <CheckBoxField name={`[content][main_content][section2_categories_icon_list][status]`} title="Status" />
                        </div>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default LeftSidebarAccordion2