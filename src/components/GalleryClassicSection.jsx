// import React from 'react';
// import Pagination from '../common/Pagination';
// import { blogs } from '../data/HomeOneData/HomeOneData';
// import CommonSidebar from '../common/CommonSidebar';
// import BlogClassicItem from './items/BlogClassicItem';

// const GalleryClassicSection = () => {
//     return (
//         <>
//             <div className="blog-classic padding-y-120">
//                 <div className="container container-two">
//                     <div className="row gy-4">
//                         <div className="col-lg-8">
//                             {
//                                 blogs.map((blogItem, blogItemIndex) => {
//                                     return (
//                                         <BlogClassicItem blogItem={blogItem} key={blogItemIndex}/>
//                                     )
//                                 })
//                             }
//                             <Pagination/>
//                         </div>
//                         <div className="col-lg-4">
//                             <CommonSidebar renderSearch={true} renderProperties={false} renderTags={true}/>
//                         </div>  
//                     </div>
//                 </div>
//             </div>   
//         </>
//     );
// };

// export default GalleryClassicSection;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const GalleryClassicSection = () => {
    const images = [  
        '/images/gallery1.jpg',
        '/images/gallery2.jpg',
        '/images/gallery3.jpg',
        '/images/gallery4.jpg',
        '/images/gallery5.jpg',
        '/images/gallery6.jpg',
        '/images/gallery7.jpg',
        '/images/gallery8.jpg',
        '/images/gallery9.jpg',
        '/images/gallery10.jpg',
        '/images/gallery11.jpg',
        '/images/gallery12.jpg',
        '/images/gallery13.jpg',
        '/images/gallery14.jpg',
        '/images/gallery15.jpg',
        '/images/gallery16.jpg',
        '/images/gallery17.jpg',
        '/images/gallery18.jpg',
        '/images/gallery19.jpg',
        '/images/gallery20.jpg', ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid" />
                </div>
            ))}
        </Slider>
    );
};

export default GalleryClassicSection;
