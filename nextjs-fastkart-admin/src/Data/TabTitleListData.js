import {
  RiAccountBoxLine,
  RiBankCardLine,
  RiBankLine,
  RiRecordCircleLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiCreativeCommonsNcLine,
  RiEarthLine,
  RiFileListLine,
  RiDatabaseLine,
  RiComputerLine,
  RiGoogleFill,
  RiImageLine,
  RiLineChartLine,
  RiMailOpenLine,
  RiMailUnreadLine,
  RiMoneyEuroBoxLine,
  RiPaypalLine,
  RiPercentLine,
  RiPhoneLockLine,
  RiPieChartLine,
  RiRadioButtonLine,
  RiRefundLine,
  RiSecurePaymentLine,
  RiSettingsLine,
  RiToolsLine,
  RiTruckLine,
  RiWallet3Fill,
  RiFacebookCircleLine,
  RiGoogleLine,
  RiAlertLine,
  RiFileList2Line,
  RiShoppingBasketLine,
  RiLayoutBottom2Line,
  RiLayoutTop2Line,
  RiContactsLine,
} from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import basicSeller from "../../public/assets/images/theme-option/seller/basic.png";
import classicSeller from "../../public/assets/images/theme-option/seller/classic.png";
import basicSellerStore from "../../public/assets/images/theme-option/seller/basic-details.png";
import classicSellerStore from "../../public/assets/images/theme-option/seller/classic-details.png";
import header1 from "../../public/assets/images/theme-option/header/01.png";
import header2 from "../../public/assets/images/theme-option/header/02.png";
import header3 from "../../public/assets/images/theme-option/header/03.png";
import header4 from "../../public/assets/images/theme-option/header/5.jpg";
import header01 from "../../public/assets/images/theme-option/header/1.png";
import header02 from "../../public/assets/images/theme-option/header/2.png";
import header03 from "../../public/assets/images/theme-option/header/3.png";
import header04 from "../../public/assets/images/theme-option/header/05.jpg";
import product01 from "../../public/assets/images/theme-option/product/01.jpg";
import product02 from "../../public/assets/images/theme-option/product/02.jpg";
import product03 from "../../public/assets/images/theme-option/product/04.jpg";
import product04 from "../../public/assets/images/theme-option/product/07.jpg";
import product05 from "../../public/assets/images/theme-option/product/08.jpg";
import product06 from "../../public/assets/images/theme-option/product/09.jpg";
import productBox01 from "../../public/assets/images/theme-option/product-box/01.jpg";
import productBox02 from "../../public/assets/images/theme-option/product-box/02.jpg";
import productBox03 from "../../public/assets/images/theme-option/product-box/03.jpg";
import productBox04 from "../../public/assets/images/theme-option/product-box/04.jpg";
import productBox05 from "../../public/assets/images/theme-option/product-box/05.jpg";
import blog01 from "../../public/assets/images/theme-option/shop/01.jpg";
import blog02 from "../../public/assets/images/theme-option/shop/02.jpg";
import blogStore1 from "../../public/assets/images/theme-option/shop/01.jpg";
import blogStore2 from "../../public/assets/images/theme-option/shop/08.jpg";
import blogStore3 from "../../public/assets/images/theme-option/shop/09.jpg";
import themeOption1 from "../../public/assets/images/theme-option/shop/10.jpg";
import themeOption2 from "../../public/assets/images/theme-option/shop/11.jpg";
import themeOption3 from "../../public/assets/images/theme-option/shop/03.jpg";
import themeOption4 from "../../public/assets/images/theme-option/shop/04.jpg";
import themeOption5 from "../../public/assets/images/theme-option/shop/05.jpg";
import themeOption6 from "../../public/assets/images/theme-option/shop/06.jpg";
import themeOption7 from "../../public/assets/images/theme-option/shop/07.jpg";

