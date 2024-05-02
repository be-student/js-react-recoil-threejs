const RL = require("readline");

const STATIC_VALUE = Object.freeze({
  CAR_NAME_INPUT_MESSAGE:
    "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)",
  CAR_NAME_INPUT_ERROR_MESSAGE: "입력이 유효하지 않습니다. 다시 입력해주세요.",
  TRY_COUNT_INPUT_MESSAGE: "시도할 회수는 몇회인가요?",
  TRY_COUNT_INPUT_ERROR_MESSAGE: "입력이 유효하지 않습니다. 다시 입력해주세요.",
  WINNER_MESSAGE: "가 최종 우승했습니다.",
  RACING_RESULT_MESSAGE: "실행 결과",
  RACING_RESULT_DELIMITER: "-",
  RACING_RESULT_CAR_SYMBOL: "-",
  RACING_RESULT_WINNER_SYMBOL: "🏆",
  RACING_RESULT_WINNER_DELIMITER: ", ",
  RACING_RESULT_WINNER_MESSAGE: "가 최종 우승했습니다.",
});

const Exception = Object.freeze({
  INVALID_INPUT: "입력이 유효하지 않습니다. 다시 입력해주세요.",
});

module.exports = {
  RL,
  Exception,
  STATIC_VALUE,
};
