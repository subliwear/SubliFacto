import { useMutation, useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Row } from "reactstrap";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";
import request from "../../Utils/AxiosUtils";
import { country, shipping } from "../../Utils/AxiosUtils/API";
import SuccessHandle from "../../Utils/CustomFunctions/SuccessHandle";
import { ToastNotification } from "../../Utils/CustomFunctions/ToastNotification";
import { YupObject, nameSchema } from "../../Utils/Validation/ValidationSchemas";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import { useRouter } from "next/navigation";

const FormShipping = ({ open, setActive, shippingData }) => {
  
  const { t } = useTranslation( 'common');
  const router = useRouter();
  const { refetch,data, isLoading:countryLoader } = useQuery([country], () => request({ url: country },router), {refetchOnWindowFocus: false, select: (res) => res.data.map((country) => ({ id: country.id, name: country.name })) });
 

  const { mutate, isLoading } = useMutation((data) => request({ url: shipping, data, method: "post" },router), {
    onSuccess: (resDta) => {
      SuccessHandle(resDta, false, false, t("ShippingCreatedSuccessFully"));
      setActive(false);
    },
    onError: () => ToastNotification("error"),
  });
  const countryData = data?.filter(country => !shippingData?.map(el => el.country.id).includes(country.id))
  return (
    <ShowModal title="CreateShipping" open={open} close={false}>
      <Formik
        enableReinitialize
        initialValues={{
          country_id: [],
          status: true,
        }}
        validationSchema={YupObject({
          status: nameSchema,
        })}
        onSubmit={(values) => {
          mutate({ ...values, status: Number(values.status) });
        }}>
        {() => (
          <Form>
            <Row>
              <SearchableSelectInput
                nameList={
                  [
                    {
                      name: 'country_id',
                      title: "Country",
                      inputprops: {
                        name: 'country_id',
                        id: 'country_id',
                        options: countryData,
                      },
                    },
                  ]} />
            
            </Row>
            <div className="ms-auto save-back-button">
              <div className="button-box">
                <Btn className="btn-outline" form="permission-form" title="Cancel" onClick={() => setActive(false)} />
                <Btn className="btn-primary" type="submit" title="Save" loading={Number(isLoading)} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </ShowModal>
  );
};

export default FormShipping;