export const ProductTabTitleListData = [
  {
    title: "General",
    icon: <RiSettingsLine />,
    inputs: [
      "product_type",
      "store_id",
      "name",
      "description",
      "short_description",
      "description",
      "tax_id"
    ],
  },
  {
    title: "Product Images",
    icon: <RiImageLine />,
    inputs: [
      "product_thumbnail",
      "product_thumbnail_id",
      "size_chart_image",
      "size_chart_image_id",
      "product_galleries",
      "product_galleries_id",
      "watermark",
      "watermark_position",
      "watermark_image_id"
    ],
  },
  {
    title: "Inventory",
    icon: <RiFileListLine />,
    inputs: [
      "type",
      "stock_status",
      "sku",
      "quantity",
      "price",
      "discount",
      "sale_price",
      "wholesale_price_type",
      "wholesale_prices",
      "external_url",
      "external_button_text"
    ],
  },
  {
    title: "Variations",
    icon: <RiDatabaseLine />,
    inputs: [
      "type",
      "stock_status",
      "sku",
      "quantity",
      "price",
      "sale_price",
      "show_stock_quantity",
      "discount",
      "visible_time",
      "variations",
      "is_licensable",
      "is_licensekey_auto",
      "separator",
      "license_key"
    ],
  },
  {
    title: "Digital Product",
    icon: <RiComputerLine />,
    inputs: [
      "is_licensable",
      "is_licensekey_auto",
      "separator",
      "license_key",
      "preview_audio_file_id",
      "preview_type",
      "preview_video_file_id",
      "preview_url"
    ],
  },
  {
    title: "Setup",
    icon: <RiToolsLine />,
    inputs: [
      "is_sale_enable",
      "sale_starts_at",
      "sale_expired_at",
      "unit",
      "tags",
      "brand_id",
      "is_random_related_products",
      "related_products",
      "categories", 
      "cross_sell_products",
      "cross_sell_product_id"
    ],
  },
  {
    title: "SEO",
    icon: <RiEarthLine />,
    inputs: ["meta_title", "meta_description ", "product_meta_image"],
  },
  {
    title: "Shipping",
    icon: <RiTruckLine />,
    inputs: ["is_free_shipping","is_return","estimated_delivery_text","return_policy_text","weight"],
  },
  {
    title: "Status",
    icon: <RiCheckboxCircleLine />,
    inputs: [
    "is_featured",
    "safe_checkout",
    "secure_checkout",
    "social_share",
    "encourage_order",
    "encourage_view",
    "is_trending",
    "status"
    ]
  },
];
export const CouponTabTitleListData = [
  {
    title: "General",
    icon: <RiSettingsLine />,
    inputs: ["code", "type", "amount", "status", "is_expired"],
  },
  {
    title: "Restriction",
    icon: <RiCloseCircleLine />,
    inputs: ["products", "exclude_products", "min_spend", "max_spend"],
  },
  {
    title: "Usage",
    icon: <RiPieChartLine />,
    inputs: ["is_unlimited", "usage_per_coupon", "usage_per_customer"],
  },
];

export const SettingTabTitleListData = [
  { title: "General", icon: <RiSettingsLine /> },
  { title: "Activation", icon: <RiRadioButtonLine /> },
  { title: "WalletPoints", icon: <RiWallet3Fill /> },
  { title: "EmailConfiguration", icon: <RiMailOpenLine /> },
  { title: "SMS Configuration", icon: <RiMailOpenLine /> },
  { title: "MediaConfiguration", icon: <RiMailOpenLine /> },
  { title: "VendorCommission", icon: <RiPercentLine /> },
  { title: "Refund", icon: <RiRefundLine /> },
  { title: "ReCaptcha", icon: <RiGoogleFill /> },
  { title: "Delivery", icon: <TbTruckDelivery /> },
  { title: "PaymentMethods", icon: <RiBankCardLine /> },
  { title: "Analytics", icon: <RiLineChartLine /> },
  { title: "Maintenance", icon: <RiAlertLine /> },
];

