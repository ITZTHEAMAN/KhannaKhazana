import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError()
 
  return (
    <div>OPPS!!!!!!!!!!! {}.</div>
  )
}

export default Error