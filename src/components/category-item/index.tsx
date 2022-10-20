import "./index.scss";

interface ICategory {
  imageUrl: string;
  title: string;
}
const CategoryItem = (props: { category: ICategory }) => (
  <div className="category-container">
    <img
      className="background-image"
      style={{ backgroundImage: `url(${props.category.imageUrl})` }}
    />
    <div className="category-body-container">
      <h2>{props.category.title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);
export default CategoryItem;
