import React from 'react'
import NavAdmin from "../../Components/NavAdmin"
import {Outlet} from 'react-router-dom'
type Props = {}

const AdminLayout = (props: Props) => {
  return (
   <div>
      <NavAdmin/>
      <Outlet/>
   </div>
  )
}

export default AdminLayout