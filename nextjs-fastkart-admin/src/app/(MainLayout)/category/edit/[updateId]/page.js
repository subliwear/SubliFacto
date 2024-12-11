"use client";
import { useRouter } from "next/router";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import dynamic from "next/dynamic";
import { Category, CategoryExportAPI, CategoryImportAPI } from "@/Utils/AxiosUtils/API";
import CategoryForm from "@/Components/category/CategoryForm";
import TreeForm from "@/Components/category/TreeForm";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import useCreate from "@/Utils/Hooks/useCreate";
import TittleWithDropDown from "@/Components/Common/TittleWithDropDown";

const CategoryUpdate = ({params}) => {
  const TableTitle = dynamic(() => import("@/Components/Table/TableTitle"), {
    ssr: false,
  });
  const [edit] = usePermissionCheck(["edit"]);
  const { mutate, isLoading } = useCreate(`${Category}/${params?.updateId}`, false, "/category", false);
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col xl="4">
            <Card>
              <CardBody>
                <TittleWithDropDown pathName="/category" moduleName="Category"   importExport={{ importUrl: CategoryImportAPI, exportUrl: CategoryExportAPI}} />
                <TreeForm type={'product'} isLoading={isLoading} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="8">
            <Card>
              {edit ? <CardBody>
                <TableTitle moduleName="Edit Category" onlyTitle={true} />
                {params?.updateId && (
                  <CategoryForm mutate={mutate} updateId={params?.updateId} loading={isLoading} type={'product'} buttonName="Update" />
                )}
              </CardBody>
                :
                <h1>No Permission</h1>}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryUpdate;