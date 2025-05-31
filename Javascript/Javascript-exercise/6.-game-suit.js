// gunting batu kertas

const gunting = "gunting";
const batu = "batu";
const kertas = "kertas";

let userScore = 0;
let computerScore = 0;

let roundToPlay = 3;

for (i = 1; i <= roundToPlay; i++) {
  let user = Math.floor(Math.random() * 3 + 1);
  console.log(user);
  let computer = Math.floor(Math.random() * 3 + 1);
  console.log(computer);

  let userString = "";
  let computerString = "";

  switch (user) {
    case 1:
      userString = "gunting";
      break;
    case 2:
      userString = "batu";
      break;
    case 3:
      userString = "kertas";
  }

  switch (computer) {
    case 1:
      computerString = "gunting";
      break;
    case 2:
      computerString = "batu";
      break;
    case 3:
      computerString = "kertas";
  }

  console.log(`============== RONDE KE-${i}==============`);

  if (userString === computerString) {
    console.log(`ronde ke-${i} seri, sehingga harus diulang`);
    i--;
    continue;
  } else if (
    (userString === "gunting" && computerString === "kertas") ||
    (userString === "kertas" && computerString === "batu") ||
    (userString === "batu" && computerString === "gunting")
  ) {
    userScore++;
    console.log(
      `ronde ke-${i} dimenangkan oleh user dengan mengeluarkan ${userString} dan computer mengeluarkan ${computerString}`
    );
  } else {
    computerScore++;
    console.log(
      `ronde ke-${i} dimenangkan oleh computer dengan mengeluarkan ${computerString} dan user mengeluarkan ${userString}`
    );
  }
}

console.log(`==========HASIL AKHIR==========`);

if (userScore > computerScore) {
  console.log(`user menang`);
} else if (computerScore > userScore) {
  console.log(`computer menang`);
} else {
  console.log(`hasil seri`);
}
