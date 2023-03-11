import image1 from "./gallery1.jpg";
import image2 from "./gallery2.jpg";
import image3 from "./gallery3.jpg";
import image4 from "./gallery4.jpg";
import image5 from "./gallery5.jpg";
import image6 from "./gallery6.jpg";
import image7 from "./gallery7.jpg";
import image8 from "./gallery8.jpg";
import image9 from "./gallery9.jpg";
import image10 from "./gallery10.jpg";
import image11 from "./gallery11.jpg";
import image12 from "./gallery12.jpg";
import image13 from "./gallery13.jpg";
import image14 from "./gallery14.jpg";
import image15 from "./gallery15.jpg";
import image16 from "./gallery16.jpg";
import image17 from "./gallery17.jpg";
import image18 from "./gallery18.jpg";
import image19 from "./gallery19.jpg";
import image20 from "./gallery20.jpg";
import image21 from "./gallery21.jpg";
import image22 from "./gallery22.jpg";
import image23 from "./gallery23.jpg";
import image24 from "./gallery24.jpg";
import image25 from "./gallery25.jpg";

function shuffleObject(obj) {
  const entries = Object.entries(obj);
  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  return Object.fromEntries(entries);
}

const imagesOrdered = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
};

const images = shuffleObject(imagesOrdered);

export default images;
