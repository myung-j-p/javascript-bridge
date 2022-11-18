//BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
// - 제공된 `BridgeGame` 클래스를 활용해 구현해야 한다.
// - `BridgeGame`에 필드(인스턴스 변수)를 추가할 수 있다.
// - `BridgeGame`의 파일 경로는 변경할 수 있다.
// - `BridgeGame`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
// - 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const bridgeMaker = require('./BridgeMaker')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')

class BridgeGame {
  #size
  #bridge
  constructor(size) {
    this.validate(size);
    this.#size = size;
    this.#bridge = bridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  validate(size) {
    if (size < 3 || size > 20){
      throw new Error('[ERROR] 3 ~ 20사이의 숫자를 입력해주세요.')
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
