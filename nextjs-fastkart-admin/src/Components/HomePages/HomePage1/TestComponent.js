import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText'
import CheckBoxField from '../../InputFields/CheckBoxField'
import FileUploadField from '../../InputFields/FileUploadField'
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"

const TestComponent = ({ values, setFieldValue }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <p>test de test</p>
        </>
    )
}

export default TestComponent