export const ThemeOptionTabTitleListData = [
  { title: "General", icon: <RiSettingsLine /> },
  { title: "Header", icon: <RiLayoutTop2Line /> },
  { title: "Footer", icon: <RiLayoutBottom2Line /> },
  { title: "CollectionLayout", icon: <RiShoppingBasketLine /> },
  { title: "ProductLayout", icon: <RiShoppingBasketLine /> },
  { title: "Blog", icon: <RiFileList2Line /> },
  { title: "Seller", icon: <RiFileList2Line /> },
  { title: "AboutUs", icon: <RiContactsLine /> },
  { title: "ContactPage", icon: <RiContactsLine /> },
  { title: "404ErrorPage", icon: <RiAlertLine /> },
  { title: "Popup", icon: <RiAlertLine /> },
  { title: "Seo", icon: <RiEarthLine /> },
];

export const waterMarkPosition = 
    [{
      id: 'top-left',
      name: 'Top Left',
    },{
      id: 'top',
      name: 'Top',
    },{
      id: 'top-right',
      name: 'Top Right',
    },{
      id: 'left',
      name: 'Left',
    },{
      id: 'center',
      name: 'Center',
    },{
      id: 'right',
      name: 'Right',
    },{
      id: 'bottom-left',
      name: 'Bottom Left',
    },{
      id: 'bottom',
      name: 'Bottom',
    },{
      id: 'bottom-right',
      name: 'Bottom Right',
  }
]

export const SettingPaymentMethodTab = [
  {
    key: "PaypalProvider",
    title: "Paypal",
    inputs: [
      "site_title",
      "site_tagline",
      "default_timezone",
      "default_currency",
      "default_language",
      "min_order_amount",
      "front_site_langauge_direction",
      "admin_site_langauge_direction",
      "store_prefix",
      "copyright",
    ],
  },
  {
    key: "StripeProvider",
    title: "Stripe",
    inputs: [
      "catalog_enable",
      "maintenance",
      "vendor_activation",
      "product_auto_approve",
      "wallet_enable",
      "coupon_enable",
      "stock_product_hide",
    ],
  },
  {
    key: "CcAvenueProvider",
    title: "Ccavenue",
    inputs: [
      "catalog_enable",
      "maintenance",
      "vendor_activation",
      "product_auto_approve",
      "wallet_enable",
      "coupon_enable",
      "stock_product_hide",
    ],
  },
  {
    key: "RazorpayProvider",
    title: "Razorpay",
    inputs: [
      "mail_mailer",
      "mail_host",
      "mail_port",
      "mail_username",
      "mail_password",
      "mail_encryption",
      "mail_from_address",
      "mail_from_name",
      "mailgun_domain",
      "mailgun_secret",
    ],
  },
  {
    key: "CashOnDeliveryProvider",
    title: "COD",
    inputs: [
      "mail_mailer",
      "mail_host",
      "mail_port",
      "mail_username",
      "mail_password",
      "mail_encryption",
      "mail_from_address",
      "mail_from_name",
      "mailgun_domain",
      "mailgun_secret",
    ],
  },
  {
    key: "MollieProvider",
    title: "Mollie",
    inputs: [
      "mail_mailer",
      "mail_host",
      "mail_port",
      "mail_username",
      "mail_password",
      "mail_encryption",
      "mail_from_address",
      "mail_from_name",
      "mailgun_domain",
      "mailgun_secret",
    ],
  },
  {
    key: "InstaMojoProvider",
    title: "Instamojo",
    inputs: [
      "mail_mailer",
      "mail_host",
      "mail_port",
      "mail_username",
      "mail_password",
      "mail_encryption",
      "mail_from_address",
      "mail_from_name",
      "mailgun_domain",
      "mailgun_secret",
    ],
  },
  {
    key: "PhonepeProvider",
    title: "Phonepe",
    inputs: [
      "mail_mailer",
      "mail_host",
      "mail_port",
      "mail_username",
      "mail_password",
      "mail_encryption",
      "mail_from_address",
      "mail_from_name",
      "mailgun_domain",
      "mailgun_secret",
    ],
  },
  {
    key: "bkashProvider",
    title: "bkash",
    inputs: [
      "title",
      "status",
      "app_key",
      "password",
      "username",
      "app_secret",
      "sandbox_mode",
    ],
  },
  {
    key: "paystackProvider",
    title: "paystack",
    inputs: ["title", "status", "public_key", "secret_key", "sandbox_mode"],
  },
  {
    key: "sslcommerzProvider",
    title: "sslcommerz",
    inputs: ["title", "status", "store_id", "sandbox_mode", "store_password"],
  },
  {
    key: "flutter_waveProvider",
    title: "flutter_wave",
    inputs: [
      "title",
      "status",
      "public_key",
      "secret_key",
      "sandbox_mod",
      "secret_hash",
    ],
  },
  {
    key: "bank_transferProvider",
    title: "bank_transfer",
    inputs: ["title", "status"],
  },
];

