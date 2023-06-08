import assets from "../../../assets/assets"

export default function PriceDetail({ data }) {
  return (
      <div className="bg-white py-[16px] px-[32px] mt-2">
                
                <p className="text-[20px] font-[600] mb-3">Rincian Harga</p>
                <div className="border border-[#D2D7E0] rounded-2xl p-[16px]">

                    <div className="flex justify-between mb-2">
                        <p>{data.train_name}</p>
                        <p className='font-[600]'>Rp. {data.ticket_price}</p>
                    </div>
                    <hr />

                    <div className="flex justify-between my-2">
                        <p>Biaya Layanan</p>
                        <p className='font-[600]'>Rp. {data.service_fee}</p>
                    </div>
                    <hr />

                    <div className="flex justify-between my-2">
                        <p>Asuransi Kereta Api</p>
                        <p className='font-[600]'>Rp. {data.insurance}</p>
                    </div>
                    <hr />
                    
                    <div className="flex justify-between my-2">
                        <p className='text-[20px] font-[600] text-[#4B4C4E]'>Total Akhir</p>
                        <p className='text-[#0080FF] text-[20px] font-[600]'>Rp. {data.price}</p>
                    </div>
                </div>
        </div>
  )
}
