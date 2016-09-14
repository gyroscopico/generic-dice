import * as C from './constants';

export let resetAnimation;

export function roll(e) {
  // todo: do something with this data.
  // todo: consider getting that 700 figure from constants.
  const duration = e && e.detail && e.detail.duration || C.DURATION;

  resetAnimation = () => {
    this.setState({
      rolling: false,
      animation: '',
      duration,
    });
  };

  this.setState({
    rolling: true,
    animation: 'thrown',
    duration,
  });

  setTimeout(resetAnimation, duration);
}
