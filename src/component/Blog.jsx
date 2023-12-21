import { useState } from "react";

const Blog = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  let refreence;

  const handleOutsideClick = (e) => {
    if (e.target.className.includes) {
      setIsOpen(false);
    }
  };
  const handleClick = (e) => {
    setIsOpen(true);
  };
  if (isOpen) {
    return (
      <>
        <div
          onClick={handleOutsideClick}
          className='outside h-screen fixed w-screen top-0 z-20 flex justify-center items-center cursor-pointer'
        >
          <dialog
            className='px-5 py-5 w-1/2'
            onClick={handleClick}
            open={isOpen}
          >
            <h1 className='child'> title : {item.title}</h1>
            <p className='child'> post: {item.body}</p>
          </dialog>
        </div>
        <li
          onClick={handleClick}
          ref={refreence}
          className='w-full bg-red-500 px-4 py-6 mymodal'
        >
          <h1 className='child'> title : {item.title.slice(0, 50)}.....</h1>
          <p className='child'> post: {item.body.slice(0, 100)}......</p>
        </li>
      </>
    );
  }
  return (
    <>
      <li
        onClick={handleClick}
        ref={refreence}
        className='w-full bg-red-500 px-4 py-6 cursor-pointer mymodal'
      >
        <h1 className='child'> title : {item.title.slice(0, 50)}.....</h1>
        <p className='child'> post: {item.body.slice(0, 100)}......</p>
      </li>
    </>
  );
};

export default Blog;
