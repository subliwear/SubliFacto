"use client";
import WrapperComponent from "@/Components/Common/WrapperComponent";
import BrandData from "@/Components/Themes/Common/BrandData/index";
import ParisBanner from "@/Components/Themes/Common/HomeBanner/ParisBanner";
import NewsLetter from "@/Components/Themes/Common/Newsletter";
import SliderBanner from "@/Components/Themes/Common/SliderBanner/index";
import BlogIdsContext from "@/Helper/BlogIdsContext";
import BrandIdsContext from "@/Helper/BrandIdsContext";
import ProductIdsContext from "@/Helper/ProductIdsContext";
import SellerContext from "@/Helper/SellerContext";
import ThemeOptionContext from "@/Helper/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import StickyCart from "@/Layout/StickyCart";
import request from "@/Utils/AxiosUtils";
import { HomePageAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import LeftSection from "./Common/LeftSection";
import RightSection from "./Common/RightSection";

const ParisTheme = () => {
  const router = useRouter();
  const { setGetProductIds, isLoading: productLoader } = useContext(ProductIdsContext);
  const { setGetBrandIds, brandIdsLoader } = useContext(BrandIdsContext);
  const { setGetBlogIds, blogIdsLoader } = useContext(BlogIdsContext);
  const { isLoading: sellerContextLoader } = useContext(SellerContext);
  const { themeOption } = useContext(ThemeOptionContext);

  const { data, isLoading, refetch } = useQuery(["paris"], () => request({ url: HomePageAPI, params: { slug: "paris" } }, router), { enabled: false, refetchOnWindowFocus: false, select: (res) => res?.data });
  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  useEffect(() => {
    if (data?.content?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.content?.products_ids))?.join(","),paginate:data?.content?.products_ids.length });
    }
    if (data?.content?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.content?.brands?.brand_ids))?.join(",") });
    }
    if (data?.content?.main_content?.section9_featured_blogs?.blog_ids?.length > 0) {
      setGetBlogIds({ ids: Array.from(new Set(data?.content?.main_content?.section9_featured_blogs?.blog_ids))?.join(",") });
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      if ((data?.content?.products_ids?.length > 0  && productLoader) || (data?.content?.main_content?.section9_featured_blogs?.status && data?.content?.main_content?.section9_featured_blogs?.blog_ids?.length >0 && blogIdsLoader) || ( data?.content?.brands?.status &&  data?.content?.brands?.brand_ids?.length > 0 && brandIdsLoader) ||(data?.content?.main_content?.seller?.status && data?.content?.main_content?.seller?.store_ids?.length > 0 &&sellerContextLoader)
      ) {
        document.body.classList.add("skeleton-body");
      } else {
        document.body.classList.remove("skeleton-body");
      }
    }
  }, [isLoading, productLoader, blogIdsLoader, brandIdsLoader, sellerContextLoader]);

  if (isLoading) return <Loader />;
  return (
    <div className="bg-effect">
      {/* Home Banner Section*/}
      {<ParisBanner dataAPI={data?.content} />}

      {/* Slider Banner Section*/}
      {data?.content?.featured_banners?.status && <SliderBanner bannersData={data?.content?.featured_banners?.banners} />}

      <WrapperComponent classes={{ sectionClass: "product-section", row: "g-sm-4 g-3" }} customCol={true}>
        {/* Left Section*/}
        <LeftSection dataAPI={data?.content} />

        {/* Right Section*/}
        <RightSection dataAPI={data?.content} />
      </WrapperComponent>

      {/* Brand Section*/}
      {data?.content?.brands?.status && data?.content?.brands?.brand_ids.length > 0 && (
        <div className="brand-effect">
          <div className="container-fluid-lg">
            <BrandData dataAPI={data?.content?.brands?.brand_ids} height={113} width={70} />
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      {data?.content?.news_letter?.status && <NewsLetter dataAPI={data?.content?.news_letter} />}

      {/* Sticky Cart Section */}
      {themeOption?.general?.sticky_cart_enable && themeOption?.general?.cart_style !== "cart_sidebar" && <StickyCart />}
    </div>
  );
};

export default ParisTheme;
