import BlogIdsContext from "@/Helper/BlogIdsContext";
import ThemeOptionContext from "@/Helper/ThemeOptionsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Row } from "reactstrap";
import { latestBlogSlider } from "../../../Data/SliderSettingsData";
import NoDataFound from "../Common/NoDataFound";
import WrapperComponent from "../Common/WrapperComponent";
import BlogData from "../Themes/Common/BlogData";

const OurBlog = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");
  const { filteredBlog } = useContext(BlogIdsContext);
  const BlogOptions = { ...latestBlogSlider, infinite: filteredBlog?.length > latestBlogSlider.slidesToShow };

  return (
    <WrapperComponent classes={{ sectionClass: "section-lg-space" }} noRowCol>
      <div className="about-us-title text-center">
        <h4 className="text-content">{t("OurBlog")}</h4>
        <h2 className="center">{t("OurLatestBlog")}</h2>
      </div>

      {themeOption?.about_us?.blog?.blog_ids?.length > 0 ? (
        <Row>
          <BlogData
            dataAPI={themeOption?.about_us?.blog}
            classes={{
              sliderClass: "col-12",
              sliderOption: BlogOptions,
              height: 150,
              width: 317,
            }}
          />
        </Row>
      ) : (
        <NoDataFound
          data={{
            customClass: "bg-light no-data-added",
            title: "No Blog Found",
          }}
        />
      )}
    </WrapperComponent>
  );
};

export default OurBlog;
