// ** Import Jotai
import { useAtom } from "jotai";
import { sideNavItem } from "../../../jotai/sidenav-item";

// ** Import Other
import { Link } from "react-router-dom";

const ManyItems = (props) => {
  const { title, datas } = props;

  // ** Jotai State
  const [navItem, setNavItem] = useAtom(sideNavItem);

  return (
    <div className="space-y-7">
      <h5 className="text-[#262627] text-[16px] font-[500] px-3">{title}</h5>

      <div className="space-y-8">
        {datas.map((data, index) => (
          <Link
            to={data.link ?? "/"}
            key={index}
            className={`flex gap-3 items-center px-3 ${
              navItem === data.link
                ? "bg-[#E5F2FF] py-3 rounded-lg duration-500 "
                : "duration-500"
            }`}
            onClick={() => setNavItem(data.link)}
          >
            <img
              src={navItem === data.link ? data.active : data.icon}
              alt="icon"
            />

            <h1
              className={`text-[16px] ${
                navItem === data.link ? "text-[#0080FF]" : "text-[#96989C]"
              } font-[500] ${data.name === "Kereta Api" && "ml-[5px]"} ${
                data.name === "Hotel" && "ml-[8.5px]"
              }`}
            >
              {data.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManyItems;
