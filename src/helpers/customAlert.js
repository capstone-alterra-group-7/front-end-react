import Swal from "sweetalert2";

export const customAlert = (image, title, description) => {
  return Swal.fire({
    customClass: {
      popup: "rounded-[24px]",
    },
    html: `
    <div>
      <img style='margin-bottom: 30px;' src=${image} alt="photo" />

      <h1 style='color : #0066CC; font-size: 32px; font-weight: 700'>${title}</h1>

      <p style='color : #717275; font-size: 14px; font-weight: 400; margin-top: 10px; margin-bottom: 20px; text-align: center'>${description}</p>
    
    </div>
  `,

    showConfirmButton: false,
    width: 445,
    timer: 2000,
  });
};
