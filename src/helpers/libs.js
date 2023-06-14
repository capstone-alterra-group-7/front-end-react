import assets from "../assets/assets";

// Function for convert number to rupiah format (Rp x.xxx)
export const rupiah = (number) => {
  if (!number) return "Rp 0";
  else
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      maximumSignificantDigits: 10,
      currency: "IDR",
    }).format(number);
};

// Function for choosing icon
const assetsCollection = {
  wifi: assets.iconWifi,
  park: assets.iconParking,
  restoran: assets.iconRestoran,
  restaurant: assets.iconRestoran,
  AC: assets.iconAC,
  service: assets.iconRoomService,
  pool: assets.iconSwimPool,
  renang: assets.iconSwimPool,
  breakfast: assets.iconDining,
  bath: assets.iconBath,
  ATM: assets.iconATM,
  other: assets.iconOther,
};
export const chooseIconFacility = (key) => {
  for (var property in assetsCollection) {
    if (assetsCollection.hasOwnProperty(property) && key.toLowerCase().includes(property.toString().toLowerCase())) {
      return assetsCollection[property];
    }
  }

  return assetsCollection.other;
};

// Function for find lowest price
export const findLowestRoomPrice = (data) => {
  if (data === null) return 0;

  let tmp = data[0].discount_price;
  for (let i = 1; i < data.length; i++) {
    if (tmp > data[i].discount_price) tmp = data[i].discount_price;
  }
  return tmp;
};
