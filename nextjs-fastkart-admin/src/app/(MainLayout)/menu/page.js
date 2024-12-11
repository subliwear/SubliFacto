"use client";
import FrontMenuForm from "@/Components/FrontMenu/FrontMenuForm";
import MenuForm from "@/Components/FrontMenu/MenuForm";
import TableTitle from "@/Components/Table/TableTitle";
import { Menu } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiLockLine } from "react-icons/ri";
import { Card, CardBody, Col, Row } from "reactstrap";

const FrontMenuCreate = () => {
  const { t } = useTranslation("common");
  const [create] = usePermissionCheck(["create"]);
  const refRefetch = useRef();
  const [resetData, setResetData] = useState(false);
  const { mutate, isLoading } = useCreate(Menu, false, false, false, (resDta) => {
    if (resDta?.status == 200 || resDta?.status == 201) {
      refRefetch?.current?.call()
      setResetData(true)
    }
  });

  return <>
    <div className="card-spacing">
      <Row>
        <Col xl="4">
          <Card>
            <CardBody>
              <TableTitle moduleName="Menu" type={'product'} onlyTitle={true} />
              <FrontMenuForm  isLoading={isLoading} ref={refRefetch} />
            </CardBody>
          </Card>
        </Col>
        <Col xl="8">
          <Card className={create ? "" : "nopermission-parent"}>
            <CardBody>
              <div className="title-header option-title">
                <h5>{t("AddMenu")}</h5>
              </div>
              <MenuForm loading={isLoading} mutate={mutate} key={resetData}  />
            </CardBody>
            <div className="no-permission"><div><RiLockLine /><h3>{t("NoPermission")}</h3></div></div>
          </Card>
        </Col>
      </Row>
    </div>
  </>;
};

export default FrontMenuCreate;
