import { useContext, useState } from "react";
import TextLimit from "@/Utils/CustomFunctions/TextLimit";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Row } from "reactstrap";
import CustomerReview from "../CustomerReview";
import QnATab from "../QnATab";

import { useTranslation } from "react-i18next";
import NoDataFound from "@/Components/Common/NoDataFound";

const ProductDetailAccordion = ({ productState }) => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <Accordion
      open={open}
      toggle={toggle}
      className="accordion-box product-section-box mt-3 "
    >
      <AccordionItem>
        <AccordionHeader targetId="1">{t("Description")}</AccordionHeader>
        <AccordionBody accordionId="1">
          {/* <TextLimit value={productState?.product?.description} /> */}
        </AccordionBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader targetId="2">{t("Review")}</AccordionHeader>
        <AccordionBody accordionId="2">
          <div className="review-box">
            <Row className="g-4">
              {productState?.product?.can_review ||
                productState?.product?.reviews_count ? (
                <CustomerReview productState={productState} />
              ) : (
                <Col xl={12}>
                  <NoDataFound
                    data={{
                      customClass: "no-data-added",
                      title: "NoReviewYet",
                      description: "NoReviewYetDescription",
                    }}
                  />
                </Col>
              )}
            </Row>
          </div>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="3">Q & A</AccordionHeader>
        <AccordionBody accordionId="3">
          <QnATab productState={productState} />
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductDetailAccordion;
