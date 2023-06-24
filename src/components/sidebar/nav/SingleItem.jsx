// ** Import Jotai
import { sideNavItem } from "../../../jotai/sidenav-item";
import { useAtom } from "jotai";

// ** Import Other
import { Link } from "react-router-dom";

const SingleItem = ({ data }) => {
  // ** Jotai State
  const [navItem, setNavItem] = useAtom(sideNavItem);

  return (
    <div>
      <Link
        to={data.link}
        onClick={() => setNavItem(data.link)}
        className={`flex gap-3 px-3 ${
          navItem === data.link
            ? "bg-[#F5F6F8] py-3 rounded-lg duration-500 "
            : "duration-500"
        }`}
      >
        <img src={navItem === data.link ? data.active : data.icon} alt="icon" />

        <h1
          className={`text-[16px] ${
            navItem === data.link ? "text-[#0080FF]" : "text-[#96989C]"
          } font-[500]`}
        >
          {data.name}
        </h1>
      </Link>
    </div>
  );
};

export default SingleItem;
