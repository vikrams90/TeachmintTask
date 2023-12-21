import { useSelector } from "react-redux";
import Blog from "./Blog";

const BlogList = ({ id }) => {
  const { posts } = useSelector((state) => state.posts);
  const userPost = posts.filter((post) => post.userId === Number(id));
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4 py-4 gap-3 overflow-hidden ">
      {userPost.map((item) => (
        <Blog key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default BlogList;
