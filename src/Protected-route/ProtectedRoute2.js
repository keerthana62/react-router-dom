import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute1({auth,children}) {
 if(!auth)
  return<Navigate to="/adminlogin" />
 return children
}

export default ProtectedRoute1