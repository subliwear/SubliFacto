import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import { AllCountryCode } from '../../../../Data/AllCountryCode';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Col, Input, Label, Row } from 'reactstrap';

const BillingAddressForm = ({ values,setFieldValue, errors, data }) => {
    const { t } = useTranslation('common');
    useEffect(() => {
        if (values.billing_address.same_shipping) {
          setFieldValue('billing_address', {
            ...values.billing_address,
            title: values.shipping_address.title,
            street: values.shipping_address.street,
            country_id: values.shipping_address.country_id,
            state_id: values.shipping_address.state_id,
            city: values.shipping_address.city,
            pincode: values.shipping_address.pincode,
            country_code: values.shipping_address.country_code,
            phone: values.shipping_address.phone,
          });
        } else {
          setFieldValue('billing_address', {
            ...values.billing_address,
            same_shipping: false,
            title: '',
            street: '',
            country_id: '',
            state_id: '',
            city: '',
            pincode: '',
            country_code: '',
            phone: '',
          });
        }
      }, [values.billing_address.same_shipping, setFieldValue]); // Only `initialValues.billing_address.same_shipping`
    
    return (
        <div className="checkbox-main-box">
            <div className="checkout-title1">
                <h2>{`Billing Details`}</h2>
            </div>
            <Row>
               
               {!errors.shipping_address &&
                <Col md={12}>
                    <div className='mb-3 form-box form-checkbox'> 
                        <Input className='checkbox_animated check-box' type='checkbox' name='billing_address.same_shipping' onChange={(e) => {setFieldValue('billing_address.same_shipping', e.target.checked);  }} checked={values.billing_address.same_shipping}/>
                        <Label className='form-check-label' htmlFor='flexCheckDefault'>
                            {t('Is the shipping address the same as your billing address?')}
                        </Label>
                    </div>
                </Col>
              }

                <SimpleInputField
                    nameList={[
                        { name: 'billing_address.title', placeholder: t('EnterTitle'), toplabel: 'Title', colprops: { xs: 12 }, require: 'true' },
                        { name: 'billing_address.street', placeholder: t('EnterAddress'), toplabel: 'Address', colprops: { xs: 12 }, require: 'true' },
                    ]}
                />
                <SearchableSelectInput
                    nameList={[
                        {
                            name: 'billing_address.country_id',
                            require: 'true',
                            title: 'Country',
                            toplabel: 'Country',
                            colprops: { xxl: 6, lg: 12, sm: 6 },
                            inputprops: {
                                name: 'billing_address.country_id',
                                id: 'billing_address.country_id',
                                options: data,
                                defaultOption: 'Select state',
                            },
                        },
                        {
                            name: 'billing_address.state_id',
                            require: 'true',
                            title: 'State',
                            toplabel: 'State',
                            colprops: { xxl: 6, lg: 12, sm: 6 },
                            inputprops: {
                                name: 'billing_address.state_id',
                                id: 'billing_address.state_id',
                                options: values?.shipping_address?.country_id ? data?.filter((country) => Number(country.id) === Number(values?.shipping_address?.country_id))?.[0]?.['state'] : [],
                                defaultOption: 'Select state',
                            },
                            disabled: values?.['country_id'] ? false : true,
                        },
                    ]}
                />
                <SimpleInputField
                    nameList={[
                        { name: 'billing_address.city', placeholder: t('EnterCity'), toplabel: 'City', colprops: { xxl: 6, lg: 12, sm: 6 }, require: 'true' },
                        { name: 'billing_address.pincode', placeholder: t('EnterPincode'), toplabel: 'Pincode', colprops: { xxl: 6, lg: 12, sm: 6 }, require: 'true' },
                    ]}
                />
                <div className='country-input'>
                    <SimpleInputField
                        nameList={[{ name: 'billing_address.phone', type: 'number', placeholder: t('EnterPhoneNumber'), require: 'true', toplabel: 'Phone', colprops: { xs: 12 }, colclass: 'country-input-box' }]}
                    />
                    <SearchableSelectInput
                        nameList={[
                            {
                                name: 'billing_address.country_code',
                                notitle: 'true',
                                inputprops: {
                                    name: 'billing_address.country_code',
                                    id: 'billing_address.country_code',
                                    options: AllCountryCode,
                                },
                            },
                        ]}
                    />
                </div>
            </Row>
        </div>
    );
};

export default BillingAddressForm;
