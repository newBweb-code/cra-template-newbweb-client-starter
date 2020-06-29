import React from 'react';
import PropTypes from 'prop-types';

function ExternalLink({ href, title, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{ title || children || href }</a>;
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ExternalLink.defaultProps = {
  title: null,
};

export default ExternalLink;
