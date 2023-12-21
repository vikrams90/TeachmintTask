
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserList = ({ item }) => {
  const { posts } = useSelector((state) => state.posts);

  const navigate = useNavigate();
  const userPost = posts.filter((post) => post.userId === item.id).length;
 
  const handleClick = () => {
    navigate(`/${item.id}`);
  };

  return (
    <li
      onClick={handleClick}
      className='flex justify-between w-full cursor-pointer bg-slate-300 px-3 py-4'
    >
      <span>Name : {item.name}</span>
      <span>Posts : {userPost}</span>
    </li>
  );
};

export default UserList;
