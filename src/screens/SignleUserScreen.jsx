import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchTime, fetchTimeZone } from "../features/user/timeSlice";
import Time from "../component/Time";
import UserProfile from "../component/UserProfile";


const SignleUserScreen = () => {
  const [selectedValue, setSelectedValue] = useState("Asia/Kolkata");
  const dispatch = useDispatch();
  const { timezones } = useSelector((state) => state.time);
  // use effect for fetching time accorting to changed timeZone
  useEffect(() => {
    dispatch(fetchTime(selectedValue));
  }, [selectedValue]);

  // useEffect for fetching and timeZone
  useEffect(() => {
    dispatch(fetchTimeZone());
  }, []);

  // handling dropdown selection
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    dispatch(fetchTime(selectedValue));
  };

  return (
    <main>
      {/* time section */}
      <section className='relative h-full bg-slate-700'>
        <div className='flex flex-col sm:flex-row justify-between px-10 py-3'>
          <NavLink to={"/"} className='bg-orange-500 p-2'>
            back
          </NavLink>
          <div className='flex flex-col sm:flex-row gap-4'>
            <select className="py-2" value={selectedValue} onChange={handleChange}>
              <option key={"default"} value={"Asia/Kolkata"} defaultValue>
                Asia/Kolkata
              </option>
              {timezones.map((timezone, i) => (
                <option key={i} value={timezone}>
                  {timezone}
                </option>
              ))}
            </select>
            <span className='flex text-white px-3 sm:flex-row justify-center items-center'>
              <Time />
            </span>
          </div>
        </div>
      </section>

      <section>
        <UserProfile/>
      </section>
    </main>
  );
};

export default SignleUserScreen;
