import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export const Viewer = ({ className, url }) => {
  return (
    <embed
      className={`viewer ${className}`}
      src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${url}`}
    />
  )
}

Viewer.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default Viewer