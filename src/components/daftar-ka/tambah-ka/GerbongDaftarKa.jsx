const GerbongDaftarKa = () => {
  const data = {
    status: "active",
    code_train: "12345",
    name: "Coba",
    rute: [
      {
        stasiun_id: 1,
        arrive_time: "20.00",
      },
      {
        stasiun_id: 3,
        arrive_time: "20.00",
      },
    ],
  };

  return <div className="px-10 py-12 space-y-16 h-full">GerbongDaftarKa</div>;
};

export default GerbongDaftarKa;
