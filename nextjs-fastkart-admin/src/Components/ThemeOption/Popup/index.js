import TabTitle from "@/Components/Widgets/TabTitle";
import { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { popUpTabTitle } from "../../../Data/TabTitleListData";
import NewsLetter from "./NewsLetter";
import ExitModal from "./ExitModal";

const PopupTab = ({ values, setFieldValue }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={popUpTabTitle}/>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <NewsLetter values={values} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="2">
          <ExitModal values={values} setFieldValue={setFieldValue} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default PopupTab;
