'use client'
import { PagesAPI } from '@/Utils/AxiosUtils/API';
import useUpdate from '@/Utils/Hooks/useUpdate';
import PageForm from '@/Components/Pages/PageForm';
import FormWrapper from '@/Utils/HOC/FormWrapper';

const UpdatePage = ({ params }) => {
    const { mutate, isLoading } = useUpdate(PagesAPI, params?.updateId, PagesAPI);
    return (
        params?.updateId && (
            <FormWrapper title="UpdatePage">
                <PageForm mutate={mutate} loading={isLoading} updateId={params?.updateId}  buttonName="Update"/>
            </FormWrapper>
        )
    )
}

export default UpdatePage