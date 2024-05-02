const { Exception, STATIC_VALUE } = require("../constant/constant");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class RacingGameController {
  #inputView;
  #outputView;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  startGame() {
    this.inputCarNames();
  }

  inputCarNames() {
    this.#inputView.read(STATIC_VALUE.CAR_NAME_INPUT_MESSAGE, (carNames) => {
      try {
        this.validateCarNames(carNames);
        const carNameList = carNames.split(",");
        this.#outputView.render(carNameList);
      } catch (error) {
        this.#outputView.render(error);
        this.inputCarNames();
      }
    });
  }

  validateCarNames(carNames) {
    if (carNames === "") throw Exception.INVALID_INPUT;
  }
}

module.exports = RacingGameController;
