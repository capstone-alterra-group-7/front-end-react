// ** Import React
import React from 'react'

// ** Import Others
import { useNavigate } from 'react-router-dom'

// ** Import Components
import assets from '../../assets/assets'

const DataPengguna = ({ data }) => {
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
            className="bg-[#F5F6F8] border-b transition duration-300 ease-in-out hover:bg-[#eaecee] ">
                <td 
                    className="whitespace-nowrap px-6 py-4 flex items-center"
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
                    <p className="bg-[#4CDB24] w-[192px] ms-10 text-center rounded-lg py-2 text-white">
                        {data.statusAkun ? "Aktif" : "Tidak Aktif"}
                    </p>
                </td>
            </tr>

    </tbody>
  )
}

export default DataPengguna