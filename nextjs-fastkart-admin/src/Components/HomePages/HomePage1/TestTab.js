import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText';
import CheckBoxField from '../../InputFields/CheckBoxField';
import FileUploadField from '../../InputFields/FileUploadField';
import SimpleInputField from '../../InputFields/SimpleInputField';
import { useTranslation } from "react-i18next";

const TestTab = ({ values, setFieldValue }) => {
    const { t } = useTranslation('common');
    
    return (
        <>
            <SimpleInputField 
                nameList={[
                    { name: "[content][test_tab][title]", placeholder: t("EnterTitle"), title: "Title" },
                    { name: "[content][test_tab][description]", placeholder: t("EnterDescription"), title: "Description" }
                ]} 
            />
            <FileUploadField 
                name="testTabImage" 
                title='Image' 
                id="testTabImage" 
                showImage={values['testTabImage']} 
                type="file" 
                values={values} 
                setFieldValue={setFieldValue} 
                helpertext={getHelperText('800x600px')} 
            />
            <CheckBoxField name="[content][test_tab][status]" title="Status" />
        </>
    );
};

export default TestTab;
