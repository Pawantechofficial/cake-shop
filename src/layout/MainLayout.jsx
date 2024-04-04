"use client";
import { useEffect } from "react";
import { useUserProfileQuery } from "../provider/redux/query/Auth.query";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../provider/redux/slice/user.slice";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { data, isError, isFetching, isLoading, status } =
    useUserProfileQuery();
  console.log(data);
  console.log("my error" + isError);
  const pathName = usePathname();
  console.log({ data });
  useEffect(() => {
    if (data && data.user) {
      dispatch(setUser(data.user));
    } else {
      dispatch(removeUser());
    }
  }, [pathName, data]);
  return children;
};
export default MainLayout;
