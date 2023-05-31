import React from "react"

export default function InputEditPengguna(props) {
    const {name, type, label, id, onChange, value} = props
  return (
    <div className="flex flex-col pb-5">

        <label 
            htmlFor={name}
            className='font-medium pb-3'>
                {label}
        </label>

        <input 
            type={type}
            name={name} 
            id={id}
            className='bg-[#F9FAFB] border border-[#D2D7E0] p-2 rounded-md outline-none
            focus:ring-blue-500 focus:border-blue-500 focus:ring-1'
            placeholder='123@gmail.com'
            onChange={onChange}
            value={value} />
            
    </div>
  )
}