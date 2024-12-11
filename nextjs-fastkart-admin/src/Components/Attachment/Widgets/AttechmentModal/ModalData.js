import NoDataFound from "@/Components/CommonComponent/NoDataFound";
import { mimeImageMapping } from "@/Data/MimeImageType";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Input, Label } from "reactstrap";
import AttachmentDeleteDropdown from "../AttachmentDeteleDropdown";

const ModalData = ({
  state,
  dispatch,
  multiple,
  attachmentsData,
  refetch,
  redirectToTabs,
}) => {
  const [selectedId, setSelectedId] = useState([]);
  useEffect(() => {
    const onlyId =
      state?.selectedImage?.length > 0 &&
      state?.selectedImage?.map((data) => data?.id);
    setSelectedId(onlyId);
  }, []);

  const ChoseImages = (e, item) => {
    if (multiple) {
      if (!e.target.checked) {
        let removeDuplicatesImage = [...state.selectedImage];
        removeDuplicatesImage = removeDuplicatesImage.filter((el) => {
          return el.id !== item.id;
        });
        dispatch({
          type: "SELECTEDIMAGE",
          payload:
            state?.selectedImage?.length > 0 ? removeDuplicatesImage : [item],
        });
        const updatedId = removeDuplicatesImage?.map((data) => data?.id);
        setSelectedId(updatedId);
      } else {
        dispatch({
          type: "SELECTEDIMAGE",
          payload:
            state?.selectedImage?.length > 0
              ? [...state.selectedImage, item]
              : [item],
        });
        setSelectedId((prev) =>
          Array.isArray(prev) ? [...prev, item?.id] : [item?.id]
        );
      }
    } else {
      dispatch({ type: "SELECTEDIMAGE", payload: [item] });
    }
  };
  const getMimeTypeImage = (result) =>
    mimeImageMapping[result?.mime_type] ??
    process.env.storageURL + result?.asset_url;

  return (
    <>
      {attachmentsData?.length > 0 ? (
        attachmentsData?.map((elem, i) => (
          <div key={i}>
            <div className="library-box">
              <Input
                type="checkbox"
                id={elem.id}
                checked={
                  state?.selectedImage?.length > 0
                    ? multiple ? selectedId?.includes(elem.id)? true: false: state.selectedImage.every((item) => (item.id == elem.id) || (elem.asset_url === item.asset_url ))
                    : false
                }
                onChange={(e) => ChoseImages(e, elem)}
              />
              <Label htmlFor={elem.id}>
                <div className="ratio ratio-1x1">
                  <Image
                    src={getMimeTypeImage(elem)}
                    className="img-fluid"
                    alt="ratio image"
                    height={100}
                    width={100}
                  />
                </div>
                {!redirectToTabs && <AttachmentDeleteDropdown id={elem?.id} />}
              </Label>
            </div>
          </div>
        ))
      ) : (
        <NoDataFound noImage={false} title={"NoMediaFound"} />
      )}
      {}
    </>
  );
};

export default ModalData;
