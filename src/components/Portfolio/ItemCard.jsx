import { BiLink } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const ItemCard = ({ item }) => {
  const { id, image, title, category, liveDemo, codeLink } = item;
  return (
    <div className="work_card">
      <div className="work_thumbhnail">
        <img src={image} alt="" />
        <div className="work_mask"></div>
      </div>
      <span className="work_category">{category}</span>
      <h3 className="work_title">{title}</h3>
      <div className="work_buttons flex justify-around">
        <a href="#" className="work_button flex items-center gap-1 px-2">
          <BiLink className="work_button-icon"></BiLink> codes
        </a>
        <a href="#" className="work_button flex items-center gap-1 md:ml-32 ml-20 px-2">
          <AiOutlineEye className="work_button-icon"></AiOutlineEye> live
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
