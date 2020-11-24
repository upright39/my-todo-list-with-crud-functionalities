import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, inputShowProp }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      removeAlert()
    }, 2000)
    return () => clearTimeout(time)
  }, [inputShowProp])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
