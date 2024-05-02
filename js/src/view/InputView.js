const { RL } = require("../constant/constant");

class InputView {
  #rl;

  constructor() {
    this.#rl = RL.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  read(message, callback) {
    this.#rl.question(message, (input) => {
      callback(input);
    });
  }

  close() {
    this.#rl.close();
  }
}

module.exports = InputView;
