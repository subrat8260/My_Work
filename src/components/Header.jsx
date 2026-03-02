import { ButtonAsChild } from "./ButtonAsChild";
import { InputInline } from "./InputInline";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("isLoggedIn");
  const handleClick = () => {
    console.log(loggedIn);
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <>
      <div className="w-xl hidden md:block">
        <InputInline />
      </div>
      <div className="flex space-x-1">
        {loggedIn ? (
          <>
            <ButtonAsChild btn={"Logout"} handleClick={handleClick} />
          </>
        ) : (
          <>
            <ButtonAsChild btn={"LogIn"} PageLink={"/login"} />
            <ButtonAsChild btn={"SignUp"} PageLink={"/signup"} />
          </>
        )}
      </div>
    </>
  );
};
export default Header;
