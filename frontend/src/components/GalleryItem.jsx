import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../sass/GalleryItem.scss";

const GalleryItem = (props) => {
    const [size, setSize] = useState("");

    useEffect(() => {
        let number = Math.floor(Math.random() * 3) + 1;

        if (number === 1) {
            setSize("thumbnailSmall");
        } else if (number === 2) {
            setSize("thumbnailMedium");
        } else if (number === 3) {
            setSize("thumbnailLarge");
        }
    }, []);

    const backgroundImageStyle = {
        backgroundImage: `url(${import.meta.env.VITE_BE_URL}/api/thumbnail/${props.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
    };

    return (
        <><Link className={`gallery_item ${size}`} style={backgroundImageStyle} to={`/video/${props.id}`}>
            <div >
                <h3 className="video_category_headline">{props.category}</h3>
            </div >
        </Link>
        </>
    );
};

export default GalleryItem;


