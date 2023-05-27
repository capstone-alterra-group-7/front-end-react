// ** Import Components
import InputEditPengguna from './InputEditPengguna'
import InputPassword from './InputPassword'

export default function FormEditPengguna() {
  return (
    <div className="grid gap-6 mb-6  bg-white p-10">
      <div className="space-y-5">
            <div className="flex items-center">
                <h1 className='text-[20px] font-[600] pe-3'>Keaktifan Pengguna</h1>
                <input
                    name="status"
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#0080FF] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#0080FF] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-#0080FF checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] shadow-md"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault01"
                />
            </div>
            <p className="text-[16px] text-slate-900/50 font-[400]">
                Pengguna Aktif
            </p>
        </div>
        <div className="informasi-akun">
            <h1 className='text-[20px] font-semibold pb-5'>Informasi Akun</h1>

            <InputEditPengguna
                name={'email'}
                type={'email'}
                label={'Email'} 
            />

            <InputPassword
                name={'password'}
                label={'Password'}/>

            <InputPassword
                name={'confirmPassword'}
                label={'Konfirmasi Password'}/>

          </div>

          <div className="detail-pengguna">
            <h1 className='text-[20px] font-semibold pb-5'>Detail Pengguna</h1>

            <InputEditPengguna
                name={'name'}
                type={'text'}
                label={'Nama Pengguna'}
            />

            <InputEditPengguna
                name={'birthDate'}
                type={'date'}
                label={'Tanggal Lahir'}
            />

            <InputEditPengguna
                name={'phoneNumber'}
                type={'text'}
                label={'Nomor Handphone'}
            />

        </div>
    </div>
  )
}