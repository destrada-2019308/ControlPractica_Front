import { NavBar } from "../../Components/Client/NavBar"
import { ProfileComp } from "../../Components/Client/ProfileComp"
import './profile.css'

export const Profile = () => {
  return (
    <>

        <NavBar/>
        <div className="divi">
        <ProfileComp/>
        </div>
    </>
  )
}
