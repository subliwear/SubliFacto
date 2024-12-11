import { useContext, useEffect, useState } from "react";
import BasicFooter from "./BasicFooter";
import SubscribeFooter from "./SubscribeFooter";
import { useSearchParams } from "next/navigation";
import ThemeOptionContext from "@/Helper/ThemeOptionsContext";

const MainFooter = () => {
  const [style, setStyle] = useState("")
  const path = useSearchParams()
  const theme = path.get('theme')
  const { themeOption } = useContext(ThemeOptionContext);
  useEffect(() => {
    if (theme) {
      if (theme == 'cairo') {
        setStyle('footer_subscribe')
      } else if (theme == 'paris' ||
        theme == 'tokyo' ||
        theme == 'rome' ||
        theme == 'osaka') {
        setStyle('light_mode')
      } else if (theme == 'madrid' ||
        theme == 'berlin' ||
        theme == 'denver' ||
        theme == 'moscow') {
        setStyle('dark_mode')
      }
    } else {
      let defaultStyle = themeOption?.footer ? themeOption?.footer?.footer_style : 'light_mode';
      setStyle(defaultStyle)
    }

  }, [theme,style,themeOption ,path])


  return (
    <>
      <footer className={`${ style == "footer_subscribe" ? '' : 'section-t-space'} ${style ==  "footer_subscribe" ? 'footer-section-2 footer-color-3 footer-section-4 section-t-space' : ''} ${style === 'dark_mode' ? "footer-section-2 footer-color-3":""}`}>
        {style == 'footer_subscribe' &&
          <SubscribeFooter />
        }
        {style == 'light_mode' &&
          <BasicFooter />
        }
        {style == 'dark_mode' &&
          <BasicFooter />
        }
      </footer>

    </>
  );
};

export default MainFooter;
