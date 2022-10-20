import CategoryItem from "../category-item";
import "./index.scss";

const Directory = (props: { categories: any[] }) => (
  <div className="directory-container">
    {props.categories.map((obj) => (
      <CategoryItem category={obj} key={obj.id} />
    ))}
  </div>
);
export default Directory;
