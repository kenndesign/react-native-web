import { PropTypes } from 'react';

const { number, oneOf, oneOfType, string } = PropTypes;

const AnimationPropTypes = {
  animationDelay: string,
  animationDirection: oneOf([ 'alternate', 'alternate-reverse', 'normal', 'reverse' ]),
  animationDuration: string,
  animationFillMode: oneOf([ 'none', 'forwards', 'backwards', 'both' ]),
  animationIterationCount: oneOfType([ number, oneOf([ 'infinite' ]) ]),
  animationName: string,
  animationPlayState: oneOf([ 'paused', 'running' ]),
  animationTimingFunction: string
};

module.exports = AnimationPropTypes;
