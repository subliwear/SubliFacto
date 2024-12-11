import Btn from "@/Elements/Buttons/Btn";
import ThemeOptionContext from "@/Helper/ThemeOptionsContext";
import { usePathname, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine, RiSettings3Fill } from "react-icons/ri";
import { Form, Input, Label } from "reactstrap";
import { queryColors } from "../../../Data/LayoutData";

const SettingBox = () => {
  
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation( 'common');
  const [openSetting, setOpenSetting] = useState(false);
  const [rtlValue, setRtlValue] = useState(themeOption?.general?.language_direction?themeOption?.general?.language_direction:"ltr");
  const [lightDarkMode, setLightDarkMode] = useState(themeOption?.general?.mode?themeOption?.general?.mode:"light");
  const [themeColor, setThemeColor] = useState("#0da487");
  const path = useSearchParams()
  const theme = path.get('theme')
  const pathName = usePathname();
  useEffect(() => {
    if (queryColors[theme]) {    
      setThemeColor(queryColors[theme]);
    } else {
      setThemeColor(themeOption?.general?.primary_color);
    }
  }, [pathName ,path ,themeOption?.general?.primary_color]); 
  
   useEffect(() => {
    themeOption?.general?.mode === "dark"? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    themeOption?.general?.language_direction == "rtl"? document.body.setAttribute("dir", "rtl"): document.body.setAttribute("dir", "ltr");
  }, [pathName,themeOption?.general?.mode,themeOption?.general?.language_direction]);

  const handleRtl = (value) => {
    setRtlValue(value);
    value == "rtl"? document.body.setAttribute("dir", "rtl"): document.body.setAttribute("dir", "ltr");
  };
  const handleLightDarkMode = (value) => {
    setLightDarkMode(value);
    value == "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  };
  const handleColorChange = (event) => {
    const { value } = event.target;
    setThemeColor(value);
    document.documentElement.style.setProperty("--theme-color", value);
  };
  return (
    <div className="setting-box">
      <Btn className="btn setting-button theme-bg-color text-white" onClick={() => setOpenSetting((prev) => !prev)}>
        {openSetting ? <RiCloseLine /> : <RiSettings3Fill />}
      </Btn>
      <div className={`theme-setting-2 ${openSetting ? "active" : ""}`}>
        <div className="theme-box">
          <ul>
            <li>
              <div className="setting-name">
                <h4>{t("Color")}</h4>
              </div>
              <div className="theme-setting-button color-picker">
                <Form className="form-control">
                  <Label htmlFor="colorPick" className="form-label mb-0">{t("ThemeColor")}</Label>
                  <Input type="color" className="form-control-color" title="Choose your color" onChange={handleColorChange} value={themeColor}/>
                </Form>
              </div>
            </li>
            <li>
              <div className="setting-name">
                <h4>{t("Dark")}</h4>
              </div>
              <div className="theme-setting-button">
                <Btn className={`btn-2 ${lightDarkMode == "dark" ? "unline" : "outline"}`} onClick={() => handleLightDarkMode("dark")} id="darkButton">{t("Dark")}</Btn>
                <Btn className={`btn-2 ${ lightDarkMode == "light" ? "unline" : "outline"}`} onClick={() => handleLightDarkMode("light")} id="lightButton">{t("Light")}</Btn>
              </div>
            </li>
            <li>
              <div className="setting-name">
                <h4>{t("RTL")}</h4>
              </div>
              <div className="theme-setting-button rtl">
                <Btn className={`btn btn-2 ${ rtlValue === "rtl" ? "rtl-unline" : "rtl-outline"}`} onClick={() => handleRtl("rtl")}>{t("RTL")}</Btn>
                <Btn className={`btn btn-2 ${ rtlValue === "ltr" ? "rtl-unline" : "rtl-outline" }`} onClick={() => handleRtl("ltr")}>{t("LTR")}</Btn>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingBox;
