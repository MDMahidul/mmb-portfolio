import { useState, useEffect } from "react";
import "./Portfolio.css";
import ItemCard from "./ItemCard";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Everything"); // Initialize with "Everything"
  const [showAll,setShowAll]=useState(false);

  const toggleShowAll = ()=>{
    setShowAll(!showAll);
  }

  useEffect(() => {
    fetch("work.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      });
  }, []);

  const filterItems = (categoryItem) => {
    const updatedItems = items.filter((curItems) => {
      return curItems.category === categoryItem;
    });
    setFilteredItems(updatedItems);
    setActiveCategory(categoryItem); // Update the active category
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span
          className={`work_item ${
            activeCategory === "Everything" ? "active_Tab" : ""
          }`}
          onClick={() => {
            setFilteredItems(items);
            setActiveCategory("Everything");
          }}
        >
          Everything
        </span>
        <span
          className={`work_item ${
            activeCategory === "frontend" ? "active_Tab" : ""
          }`}
          onClick={() => filterItems("frontend")}
        >
          Frontend
        </span>
        <span
          className={`work_item ${
            activeCategory === "fullstack" ? "active_Tab" : ""
          }`}
          onClick={() => filterItems("fullstack")}
        >
          Fullstack
        </span>
        <span
          className={`work_item ${
            activeCategory === "design" ? "active_Tab" : ""
          }`}
          onClick={() => filterItems("design")}
        >
          Graphics
        </span>
      </div>
      <div
        className="work_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
      >
        {showAll
          ? filteredItems.map((item) => (
              <ItemCard key={item.id} item={item}></ItemCard>
            ))
          : filteredItems
              .slice(0, 6)
              .map((item) => <ItemCard key={item.id} item={item}></ItemCard>)}
      </div>
      {filteredItems.length > 6 && !showAll && (
        <div className="text-center mt-10" data-aos='zoom-in'>
          <button className="my-btn" onClick={toggleShowAll}>
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
