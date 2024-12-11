'use client'
import Loader from "@/Components/CommonComponent/Loader";
import request from "@/Utils/AxiosUtils";
import { theme } from "@/Utils/AxiosUtils/API";
import LiveImagePath from "@/Utils/Constants";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row } from "reactstrap";

const Theme = () => {
    
    const { t } = useTranslation( 'common');
    const [edit] = usePermissionCheck(["edit"]);
    const [activeTheme, setActiveTheme] = useState('')
    const router = useRouter();
    const { data, isLoading, refetch } = useQuery([theme], () => request({ url: theme },router), { refetchOnMount: false, select: (data) => data?.data?.data });
    const { mutate } = useMutation(({ data }) => request({ url: `${theme}/${activeTheme}`, data: { status: 1 }, method: "put" },router), {
        onSuccess: () => refetch()
    });
    useEffect(() => {
        data && data?.forEach((elem) => {
            elem.status ? setActiveTheme(elem.id) : ''
        })
    }, [data])
    const handleClick = (value, i) => {
        setActiveTheme(value.id)
        mutate(1)
    }
    if (isLoading) return <Loader />
    return (
        <Col sm="12">
            <Card>
                <CardBody>
                    <div className="title-header option-title justify-content-start">
                        <h5>{t("ThemeLibrary")}</h5>
                    </div>
                    <Row className="row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-sm-2 row-cols-1 g-lg-5 g-4 layout-selection-sec ratio_square">
                        {data?.map((theme, i) => (
                            <div key={i}>
                                <div className={`theme-card ${activeTheme == theme.id ? "active" : ""}`}>
                                    <div className="library-box" onClick={(e) => { e.preventDefault(); edit && router.push(`/theme/${theme.slug}`) }}>
                                        <a href="#javascript">
                                            <Image src={`${LiveImagePath}${theme.image}`} className="img-fluid bg-img bg_size_content" alt={theme?.name} height={250} width={300} />
                                        </a>
                                        <a href="#javascript" className="details-box">{t("ThemeDetails")}</a>
                                    </div>
                                    <div className="content-sec">
                                        <h5>{theme.name}</h5>
                                        {edit && <a href="#javascript" className="disable" onClick={() => handleClick(theme, i)}>{activeTheme == theme.id ? t("Activated") : t('Active')}</a>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Row>
                </CardBody>
            </Card >
        </Col >
    );
};

export default Theme;
