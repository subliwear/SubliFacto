import ShowModal from "@/Elements/Alerts&Modals/Modal";
import SettingContext from "@/Helper/SettingContext";
import { dateFormate } from "@/Utils/CustomFunctions/DateFormate";
import React, { useContext, useState, useEffect } from "react";
import Btn from "@/Elements/Buttons/Btn";
import { useTranslation } from "react-i18next";

import SimpleInputField from "@/Components/InputFields/SimpleInputField";
const ShippingNoteModal = ({ open, setOpen, data, note, setFieldValue, orderStatusUpdate, values, moduleName, orderStatusData, setOrderStatus, orderStatus, mutate, edit }) => {


    const { t } = useTranslation('common');
    const { settingObj } = useContext(SettingContext);


    const [openReceiptModal, setOpenReceiptModal] = useState(false);
    const submit = () => {
        setOpenReceiptModal(true)
        setFieldValue('order_status_id', data)
        mutate({
            _method: "put",
            order_status_id: 1,
            note: ""
        })
    }
    useEffect(() => {
        if (orderStatusUpdate?.status == 200 || orderStatusUpdate?.status == 201) {
            setOrderStatus(values['order_status_id'])
        }
    }, [orderStatusUpdate])
    return (
        <ShowModal
            open={open}
            setModal={setOpen}
            isClose={true}
            modalAttr={{ className: "theme-modal  invoice-modal" }}
            buttons={
                <div className="modal-btn-group d-flex align-items-center gap-2 justify-content-center">
                    <Btn className="btn-sm btn-animation theme-bg-color" onClick={() => { setOpen(false) }}>{t("Cancel")}</Btn>
                    <Btn className="btn-sm btn-outline" onClick={() => { submit() }}>{t("Submit")}</Btn>
                </div>
            }
        >
            <h5 class="modal-title text-center">{t('ShippingNote')}</h5>
            <div class="mb-4 mt-2">
                <SimpleInputField nameList={[{ name: "note", title: "StoreDescription", notitle: "true", type: "textarea", placeholder: t("EnterDescription(optional)"), require: "true" }]} />
            </div>
        </ShowModal>
    )
}

export default ShippingNoteModal;