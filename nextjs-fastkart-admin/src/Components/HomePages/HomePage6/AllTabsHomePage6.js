import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { TabContent, TabPane } from "reactstrap"
import HomeBanner6Tab from "./HomeBanner6Tab"
import ServiceBannerTab from "../HomePage5/ServiceBannerTab"
import MainContent6Tab from "./MainContent6Tab"
import FullWidthBanner6Tab from "./FullWidthBanner6Tab"
import ProductList1Tab from "../HomePage5/ProductList1Tab"
import NewsLetterTab from "../HomePage3/NewsLetterTab"
import { BrandAPI, Category, product, store } from "../../../Utils/AxiosUtils/API"
import request from "../../../Utils/AxiosUtils"
import placeHolderImage from "../../../../public/assets/images/placeholder.png";
import Loader from "../../CommonComponent/Loader"
import BrandsTab from "../HomePage1/BrandsTab"
import { useRouter } from "next/navigation"

const AllTabsHomePage6 = forwardRef(({ activeTab, values, setFieldValue }, ref) => {
    const [search, setSearch] = useState(false);
    const [customSearch, setCustomSearch] = useState("")
    const [tc, setTc] = useState(null);
    const [brandSearch, setBrandSearch] = useState(false);
    const [brandCustomSearch, setBrandCustomSearch] = useState("");
    const [brandTc, setBrandTc] = useState(null);
    const [storeSearch, setStoreSearch] = useState(false);
    const [storeCustomSearch, setStoreCustomSearch] = useState("");
   const [storeTc, setStoreTc] = useState(null);
   const router = useRouter()
    const { data:storeData ,refetch:storeRefetch  } =useQuery([store],()=>request({url:store,params:{status:1,search: storeCustomSearch ? storeCustomSearch : '',}}),{refetchOnWindowFocus:false, select:(res)=> res?.data?.data?.map((elem)=> {return{ id:elem.id,name:elem?.store_name,slug:elem?.slug }})})

  // Added debouncing
  useEffect(() => {
      if (storeTc) clearTimeout(storeTc);
      setStoreTc(setTimeout(() => setStoreCustomSearch(storeSearch), 500));
  }, [storeSearch])
  // Getting users data on searching users
  useEffect(() => {
      storeRefetch()
  }, [storeCustomSearch])   
   
    const { data: brandData, refetch: brandRefetch } = useQuery([BrandAPI],() =>request({url: BrandAPI,params: {status: 1,search: brandCustomSearch ? brandCustomSearch : "",},},router),{refetchOnWindowFocus: false,select: (res) =>res?.data?.data?.map((elem) => {return { id: elem.id, name: elem?.name, slug: elem?.slug };}),});
    // Added debouncing
    useEffect(() => {
      if (brandTc) clearTimeout(brandTc);
      setBrandTc(setTimeout(() => setBrandCustomSearch(brandSearch), 500));
    }, [brandSearch]);
    // Getting users data on searching users
    useEffect(() => {
      brandRefetch();
    }, [brandCustomSearch]);

    const { data: productData, isLoading: productLoader, refetch } = useQuery([product], () => request({
        url: product, params:
        {
            status: 1,
            search: customSearch ? customSearch : '',
            paginate: values['content']?.['products_ids']?.length > 15 ? values['content']?.['products_ids']?.length : 15,
            ids: customSearch ? null : values['content']['products_ids'].join() || null,
            with_union_products: values['content']?.['products_ids']?.length ? values['content']?.['products_ids']?.length >= 15 ? 0 : 1 : 0
        }
    },router), {
        refetchOnWindowFocus: false, select: (res) => res?.data?.data.map((elem) => { return { id: elem.id, name: elem.name, image: elem?.product_thumbnail?.original_url || placeHolderImage, slug: elem?.slug } })
    });
    const { data: categoryData, isLoading: categoryLoader } = useQuery([Category], () => request({ url: Category, params: { status: 1, type: 'product' } },router), {
        refetchOnWindowFocus: false, select: (res) => res?.data?.data.map((elem) => { return { id: elem.id, name: elem.name, image: elem?.category_icon?.original_url || placeHolderImage, slug: elem?.slug } })
    });
    useImperativeHandle(ref, () => ({
        call() {
            refetch();
        }
    }));

    // Added debouncing
    useEffect(() => {
        if (tc) clearTimeout(tc);
        setTc(setTimeout(() => setCustomSearch(search), 500));
    }, [search])
    // Getting users data on searching users
    useEffect(() => {
        refetch()
    }, [customSearch])
    if (productLoader || categoryLoader) return <Loader />
    return (
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <HomeBanner6Tab values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} setSearch={setSearch} />
            </TabPane>
            <TabPane tabId="2">
                <ServiceBannerTab values={values} setFieldValue={setFieldValue} />
            </TabPane>
            <TabPane tabId="3">
                <MainContent6Tab setStoreSearch={setStoreSearch} storeData={storeData} values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} setSearch={setSearch} />
            </TabPane>
            <TabPane tabId="4">
                <FullWidthBanner6Tab values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} setSearch={setSearch} />
            </TabPane>
            <TabPane tabId="5">
                <ProductList1Tab values={values} setFieldValue={setFieldValue} nameKey={'product_list_1'} productData={productData} description={true} setSearch={setSearch} />
            </TabPane>
            <TabPane tabId="6">
                <BrandsTab name={"brandIds"}  setBrandSearch={setBrandSearch} brandData={brandData} />
            </TabPane>
            <TabPane tabId="7">
                <NewsLetterTab values={values} setFieldValue={setFieldValue} />
            </TabPane>
        </TabContent>
    )
})

export default AllTabsHomePage6