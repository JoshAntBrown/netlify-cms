import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ObjectPreview from 'EditorWidgets/Object/ObjectPreview';

const FlexibleLayoutPreview = ObjectPreview;

FlexibleLayoutPreview.propTypes = {
  field: PropTypes.node,
};

export default FlexibleLayoutPreview;
