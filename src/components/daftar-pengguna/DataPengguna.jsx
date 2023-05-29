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
                index % 2 === 0 ? "bg-[#F5F6F8]" : "bg-[#EBEDF1]"
                } px-[2rem] py-[1.125rem] cursor-pointer`}>
                <td 
                    className="whitespace-nowrap px-6 py-4 flex items-center text-[15px]"
                    >
                                        
                    <img src={assets.profile} alt="" />

                    <div className="felx ms-3 ]">
                        <p className="font-[600]">{data.nama}</p>
                        <p className="font-[400]">{data.email}</p>
                    </div>

                </td>
                <td className="whitespace-nowrap px-6 py-4">{data.noTelp}</td>
                <td className="whitespace-nowrap px-6 py-4 text-center">{data.tanggalDaftar || currentDate}</td>
                <td className="whitespace-nowrap px-6 py-4 text-center">{data.umurAkun || umur}</td>
                <td className="whitespace-nowrap py-4 items-center">
                    <p className={` ${
                        data.statusAkun === "Aktif" ? "bg-[#4CDB24]" : "bg-[#DB2D24]"
                        } py-[7px] -mr-[6px] w-[190px] text-center rounded-xl text-white text-[15px] font-[600]`}>
                        {data.statusAkun}
                    </p>
                </td>
            </tr>

    </tbody>
  )
}

export default DataPengguna
