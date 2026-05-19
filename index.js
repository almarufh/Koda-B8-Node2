import changeDate from "./src/manual.js";
import withMoment from "./src/moment.js"
import { createInterface } from "node:readline";

const cli = createInterface({
  input: process.stdin,
  output: process.stdout,
});



cli.question("Input tanggal : ", function (input) {
    console.clear()
    console.log(`\nResponse change date whit moment :`, withMoment(input));
    console.log("\n")
    console.log(`Response change date whitout moment :`, changeDate(input))
});