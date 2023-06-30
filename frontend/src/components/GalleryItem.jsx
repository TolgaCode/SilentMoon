import { Link } from "react-router-dom";

import "../sass/GalleryItem.scss";

const GalleryItem = (props) => {
    return (
        <div>
            <h3>{props.category}</h3>
            <Link to={`/video/${props.id}`}><img src={import.meta.env.VITE_BE_URL + `/api/thumbnail/${props.thumbnail}`} alt="thumbnail" className="gallery_img" /></Link>
        </div>
    );
}

export default GalleryItem;