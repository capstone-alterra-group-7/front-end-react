import assets from "../../../assets/assets"

export default function PessangerDetail({ data }) {
  return (
    <div>
        <div className="mt-2 bg-white px-[32px] py-[16px] text-[#262627]">
            <p className='font-[600] pb-[14px]'>Akun Pengguna</p>
                <div className="flex items-center">

                    <img src={assets.profile} alt="" />

                    <div className="flex flex-col ps-4">
                        <p className='font-[700]'>{data.person_name}</p>
                        <p>{data.account_id}</p>
                    </div>

                    <button className='bg-[#0080FF] text-white font-[600] text-[14px] w-[107px] h-[32px] rounded-lg ms-[32px]'>
                        Lihat Akun
                    </button>

                </div>
        </div>

            
        <div className="bg-white mt-2 px-[32px] py-[16px] text-[#262627]">

                <div className="border border-[#D2D7E0] rounded-lg px-[24px] py-[12px]">
                    <p className='text-[20px] font-[600]'>Data Pemesan</p>
                    <hr />

                    <div className="flex mt-4 leading-8">
                        <div className="me-4 font-[600]">
                            <p>Nama Pemesan</p>
                            <p>Nomor Hp</p>
                            <p>Email</p>
                        </div>

                        <div className="">
                            <p>{data.person_name}</p>
                            <p>{data.phone}</p>
                            <p>{data.email}</p>
                        </div>
                    </div>
                </div>

        </div>

        <div className="bg-white mt-2 px-[32px] py-[16px]">
                
                <p className='text-[20px] font-[600] mb-3'>Daftar Penumpang</p>

                <div className="border border-[#D2D7E0] rounded-lg p-[16px]">
                    <div className="leading-8">
                        <div className="flex justify-between">

                            <div className="">
                                <p className='font-[700]'>1. Tn. {data.person_name}</p>
                                <p className='ms-4 text-[#717275] font-[600]'>KTP - {data.ktp}</p>

                                <div className="flex ms-3 mt-2 mb-4">
                                    <p className='bg-[#EBEDF1] py-[6px] px-[12px] rounded-3xl me-2'>{data.origin_station}</p>
                                    <img src={assets.direction} alt="" />
                                    <p className='bg-[#EBEDF1] py-[6px] px-[12px] rounded-3xl ms-2'>{data.destination_stasion}</p>
                                </div>

                            </div>

                            <div className="flex flex-col justify-between">

                                <p className='bg-[#E5F2FF] text-[#0080FF] font-[600] text-[14px] py-[6px] px-[12px] rounded-xl'>{data.passenger_category}</p>
                                <p className='font-[600] text-[14px] text-[#717275]'>{data.class} {data.carriage}</p>

                            </div>

                        </div>

                        <hr />
                        
                        <div className="flex justify-between mt-3">
                            
                            <div className="">
                                <p className='font-[700]'>1. Tn. {data.person_name}</p>
                                <p className='ms-4 text-[#717275] font-[600]'>KTP - {data.ktp}</p>

                                <div className="flex ms-3 mt-2 mb-4">
                                    <p className='bg-[#EBEDF1] py-[6px] px-[12px] rounded-3xl me-2'>{data.origin_station}</p>
                                    <img src={assets.direction} alt="" />
                                    <p className='bg-[#EBEDF1] py-[6px] px-[12px] rounded-3xl ms-2'>{data.destination_stasion}</p>
                                </div>

                            </div>

                            <div className="flex flex-col justify-between">

                                <p className='bg-[#E5F2FF] text-[#0080FF] font-[600] text-[14px] py-[6px] px-[12px] rounded-xl'>{data.passenger_category}</p>
                                <p className='font-[600] text-[14px] text-[#717275]'>{data.class} {data.carriage}</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
