import { BiLink } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const ItemCard = ({ item }) => {

  const { id, image, title, category, liveDemo, codeLink } = item;
   const cardClass = category === "design" ? "image-design" : "image-container";

  return (
    <div className={`work_card ${cardClass} shadow-lg`}>
      <div className="work_thumbhnail">
        <img src={image} alt="" />
        <div className="work_mask"></div>
      </div>
      <span className="work_category">{category}</span>
      <h3 className="work_title">{title}</h3>
      <div className="work_buttons flex justify-around">
        {category === "design" ? (
          <a
            target="__blank"
            href={liveDemo}
            className="work_button flex items-center gap-1 px-2"
          >
            <AiOutlineEye className="work_button-icon"></AiOutlineEye> design Link
          </a>
        ) : (
          <>
            <a
              target="__blank"
              href={codeLink}
              className="work_button flex items-center gap-1 px-2"
            >
              <BiLink className="work_button-icon"></BiLink> codes
            </a>
            <a
              target="__blank"
              href={liveDemo}
              className="work_button flex items-center gap-1 md:ml-32 ml-20 px-2"
            >
              <AiOutlineEye className="work_button-icon"></AiOutlineEye> live
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
