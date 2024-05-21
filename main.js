import inquirer from "inquirer";
let myBalance = 100000; //dollar
const myPin = 12345;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin codde!!!");
    let operatioAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw", "Check balance"],
        },
    ]);
    console.log(operatioAns);
    if (operatioAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is:" + myBalance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    ;
    if (operatioAns.operation === "Check balance") {
        console.log("Your account balance is:" + myBalance);
    }
}
;
if (pinAnswer.pin != myPin) {
    console.log("Incorrect pin number");
}
