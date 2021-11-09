import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({ card, productId, handleRemove }) => {

  return (
    <span className='action-button' onClick={card === 'outfit' ? () => handleRemove(productId) : () => {}}>
      { card === 'outfit' ? '\u24e7' : '\u2606'}
    </span>
  )
}

ActionButton.propTypes = {
  card: PropTypes.string,
  handleRemove: PropTypes.func,
  productId: PropTypes.number
};

export default ActionButton;