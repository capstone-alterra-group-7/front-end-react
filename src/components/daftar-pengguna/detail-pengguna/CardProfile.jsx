// ** Import Other
import moment from "moment";

export default function CardProfile({ data, detailPengguna }) {
  return (
    <div className="bg-white flex flex-col flex-wrap">
      <div className="flex flex-col items-center justify-center pt-[40px]">
        <img
          src={detailPengguna?.data?.profile_picture_url}
          alt="profileimage"
          className="w-[158px] h-[158px] object-cover rounded-full"
        />

        <h1 className="text-[24px] mt-[24px] mb-10">
          {detailPengguna?.data?.full_name}
        </h1>
      </div>

      <div className="detail-information m-6 border border-[#D2D7E0] rounded-xl p-5">
        <h1 className="text-[20px] font-semibold pb-2">Informasi Akun</h1>
        <hr />

        <table className="leading-9">
          <th className="text-left font-semibold pt-4">
            <tr>ID Akun</tr>
            <tr>Email</tr>
            <tr>Tanggal Mendaftar</tr>
            <tr>Umur Akun</tr>
            <tr>Status Akun</tr>
          </th>

          <th className="text-left font-normal ps-7 pt-4">
            <tr>{detailPengguna?.data?.id}</tr>
            <tr>{detailPengguna?.data?.email}</tr>
            <tr>
              {moment(detailPengguna?.data?.created_at).format("D MMMM YYYY")}{" "}
            </tr>
            <tr>{moment(detailPengguna?.data?.created_at).fromNow(true)}</tr>
            <tr>
              {detailPengguna?.data?.deleted_at === "" ? "Aktif" : "Non Aktif"}
            </tr>
          </th>
        </table>
      </div>

      <div className="detail-information m-6 border border-[#D2D7E0] rounded-xl p-5">
        <h1 className="text-[20px] font-semibold pb-2">Data Pengguna</h1>
        <hr />

        <table className="leading-9">
          <th className="text-left font-semibold pt-4">
            <tr>Tanggal Lahir</tr>
            <tr>Umur Pengguna</tr>
            <tr>Nomor Handphone</tr>
          </th>

          <th className="text-left font-normal ps-7 pt-4">
            <tr>
              {detailPengguna?.data?.birth_date !== ""
                ? moment(data.birth_date).format("D MMMM YYYY")
                : "null"}
            </tr>
            <tr>
              {detailPengguna?.data?.birth_date !== ""
                ? moment(data.birth_date).fromNow(true)
                : "null"}
            </tr>
            <tr>{detailPengguna?.data?.phone_number}</tr>
          </th>
        </table>
      </div>
    </div>
  );
}
