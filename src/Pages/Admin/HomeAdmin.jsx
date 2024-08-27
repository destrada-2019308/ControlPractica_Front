import React, { useEffect, useState } from 'react'
import { NavBarAdmin } from '../../Components/Client/Admin/NavBarAdmin'
import { useAddManager } from '../../Shared/hooks/useAddManager'
import { CRUDClient } from './CRUDClient'

export const HomeAdmin = () => {
  return (
    <>
      <NavBarAdmin />
      <CRUDClient/>
    </>
  )
}