export const SettingSMSTab = [
  {
    key: "Twilio",
    title: "Twilio",
    inputs: [
      "title",
      "status",
      "twilio_auth_token",
      "twilio_number",
      "twilio_sid",
    ],
  },
];

export const settingAnalyticsTab = [
  { title: "FacebookPixel", icon: <RiFacebookCircleLine /> },
  { title: "GoogleAnalytics", icon: <RiGoogleLine /> },
];

export const HeaderOption = [
  {
    id: 1,
    title: "Header 1",
    value: "basic_header",
    dummyImg: "01.png",
    realImg: "1.png",
  },
  {
    id: 2,
    title: "Header 2",
    value: "classic_header",
    dummyImg: "02.png",
    realImg: "2.png",
  },
  {
    id: 3,
    title: "Header 3",
    value: "standard_header",
    dummyImg: "03.png",
    realImg: "3.png",
  },
  {
    id: 4,
    title: "Header 4",
    value: "minimal_header",
    dummyImg: "04.png",
    realImg: "4.png",
  },
];

export const FooterUseFulLink = [
  { id: 1, value: "home", name: "Home" },
  { id: 2, value: "collections", name: "Collections" },
  { id: 3, value: "about-us", name: "About Us" },
  { id: 4, value: "blogs", name: "Blogs" },
  { id: 5, value: "offers", name: "Offers" },
  { id: 6, value: "search", name: "Search" },
];

export const helpCenter = [
  {
    id: 1,
    name: "My Account",
    value: "account/dashboard",
  },
  {
    id: 2,
    name: "My Orders",
    value: "account/order",
  },
  {
    id: 3,
    name: "Track Order",
    value: "order/tracking",
  },
  {
    id: 4,
    name: "Wishlist",
    value: "wishlist",
  },
  {
    id: 5,
    name: "Compare",
    value: "compare",
  },
  {
    id: 6,
    name: "FAQ's",
    value: "faq",
  },
  {
    id: 7,
    name: "Contact Us",
    value: "contact-us",
  },
];

