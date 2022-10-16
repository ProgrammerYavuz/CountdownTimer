let geriSayimTarihi = new Date("Dec 31, 2022 23:59:59").getTime();

let geriSayim = setInterval(() => {
  let simdikiTarih = new Date().getTime();

  let zamanFarki = geriSayimTarihi - simdikiTarih;

  let gun = Math.floor(zamanFarki / (1000 * 60 * 60 * 24));
  let saat = Math.floor((zamanFarki % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let dakika = Math.floor((zamanFarki % (1000 * 60 * 60)) / (1000 * 60));
  let saniye = Math.floor((zamanFarki % (1000 * 60)) / 1000);

  document.querySelector(".gun").innerHTML = gun < 10 ? `0${gun}` : gun;
  document.querySelector(".saat").innerHTML = saat < 10 ? `0${saat}` : saat;
  document.querySelector(".dakika").innerHTML = dakika < 10 ? `0${dakika}` : dakika;
  document.querySelector(".saniye").innerHTML = saniye < 10 ? `0${saniye}` : saniye;

  if (zamanFarki < 0) {
    clearInterval(geriSayim);
  }
}, 1000);