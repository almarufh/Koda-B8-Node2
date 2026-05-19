console.clear();
import changeDate from "./src/manual.js";
import withMoment from "./src/moment.js";
import {createInterface} from "node:readline";

const cli = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main () {
  let message = `Selamat Datang Dalam Program mengubah Format tanggal dari "DD-MM-YYYY" to 'DD/MM/YYYY'\n\n`;
  message += `1. With External Package\n`;
  message += `2. Without External Package\n`;
  message += `\nExit\n`;
  cli.question(message + "\n\nPilih (1-2)/Exit : ", function (input) {
    console.clear();
    switch (input.toUpperCase()) {
    case "1": {
      fwithMoment ();
      break;
    }
    case "2": {
      withoutMoment();
      break;
    }
    case "EXIT": {
      cli.close();
      break;
    }
    default: {
      main();
      break;
    }
    }
  });
}


function fwithMoment () {
  console.clear();
  cli.question("\nInput tanggal format DD-MM-YYYY :", function (input) {
    let usemoment = withMoment(input);
    let notUse = changeDate(input);
    if (usemoment !== notUse) {
      console.clear();
      console.log("\n\nFormat tanggal salah");
      backToMenu();
      return;
    }
    console.clear();
    console.log(`\nResponse change date whith moment :`, usemoment);
    backToMenu();
  });
}

function withoutMoment () {
  cli.question("Input tanggal format DD-MM-YYYY : ", function (input) {
    let usemoment = withMoment(input);
    let notUse = changeDate(input);
    if (usemoment !== notUse) {
      console.clear();
      console.log("\n\nFormat tanggal salah\n\n");
      backToMenu();
      return;
    }
    console.clear();
    console.log(`\nResponse change date whithout moment :`, notUse);
    backToMenu();
  });
}

function backToMenu() {
  cli.question("Kembali ke Menu Awal y/n : ", function (input) {
    if (input.toUpperCase() !== "Y") {
      cli.close();
      return;
    }
    main();
  });
}
main();