// ** Import Other
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../services/base";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const CardDetailAkunPengguna = ({ data }) => {
  const { data: daftarPengguna } = useSWR(
    baseUrl(`/admin/user?limit=9999`),
    fetcher
  );

  const navigate = useNavigate();

  const findUser = daftarPengguna?.data?.find(
    (pengguna) => pengguna.id === data.user.user_id
  );

  const handleNavigate = () => {
    navigate("/detail-pengguna", {
      state: { data: { id: findUser.id, deleted_at: findUser.deleted_at } },
    });
  };

  return (
    <div>
      <div className="h-[116px] bg-[#FFFFFF] flex my-[8px] cursor-pointer px-[32px]">
        <h1 className="font-[600] text-[16px] text-[#262627] leading-[24px] mt-[13px]">
          Akun Pengguna
        </h1>

        <div className="w-[44px] h-[44px] flex items-center absolute -ml-[0.3rem] mt-[47px] mb-[18px] whitespace-nowrap">
          <img src={data.user.profile_picture_url} alt="" />

          <h1 className="text-[16px] font-[700]  flex leading-[24px] ml-[12px]">
            {data.user.full_name}
          </h1>
        </div>
        <button
          onClick={handleNavigate}
          className="bg-[#0080FF] w-[107px] absolute mt-[53px] ml-[226px] h-[32px] text-white rounded-[8px] flex items-center justify-center mb-[57px] "
        >
          <h1 className=" text-[14px] font-[600]">Lihat Akun</h1>
        </button>
      </div>
    </div>
  );
};

export default CardDetailAkunPengguna;
