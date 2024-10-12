import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

function temperatuur(farenheit,){
    let IeCelsuis = (farenheit - 32)* 5/9;
    return IeCelsuis

}

console.log(temperatuur(5));