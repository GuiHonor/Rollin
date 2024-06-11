import { GlobalStyle } from "../../../GlobalStyle";
import { 
    Homeicon,
    Feed,
    Events,
    Myaccount,
    Gallery,
    Social} from "../../../assets/icons/Icons"
import gui from "../../../assets/img/gui.png"
import Chat from "../../../components/desktop/chat/Chat";
import FeedSpace from "../../../components/desktop/feed-space/FeedSpace";
import HorizontalBar from "../../../components/desktop/horizontal-bar/HorizontalBar"
import VerticalBar from "../../../components/desktop/vertical-bar/VerticalBar";
import { getLoggedUser } from "../../../services/auth.service";
import useProfileContext from "../../../hooks/useProfileContext";
import { useEffect } from "react";

function Profile() {
    const {setDataProfile} = useProfileContext()

    const HorizontalMenu = [
        {
            href: '#' ,
            name: 'Feed',
            icon: <Feed/>
        },
        {
            href: '#',
            name: 'Rolês Frequentados',
            icon: <Events/>
        }
    ]

    const VerticalMenu = [
        {
            icon: <Myaccount height={35} width={35}/> ,
            name: 'Minha Conta',
            href: '#'
    
        },
        {
            icon: <Gallery />,
            name: 'Botos',
            href: '#'
    
        },
        {
            icon: <Social />,
            name: 'Rolliners',
            href: '#'
    
        }
    ]

    useEffect(() => {
        setDataProfile(getLoggedUser())
    },[])
    
    return (
        <>
            <GlobalStyle/>
                
                    <HorizontalBar                      
                        homeicon={<Homeicon width={45} height= {45}/>}
                        HorizontalMenu={HorizontalMenu}
                    />
                    <div style={{display:'flex'}}>
                        <VerticalBar VerticalMenu={VerticalMenu}/>
                        <FeedSpace/>
                        <Chat></Chat>
                    </div>
                
        </>
    )
}

export default Profile