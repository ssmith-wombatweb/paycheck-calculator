import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../consts/colors';

const CloseButton = ({ close }) => (
  <button type="button" onClick={close}>
    <style jsx>
      {`
      button {
        margin: 1rem;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2.5rem;
        background-color: transparent;
        border: none;
        font-family: Raleway, open-sans;
        color: ${colors.vividGreen()};
        transition: transform 0.5s;
        transform-origin: top right;

        :focus, :hover {
          outline: none;
          transform: scale(1.3);
        }
      }
      `}
    </style>
    X
  </button>
);

CloseButton.propTypes = {
  close: PropTypes.func.isRequired,
};

export default CloseButton;
