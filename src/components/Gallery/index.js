import "./index.scss";
import images from "../../assets/images/gallery-images/gallery.js";
import slogan from "../../assets/images/slogan.jpg";

const images1 = images;
console.log(images1);

const Gallery = () => {
  return (
    <div className="gallery-container">
      {Object.entries(images).map(([key, value], index) => (
        <>
          <img src={value} alt={key} key={key} />
          {index % 2 === 1 && (
            <img src={slogan} alt="slogan" key={key + "-slogan"} />
          )}
        </>
      ))}
      <img src={slogan} alt="slogan" />
    </div>
  );
};

export default Gallery;
