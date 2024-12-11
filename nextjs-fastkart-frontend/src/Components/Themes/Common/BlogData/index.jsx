import NoDataFound from '@/Components/Common/NoDataFound';
import BlogIdsContext from '@/Helper/BlogIdsContext';
import { dateFormate } from '@/Utils/CustomFunctions/DateFormate';
import TextLimit from '@/Utils/CustomFunctions/TextLimit';
import RatioImage from '@/Utils/RatioImage';
import Link from 'next/link';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import Slider from 'react-slick';

const BlogData = ({ classes = {}, dataAPI ,description=false}) => {
    const { t } = useTranslation( 'common');
    const { filteredBlog } = useContext(BlogIdsContext);
    return (
        <>
            <div className={classes?.sliderClass ? classes?.sliderClass : ''}>
                <Slider {...classes?.sliderOption}>
                    {filteredBlog?.map((elem, i) => (
                        <div key={i}>
                            <div className={`blog-box ${elem?.is_sticky == 1 ? 'sticky-blog-box' : ''} ${classes?.ratioClass ? classes?.ratioClass : ''}`}>
                                {elem?.is_featured ? (
                                    <div className='blog-label-tag'>
                                        <span>{t('Featured')}</span>
                                    </div>
                                ) : null}
                                <div className='blog-box-image'>
                                    <Link href={`/blogs/${elem?.slug}`} className='blog-image'>
                                        <RatioImage src={elem?.blog_thumbnail?.original_url} className='bg-img' alt='blog' height={classes?.height} width={classes?.width} />
                                    </Link>
                                </div>

                                <Link href={`/blogs/${elem?.slug}`} className='blog-detail'>
                                    <h6>{dateFormate(elem?.created_at)}</h6>
                                    <h5>{elem?.title}</h5>
                                </Link>
                                {description &&
                                    <TextLimit value={elem?.description} maxLength={100} tag='p' />
                                }
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {!filteredBlog &&
                <NoDataFound data={{ customClass: 'bg-light no-data-added', title: 'No Blog Found' }} />
            }

        </>
    );
};

export default BlogData;
