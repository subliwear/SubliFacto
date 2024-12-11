import WrapperComponent from "@/Components/Common/WrapperComponent"
import ImageLink from '@/Components/Themes/Common/ImageLink'

const DenverBanner = ({ dataAPI }) => {
  return (
    <WrapperComponent classes={{ sectionClass: 'home-section-2 home-section-bg pt-0 overflow-hidden', fluidClass: 'p-0' }} colProps={{ xs: 12 }}>
      {
        dataAPI?.home_banner?.main_banner ? 
          <div className='slider-animate skeleton-banner-xl'>
           <ImageLink classes={{ customHoverClass: 'home-contain rounded-0 p-0' }} imgUrl={dataAPI?.home_banner?.main_banner?.image_url}  elem={dataAPI?.home_banner?.main_banner}  height={800} width={1528}/>
          </div> : null
      }
    </WrapperComponent>
  );
};

export default DenverBanner;
