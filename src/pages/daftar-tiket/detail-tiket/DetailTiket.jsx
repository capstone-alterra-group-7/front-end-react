import React from 'react'
import BarDetailTiket from '../../../components/daftar-tiket/detail-tiket/BarDetailTiket'
import TrainDetail from '../../../components/daftar-tiket/detail-tiket/TrainDetail'
import Gerbong from '../../../components/daftar-tiket/detail-tiket/Gerbong'

export default function DetailTiket() {
  return (
    <div className='fixed overflow-y-auto left-0 right-0 h-full bg-[#F5F6F8]'>
      <BarDetailTiket/>
      <TrainDetail/>
      <Gerbong/>

    </div>
  )
}