export const CollectionLayoutOption = [
  {
    id: 1,
    value: "collection_category_slider",
    title: "Collectioncategoryslider",
    img: themeOption1,
  },
  {
    id: 2,
    value: "collection_category_sidebar",
    title: "CollectionCategorySidebar",
    img: themeOption2,
  },
  {
    id: 3,
    value: "collection_banner",
    title: "CollectionBanner",
    img: themeOption3,
  },
  {
    id: 4,
    value: "collection_left_sidebar",
    title: "CollectionLeftSidebar",
    img: themeOption4,
  },
  {
    id: 5,
    value: "collection_list",
    title: "CollectionList",
    img: themeOption5,
  },
  {
    id: 6,
    value: "collection_right_sidebar",
    title: "CollectionRightSidebar",
    img: themeOption6,
  },
  {
    id: 7,
    value: "collection_offcanvas_filter",
    title: "CollectionTopFilter",
    img: themeOption7,
  },
];
export const ProductLayoutOption = [
  { id: 1, value: "product_images", title: "ProductImage", img: product01 },
  {id: 2,value: "product_thumbnail",title: "ProductThumbnail",img: product02,},
  { id: 3, value: "product_slider", title: "ProductSlider", img: product03 },
  { id: 4, value: "product_sticky", title: "ProductSticky", img: product04 },
  { id: 5, value: "product_tabs", title: "Product Tabs", img: product05 },
  { id: 6, value: "product_accordion", title: "Product Accordion", img: product06 },
  { id: 7, value: "product_digital", title: "Product Digital", img: product06 },
];

export const Product_box_variant = [
  {id: 'basic',name: 'basic', },
  {id: 'premium',name: 'premium '},
  {id: 'classic',name: 'classic',},
  {id: 'standard',name: 'standard'},
  {id: 'digital',name: 'digital'}
]
export const BlogStyleOption = [
  { value: "grid_view", title: "GridView", img: blog01 },
  { value: "list_view", title: "ListView", img: blog02 },
];
export const BlogTypeOption = [
  { value: "left_sidebar", title: "LeftSidebar", img: blogStore1 },
  { value: "right_sidebar", title: "RightSidebar", img: blogStore2 },
  { value: "no_sidebar", title: "NoSidebar", img: blogStore3 },
];

export const AccountTab = [
  { title: "ProfileSetting", icon: <RiAccountBoxLine /> },
  { title: "ChangePassword", icon: <RiPhoneLockLine /> },
];

export const PaymentDetailTab = [
  { title: "Bank", icon: <RiBankLine /> },
  { title: "Paypal", icon: <RiPaypalLine /> },
];

export const HomePage1SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "FeaturesBanner", icon: <RiRecordCircleLine /> },
  { title: "MainContent", icon: <RiRecordCircleLine /> },
  { title: "Brands", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const AppSettingsPageTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "RecentProduct", icon: <RiRecordCircleLine /> },
  { title: "CategoriesList", icon: <RiRecordCircleLine /> },
  { title: "OfferProducts", icon: <RiRecordCircleLine /> },
  { title: "Section1Products", icon: <RiRecordCircleLine /> },
  { title: "Section2Products", icon: <RiRecordCircleLine /> },
  { title: "coupons", icon: <RiRecordCircleLine /> },
  { title: "Section3Products", icon: <RiRecordCircleLine /> },
  { title: "NavigateButton", icon: <RiRecordCircleLine /> },
];
export const HomePage7SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "coupons", icon: <RiRecordCircleLine /> },
  { title: "Slider Products", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "Brands", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];
export const cairoHomePageTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList2", icon: <RiRecordCircleLine /> },
  { title: "SliderProduct", icon: <RiRecordCircleLine /> },
  { title: "Seller", icon: <RiRecordCircleLine /> },
  { title: "CategoriesProducts", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brands", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const ThemeOneHomeHorizontalTab = [
  { title: "MainBanner" },
  { title: "SubBanner1" },
  { title: "SubBanner2" },
];

export const ThemeOneMainHorizontalTab = [
  { title: "LeftSidebar" },
  { title: "RightContent" },
];
export const ThemeSevenHorizontalTab = [
  { title: "Slider" },
  { title: "Banner" },
];
export const ThemeOneMainHorizontalTab2 = [
  { title: "LeftContent" },
  { title: "RightSidebar" },
];

export const ThemeSixMainHorizontalTab = [
  { title: "LeftContent" },
  { title: "RightSidebar" },
];

export const HomePage3SetttingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "Coupons", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "Seller", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductBundles", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "FeaturesBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brands", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const ThemeThreeHomeHorizontalTab = [
  { title: "MainBanner" },
  { title: "SubBanner1" },
];

