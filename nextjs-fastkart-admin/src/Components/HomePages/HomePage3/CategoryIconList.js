import FileUploadField from "../../InputFields/FileUploadField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import SimpleInputField from "../../InputFields/SimpleInputField";
import { getHelperText } from "../../../Utils/CustomFunctions/getHelperText";
import MultiSelectField from "../../InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";

const CategoryIconList = ({ values, setFieldValue, isTitleDescription, helpertext, categoryData }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            {isTitleDescription && <SimpleInputField nameList={[
                { name: `[content][categories_icon_list][title]`, placeholder: t("EnterTitle"), title: "Title" },
                { name: `[content][categories_icon_list][description]`, placeholder: t("EnterDescription"), title: "Description" }
            ]} />}
            <FileUploadField name="categoriesIconImage" title='Image' id="categoriesIconImage" showImage={values['categoriesIconImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText(helpertext || '153x157px')} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name="categoryIconList" data={categoryData} title="Categories" />
            <CheckBoxField name={`[content][categories_icon_list][status]`} title="Status" />
        </>
    )
}
export default CategoryIconList