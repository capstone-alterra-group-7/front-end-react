// ** Import Redux
import { useDispatch, useSelector } from "react-redux";
import { addActive } from "../../../redux/sidebar/NavItemSlices";

// ** Import Other
import { Link } from "react-router-dom";

const SingleItem = ({ data }) => {
  // ** Redux State
  const isActive = useSelector((state) => state.navItem.isActive);
  const dispatch = useDispatch();

  return (
    <div>
      <Link
        to={data.link}
        onClick={() => dispatch(addActive(data.link))}
        className={`flex gap-3 px-3 ${
          isActive === data.link
            ? "bg-[#F5F6F8] py-3 rounded-lg duration-500 "
            : "duration-500"
        }`}
      >
        <img src={data.icon} alt="icon" />

        <h1
          className={`text-[16px] ${
            isActive === data.link ? "text-[#0080FF]" : "text-[#96989C]"
          } font-[500]`}
        >
          {data.name}
        </h1>
      </Link>
    </div>
  );
};

export default SingleItem;
