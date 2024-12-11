import NoDataFound from "@/Components/Common/NoDataFound";
import Pagination from "@/Components/Common/Pagination";
import ProductBox from "@/Components/Common/ProductBox";
import ProductSkeletonComponent from "@/Components/Common/SkeletonLoader/ProductSkeleton/ProductSkeletonComponent";
import ThemeOptionContext from "@/Helper/ThemeOptionsContext";
import request from "@/Utils/AxiosUtils";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Col, Row } from "reactstrap";
import noProduct from "../../../../public/assets/svg/no-product.svg";

const CollectionProducts = ({ filter, grid }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { slug } = useParams();
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { data, fetchStatus } = useQuery(
    [page, filter],
    () =>
      request(
        {
          url: ProductAPI,
          params: {
            page,
            status: 1,
            paginate: 40,
            brand: slug ? slug : null,
          },
        },
        router
      ),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );
  return (
    <>
      {fetchStatus == "fetching" ? (
        <Row className={`g-sm-4 g-3 product-list-section ${grid == "list" ? "list-style" : grid == 4 ? "row-cols-xl-4" : grid == 5 ? "row-cols-xl-4 row-cols-xxl-5" : ""}`} xs={2} md={3}>
          <ProductSkeletonComponent item={40} />
        </Row>
      ) : data?.data?.length > 0 ? (
        <div className={`${themeOption?.product?.full_border ? "full_border" : ""} ${themeOption?.product?.image_bg ? "product_img_bg" : ""} ${themeOption?.product?.product_box_bg ? "full_bg" : ""} ${themeOption?.product?.product_box_border ? "product_border" : ""} `}>
          <Row className={`g-sm-4 g-3 product-list-section ${grid == "list" ? "list-style" : grid == 4 ? "row-cols-xl-4" : grid == 5 ? "row-cols-xl-4 row-cols-xxl-5" : ""}`} xs={2} md={3}>
            {data?.data?.map((product, i) => (
              <Col key={i}>
                <ProductBox product={product} className="boxClass" style="'horizontal'" />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        // row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5
        // row row-cols-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5
        <NoDataFound
          data={{
            imageUrl: noProduct,
            customClass: "no-data-added collection-no-data",
            title: "Sorry! Couldn't find the products you were looking For!",
            description: "Please check if you have misspelt something or try searching with other way.",
            height: 345,
            width: 345,
          }}
        />
      )}

      {data?.data?.length > 0 && (
        <nav className="custome-pagination">
          <Pagination current_page={data?.current_page} total={data?.total} per_page={data?.per_page} setPage={setPage} />
        </nav>
      )}
    </>
  );
};

export default CollectionProducts;
