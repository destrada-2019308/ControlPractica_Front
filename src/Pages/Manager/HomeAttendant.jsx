import { useEffect } from "react"
import { NavBar } from "../../Components/Manager/NavBar"
import { ViewEvaluations } from "../../Components/Manager/ViewEvaluations"
import { useSupervisor } from '../../Shared/hooks/ADMIN/useSupervisor'

export const HomeAttendant = () => {
 

  return (
    <>
      <NavBar/>
      <ViewEvaluations/>
    </>
  )
}
