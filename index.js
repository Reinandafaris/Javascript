var namaUser = prompt("siapa nama kamu?");
var userAnswer = prompt(
  `mau masuk universitas ga ${namaUser}?`
);

if (userAnswer === "mau") {
  var chanceGetUniv = Math.random() * 100;
  chanceGetUniv = Math.floor(chanceGetUniv);
  console.log(chanceGetUniv);

  var nilaiUser = prompt(
    `berapa nilai utbk ${namaUser}?`
  );

  if (nilaiUser >= 80) {
    alert(
      `kemungkinan ${namaUser} masuk Universitas Indonesia`
    );
  } else if (nilaiUser < 80 && nilaiUser >= 60) {
    alert(
      `kemungkinan ${namaUser} masuk Universitas KapanLagi`
    );
  } else if (
    nilaiUser < 80 &&
    nilaiUser < 60 &&
    nilaiUser <= 10
  ) {
    alert(`kemungkinan ${namaUser} Jualan Koran`);
  } else {
    alert(
      `kemungkinan ${namaUser} Kurang Membaca`
    );
  }
} else {
  alert(`semoga beruntung ${namaUser}!`);
}
