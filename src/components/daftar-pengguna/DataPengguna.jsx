// ** Import React
import React from 'react'

// ** Import Others
import { useNavigate } from 'react-router-dom'

// ** Import Components
import assets from '../../assets/assets'

const DataPengguna = ({ data,index }) => {
    const Navigate = useNavigate()

    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
   
    const currentDate = `${day}-${month}-${year}`;

    const umur = currentDate - data.tanggalLahir 

    const handleClick = () => {
        Navigate("/detail-pengguna",{
            state: {
                data,
            }
        })
    }

  return (
    <tbody>
        <tr 
            onClick={handleClick}
            className={` ${
                index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-[#FFFFFF]"
                } px-[2rem] py-[1.125rem] cursor-pointer`}>
                <td 
                    className="whitespace-nowrap px-6 py-4 flex items-center text-[15px]"
                    >
                                        
                    <img src={data.profile_picture_url} alt="photoprofile" className='max-w-[44px]' />

                    <div className="felx ms-3 ]">
                        <p className="font-[600]">{data.full_name}</p>
                        <p className="font-[400]">{data.email}</p>
                    </div>

                </td>
                <td className="whitespace-nowrap px-6 py-4">{data.phone_number}</td>
                <td className="whitespace-nowrap px-6 py-4 text-center">{data.created_at || currentDate}</td>
                <td className="whitespace-nowrap px-6 py-4 text-center">{data.umurAkun || umur}</td>
                <td className="whitespace-nowrap py-4 items-center">
                    <p className={` ${
                        data.statusAkun === "Aktif" ? "bg-[#DBF8D3] border border-[#45C521] text-[#45C521]" : "bg-[#F8D5D3] border border-[#C52920] text-[#C52920]"
                        } py-[7px] -mr-[6px] me-2 w-[160px] text-center rounded-xl text-[15px] font-[600]`}>
                        {data.statusAkun}
                    </p>
                </td>
            </tr>

    </tbody>
  )
}

export default DataPengguna