export const HomePage2SettingTab = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "Coupons", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBanner", icon: <RiRecordCircleLine /> },
  { title: "MainContent", icon: <RiRecordCircleLine /> },
  { title: "FullWidthBanner", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "Brands", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const MainRightSidebarBannerTab = [
  { title: "Banner1" },
  { title: "Banner2" },
];

export const SliderProduct9Title = [{ title: "Banner" }, { title: "Slider" }];

export const ProductWithDealTab = [
  { title: "ProductList" },
  { title: "DealofDays" },
];

export const HomePage4SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesImageList", icon: <RiRecordCircleLine /> },
  { title: "ValueBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesProduct", icon: <RiRecordCircleLine /> },
  { title: "Seller", icon: <RiRecordCircleLine /> },
  { title: "TwoColumnBanner", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "FullWidthBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "FeaturesBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brands", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const HomePage5SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesImageList", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "BankWalletOffer", icon: <RiRecordCircleLine /> },
  { title: "ProductWithDeals", icon: <RiRecordCircleLine /> },
  { title: "Seller", icon: <RiRecordCircleLine /> },
  { title: "FullWidthBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "TwoColumnBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList4", icon: <RiRecordCircleLine /> },
  { title: "ProductList5", icon: <RiRecordCircleLine /> },
  { title: "DeliveryBanners", icon: <RiRecordCircleLine /> },
  { title: "ProductList6", icon: <RiRecordCircleLine /> },
  { title: "ProductList7", icon: <RiRecordCircleLine /> },
  { title: "FeaturesBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brands", icon: <RiRecordCircleLine /> },
];

export const HomePage8SettingTitle = [
  { title: "MainContent", icon: <RiRecordCircleLine /> },
];

export const HomePage6SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "ServiceBanner", icon: <RiRecordCircleLine /> },
  { title: "MainContent", icon: <RiRecordCircleLine /> },
  { title: "FullWidthBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "Brands", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const HomePage9SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ColumnBanner", icon: <RiRecordCircleLine /> },
  { title: "Seller", icon: <RiRecordCircleLine /> },
  { title: "SliderProduct", icon: <RiRecordCircleLine /> },
  { title: "CouponBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "Brands", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const SellerDashboardTitles = [
  { title: "About" },
  { title: "Services" },
  { title: "Steps" },
  { title: "Selling" },
];
export const AboutUsTabTitle = [
  { title: "About" },
  { title: "Clients" },
  { title: "Team" },
  { title: "Testimonial" },
  { title: "Blog" },
];
export const popUpTabTitle = [
  { title: "NewsLetter" },
  { title: "Exit" },
];

export const SellerAboutStore = [
  { value: "basic_store", title: "BasicStore", img: basicSeller },
  { value: "classic_store", title: "ClassicStore", img: classicSeller },
];
export const SellerSetailsStore = [
  {
    value: "basic_store_details",
    title: "BasicStoreDetails",
    img: basicSellerStore,
  },
  {
    value: "classic_store_details",
    title: "ClassicStoreDetails",
    img: classicSellerStore,
  },
];

export const redirectOptions = [
  { id: "product", name: "Product" },
  { id: "collection", name: "Collection" },
  { id: "external_url", name: "External Link" },
];

export const topStoreOption = [
  {
    value: "today",
    name: "Today",
  },
  {
    value: "last_week",
    name: "Last Week",
  },
  {
    value: "last_month",
    name: "Last Month",
  },
  {
    value: "this_year",
    name: "This Year",
  },
];

export const variantStyle = [
  { id: "rectangle", name: "Rectangle" },
  { id: "circle", name: "Circle" },
  { id: "radio", name: "Radio" },
  { id: "dropdown", name: "Dropdown" },
  { id: "image", name: "Image" },
  { id: "color", name: "Color" },
];
