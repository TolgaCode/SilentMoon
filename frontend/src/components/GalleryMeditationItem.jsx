// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "../sass/GalleryItem.scss";

// const GalleryMeditationItem = (props) => {
//     const [size, setSize] = useState("");
//     console.log(props.filename
//     )
//     useEffect(() => {
//         let number = Math.floor(Math.random() * 3) + 1;

//         if (number === 1) {
//             setSize("thumbnailSmall");
//         } else if (number === 2) {
//             setSize("thumbnailMedium");
//         } else if (number === 3) {
//             setSize("thumbnailLarge");
//         }
//     }, []);

//     const backgroundImageStyle = {
//         backgroundImage: `url(${import.meta.env.VITE_BE_URL}/api/image/${props.filename})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         objectFit: "cover",
//     };

//     return (
//         // <p>
//         //     <img src={props.thumbnail}></img>

//         // </p>
//         <><Link className={`gallery_item ${size}`} style={backgroundImageStyle} to={`/music`} >
//             <div >

//                 <h3 className="video_category_headline">{props.category}</h3>
//             </div >
//         </Link>
//         </>
//     );
// };
// // className={`gallery_item ${size}`} style={backgroundImageStyle} to={`/music`}
// export default GalleryMeditationItem;


