// ** Import React
import { useState } from "react";

// ** Import Components
import ButtonNavigation from "./ButtonNavigation";
import KursiAvailable from "./KursiAvailable";
import KursiInformation from "./KursiInformation";

export const DetailKursi = () => {
  const [dummy, setDummy] = useState({ title: "Gerbong 1", dummyData });

  return (
    <div className="px-14 space-y-20">
      <div className="flex justify-between items-center">
        <ButtonNavigation
          sebelumnya
          dummyData={dummyData}
          dummyData2={dummyData2}
          setDummy={setDummy}
        />

        <h1 className="text-[#262627] text-[20px]">{dummy.title}</h1>

        <ButtonNavigation
          selanjutnya
          dummyData={dummyData}
          dummyData2={dummyData2}
          setDummy={setDummy}
        />
      </div>

      <div className="space-y-14 xl:px-5 2xl:px-14">
        <div className="space-y-11">
          <div className="space-y-4">
            <KursiAvailable space datas={dummy.dummyData} title="E" />
            <KursiAvailable space datas={dummy.dummyData} title="D" />
          </div>

          <div className="space-y-4">
            <KursiAvailable datas={dummy.dummyData} no title="C" />
            <KursiAvailable datas={dummy.dummyData} title="B" />
            <KursiAvailable datas={dummy.dummyData} title="A" />
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-[12px] text-[#262627] font-[700]">Keterangan</h5>

          <div className="flex items-center gap-7">
            <KursiInformation title="Kosong" />
            <KursiInformation title="Terisi" filled />
          </div>
        </div>
      </div>
    </div>
  );
};

const dummyData = [
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: false },
  { dummy: false },
];

const dummyData2 = [
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: false },
  { dummy: false },
];
