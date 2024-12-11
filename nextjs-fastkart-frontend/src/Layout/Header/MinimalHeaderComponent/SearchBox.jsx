import Btn from "@/Elements/Buttons/Btn";
import ProductContext from "@/Helper/ProductContext";
import request from "@/Utils/AxiosUtils";
import { CategoryAPI } from "@/Utils/AxiosUtils/API";
import useOutsideDropdown from "@/Utils/Hooks/CustomHooks/useOutsideDropdown";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiSearchLine } from "react-icons/ri";
import { Input } from "reactstrap";
import SearchDropDown from "../Common/SearchDropDown";

const SearchBox = () => {
  const { t } = useTranslation("common");
  const [searchValue, setSearchValue] = useState("");
  const { searchList } = useContext(ProductContext);
  const [searchArr, setSearchArray] = useState([]);
  const [paginate, setPaginate] = useState(4);
  const pathName = usePathname();
  const [categorySearch, setCategorySearch] = useState(false);
  const [categoryCustomSearch, setCategoryCustomSearch] = useState("");
  const [categoryTc, setCategoryTc] = useState(null);

  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown();
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const router = useRouter();
  const { data: categoryData, refetch, isLoading: categoryIsLoading } = useQuery(["CategoryAPIMinimalSearch"], () => request({ url: CategoryAPI, params: { status: 1, paginate: searchValue === "" ? 4 : paginate, search: categoryCustomSearch ? categoryCustomSearch : null } }, router), { enabled: false, refetchOnWindowFocus: false, select: (data) => data.data.data });
  useEffect(() => {
    setSelectedItemIndex(null);
    setIsComponentVisible(false), setSearchValue("");
    setSearchArray(searchList?.slice(0, 5));
  }, [pathName]);

  // Added debouncing
  useEffect(() => {
    if (categoryTc) clearTimeout(categoryTc);
    setCategoryTc(setTimeout(() => setCategoryCustomSearch(categorySearch), 500));
  }, [categorySearch]);
  // Getting users data on searching users
  useEffect(() => {
    !categoryIsLoading && categoryCustomSearch !== undefined && refetch();
  }, [categoryCustomSearch]);

  useEffect(() => {
    if (categoryIsLoading) {
      categoryIsLoading && refetch();
    } else if (!categoryIsLoading) {
      setPaginate(null);
      refetch();
    }
  }, [categoryIsLoading]);
  const onChangeHandle = (text) => {
    setCategorySearch(text);
    setSearchValue(text);
    if (text !== "") {
      const search = searchList.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));
      setSearchArray(search);
      setIsComponentVisible(true);
    } else {
      setSearchArray([]);
      setIsComponentVisible(false);
    }
  };
  const handleEnterKey = () => {
    if (selectedItemIndex !== null) {
      const selectedItem = searchArr[selectedItemIndex];
      router.push(`/product/${selectedItem.slug}`);
    }
  };

  const handleArrowKey = (direction) => {
    if (searchArr.length > 0) {
      let newIndex = selectedItemIndex === null ? 0 : selectedItemIndex + direction;
      if (newIndex < 0) {
        newIndex = searchArr.length - 1;
      } else if (newIndex >= searchArr.length) {
        newIndex = 0;
      }
      const selectedItemElement = document.getElementById(`searchItem_${newIndex}`);
      if (selectedItemElement) {
        selectedItemElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      setSearchValue(searchArr[newIndex]?.title);
      setSelectedItemIndex(newIndex);
    }
  };

  const onHandleSearch = () => {
    if (searchValue) {
      router.push(`/search?search=${searchValue}`);
    } else {
      router.push(`/search`);
    }
  };
  return (
    <div className="middle-box">
      <div className="center-box">
        <div className="searchbar-box-2 input-group d-xl-flex d-none" ref={ref}>
          <Btn className="btn search-icon" type="button">
            <RiSearchLine />
          </Btn>
          <Input
            onClick={() => {
              setIsComponentVisible(true);
              setSearchArray(searchList?.slice(0, 5));
            }}
            type="search"
            placeholder="Search..."
            value={searchValue}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                handleArrowKey(1);
              } else if (e.key === "ArrowUp") {
                handleArrowKey(-1);
              } else if (e.key === "Enter") {
                handleEnterKey();
              }
            }}
            onChange={(e) => onChangeHandle(e.target.value)}
          />
          <Btn className="btn search-button" type="button" onClick={onHandleSearch}>
            {t("Search")}
          </Btn>
          {isComponentVisible && <SearchDropDown selectedItemIndex={selectedItemIndex} searchArr={searchArr} categoryLoading={categoryIsLoading} categoryData={categoryData} searchValue={searchValue} />}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
