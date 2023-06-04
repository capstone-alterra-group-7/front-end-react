// ** Import Redux
import { useDispatch, useSelector } from "react-redux";
import { addActive } from "../../../redux/sidebar/NavItemSlices";

// ** Import Other
import { Link } from "react-router-dom";

const ManyItems = (props) => {
  const { title, datas } = props;

  // ** Redux State
  const isActive = useSelector((state) => state.navItem.isActive);
  const dispatch = useDispatch();

  return (
    <div className="space-y-7">
      <h5 className="text-[#262627] text-[16px] font-[500] px-3">{title}</h5>

      <div className="space-y-9">
        {datas.map((data, index) => (
          <Link
            to={data.link ?? "/"}
            key={index}
            className={`flex gap-3 px-3 ${
              isActive === data.link
                ? "bg-[#E5F2FF] py-3 rounded-lg duration-500 "
                : "duration-500"
            }`}
            onClick={() => dispatch(addActive(data.link))}
          >
            <img src={data.icon} alt="icon" />

            <h1
              className={`text-[16px] ${
                isActive === data.link ? "text-[#0080FF]" : "text-[#96989C  ]"
              } font-[500]`}
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
