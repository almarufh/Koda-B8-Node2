console.clear()
import changeDate from "./src/manual.js";
import withMoment from "./src/moment.js"
import {createInterface} from "node:readline";

const cli = createInterface({
  input: process.stdin,
  output: process.stdout,
});



cli.question("Input tanggal : ", function (input) {
    console.clear()
    let usemoment = withMoment(input);
    let notUse = changeDate(input)
    if (usemoment !== notUse) {
        console.log("Format tanggal salah");
        return; 
    }
    console.log(`\nResponse change date whit moment :`, usemoment);
    console.log("\n")
    console.log(`Response change date whitout moment :`, notUse)
})
cli.close;