'use client'
import useUpdate from "@/Utils/Hooks/useUpdate";
import { blog, tag } from "@/Utils/AxiosUtils/API";
import TagForm from "@/Components/Tag/TagForm";
import FormWrapper from "@/Utils/HOC/FormWrapper";

const BlogTagUpdate = ({ params }) => {
  const { mutate, isLoading } = useUpdate(tag, params?.updateId, `${blog}${tag}`);
  return (
    params?.updateId && (
      <FormWrapper title="EditTag">
        <TagForm mutate={mutate} updateId={params?.updateId} loading={isLoading} type={"post"}  buttonName="Update"/>
      </FormWrapper>
    )
  );
};

export default BlogTagUpdate;
