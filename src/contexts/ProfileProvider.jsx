import { useState } from "react"
import { ProfileContext } from "./ProfileContext"

const ProfileProvider = ({content}) => {

    const [dataProfile, setDataProfile] = useState()

    return <ProfileContext.Provider value={{dataProfile, setDataProfile}}>{content}</ProfileContext.Provider>

}

export default ProfileProvider