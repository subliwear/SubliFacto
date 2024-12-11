
import { useContext, useEffect, useState } from "react";
import BasicProductBox from "./BasicProductBox/BasicProductBox";
import PremiumProductBox from "./PremiumProductBox/PremiumProductBox";
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import ClassicProductBox from "./ClassicProductBox/ClassicProductBox";
import StandardProductBox from "./StandardProductBox/StandardProductBox";
import DigitalProductBox from "./DigitalProductBox/DigitalProductBox";
import VerticalProductBox from "./VerticalProductBox/VerticalProductBox";
import { useSearchParams } from "next/navigation";


const ProductBox = ({ style, product, isClose, refetch, classObj={} , isProductAction}) => {
   const { themeOption } = useContext(ThemeOptionContext);
   const [productBox, setProductBox] = useState("")
   const path = useSearchParams()
   const theme = path.get('theme')

   useEffect(() => {
      if (theme == 'paris' || theme == 'tokyo') {
         setProductBox('basic')
      } else if (theme == 'osaka' || theme == 'rome') {
         setProductBox('classic')
      } else if (theme == 'berlin' || theme == 'denver') {
         setProductBox('standard')
      } else if (theme == 'cairo') {
         setProductBox('digital')
      } else if (theme == 'madrid' || theme == 'moscow') {
         setProductBox('premium')
      } else {
         setProductBox(themeOption?.product ? themeOption?.product?.product_box_variant : '')
      }
   }, [theme, productBox])
   return (
      <>
         {style == "'horizontal'" &&  productBox == 'basic' &&
            <BasicProductBox product={product} isClose={isClose} refetch={refetch} classObj={classObj} isProductAction={isProductAction}/>
         }
         {style == "'horizontal'" &&  productBox == 'premium' &&
            <PremiumProductBox product={product} isClose={isClose} refetch={refetch} classObj={classObj} />
         }
         {style == "'horizontal'" &&  productBox== 'classic' &&
            <ClassicProductBox product={product} isClose={isClose} refetch={refetch} classObj={classObj}/>
         }
         {style == "'horizontal'" &&  productBox == 'standard' &&
            <StandardProductBox product={product} isClose={isClose} refetch={refetch} classObj={classObj}/>
         }
         {style == "'horizontal'" &&  productBox == 'digital' &&
            <DigitalProductBox product={product} isClose={isClose} refetch={refetch} classObj={classObj}/>
         }
         {style == "'vertical'" &&
            <VerticalProductBox product={product} isClose={isClose} refetch={refetch} classObj={classObj}/>
         }
      </>
   );
};

export default ProductBox;
