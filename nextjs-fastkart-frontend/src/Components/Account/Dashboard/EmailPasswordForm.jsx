import { useContext } from 'react';
import { Col, ModalFooter, Row } from 'reactstrap';
import SearchableSelectInput from '@/Components/Common/InputFields/SearchableSelectInput';
import SimpleInputField from '@/Components/Common/InputFields/SimpleInputField';
import { AllCountryCode } from '../../../../Data/AllCountryCode';
import Btn from '@/Elements/Buttons/Btn';

import { useTranslation } from "react-i18next";
const EmailPasswordForm = ({ isLoading, setModal }) => {
  const { t } = useTranslation( 'common');
  return (
    <Row>
      <SimpleInputField
        nameList={[
          { name: 'name', placeholder: t('EnterName'), toplabel: 'Name', colprops: { xs: 12 }, require: 'true' },
          { name: 'email', placeholder: t('EnterEmailAddress'), toplabel: 'Email', disabled: true, colprops: { xs: 12 }, require: 'true' },
        ]}
      />
      <div className='country-input'>
        <SimpleInputField nameList={[{ name: 'phone', type: 'number', placeholder: t('EnterPhoneNumber'), require: 'true', toplabel: 'Phone', colprops: { xs: 12 }, colclass: 'country-input-box' }]} />
        <SearchableSelectInput
          nameList={[
            {
              name: 'country_code',
              notitle: 'true',
              inputprops: {
                name: 'country_code',
                id: 'country_code',
                options: AllCountryCode,
              },
            },
          ]}
        />
      </div>
      <Col xs={12}>
        <ModalFooter className='ms-auto justify-content-end save-back-button pt-0'>
          <Btn className='btn btn-md btn-theme-outline fw-bold' title='Cancel' onClick={() => setModal(false)} />
          <Btn className='btn-md fw-bold text-light theme-bg-color' type='submit' title='Submit' loading={Number(isLoading)} />
        </ModalFooter>
      </Col>
    </Row>
  );
};

export default EmailPasswordForm;
