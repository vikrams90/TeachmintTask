import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/user/userSlice";
import { useParams } from "react-router-dom";
import BlogList from "./BlogList";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getUser(Number(id)));
  }, [user]);

  if (!user) {
    return <h1>no user data to show</h1>;
  }
  return (
    <>
      <div className='bg-sky-950 text-white flex px-10 flex-col gap-4 py-4'>
        <h1 className='text-center text-4xl py-3'>Profile Page</h1>
        <div>
          <div className='flex flex-col md:flex-row text-center sm:text-left justify-between  text-white'>
            <p>{`name : ${user.name}`}</p>
            <p>{`Suite: ${user.address.suite} street: ${user.address.street} city : ${user.address.city}`}</p>
          </div>
          <div className='flex flex-col md:flex-row text-center sm:text-left justify-between  text-white'>
            <p>{`username ${user.username} | catchphrase ${user.company.catchPhrase}`}</p>
            <p>{`Email ${user.email} | phone ${user.phone}`}</p>
          </div>
        </div>
      </div>

          <section>
              <BlogList id={id}/>
      </section>
    </>
  );
};

export default UserProfile;
