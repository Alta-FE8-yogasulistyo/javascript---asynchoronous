function jajanBoba(uang, callback) {
  const boba = 5000;
  const sisa_uang = uang - boba;
  setTimeout(() => {
    console.log(sisa_uang);
  }, 5000);

  setTimeout(() => {
    callback(sisa_uang);
  }, 9000);
}

function jajanSeblak(uang) {
  const seblak = 8000;
  const sisa_akhir = uang - seblak;
  if (sisa_akhir < 0) {
    console.log("maaf uang kamu belum cukup beli seblak");
  } else {
    console.log("sisa uang kamu sebesar ", sisa_akhir);
  }
}

jajanBoba(13000, jajanSeblak);
