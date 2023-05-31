// ** Import Assets
import assets from '../../assets/assets'

export default function BarPesananKA() {
  return (
    <div className='bg-white text-[#262627]'>
      <div className="grid grid-cols-3 gap-3 px-[32px] py-[16px]">

        <div className="title">
            <h1 className='text-[30px] font-[700]'>Pesanan Kereta Api</h1>
        </div>

        <div className="relative col-span-2">
            <input
                type="text"
                placeholder="Search"
                className="border w-full border-[#D2D7E0] py-2 px-11  rounded-lg focus:outline-none text-[16px] placeholder:text-[#96989C] placeholder:font-[400]"
            />

            <img
                src={assets.search}
                alt="search"
                className="absolute top-3 left-3"
            />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 px-[32px] py-[16px]">

        <div className="flex items-center">
            <p className='text-[14px] me-2'>Dari</p>

            <input 
                type="date" 
                name="dari" 
                id="dari"
                className='bg-[#F9FAFB] py-2 px-3 border border-[#D2D7E0] rounded-lg' />
        </div>

        <div className="flex items-center ms-1">
            <p className='text-[14px] me-2'>Hingga</p>

            <input 
                type="date" 
                name="dari" 
                id="dari"
                className='bg-[#F9FAFB] py-2 px-3 border border-[#D2D7E0] rounded-lg' />
        </div>

        <div className="invisible">

        </div>

        <div className="relative">
            <select className="appearance-none  w-full px-4 py-[9.5px]  rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[16px] focus:outline-none">
                <option value="">Urutkan</option>
                <option value="2">2</option>
            </select>

            <img
                src={assets.iconUrutkanDaftarKa}
                className="absolute top-[22px] right-5"
                alt="urutkan"
            />
        </div>

        <div className="relative">
            <select className="appearance-none w-full px-4 text-left py-[9.5px] rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[500] text-[16px] focus:outline-none">
                <option value="">Filter</option>
                <option value="2">2</option>
            </select>

            <img
                src={assets.iconFilterDaftarKa}
                className="absolute top-[15px] right-5"
                alt="urutkan"
            />
        </div>
      </div>
    </div>
  )
}
