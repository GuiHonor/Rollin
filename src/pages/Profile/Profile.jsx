import { GlobalStyle } from "../../GlobalStyle";
import { 
    Homeicon,
    Feed,
    Events,
    Myaccount,
    Gallery,
    Social} from "../../assets/icons/Icons"
import gui from "../../assets/img/gui.png"
import Chat from "../../components/chat/Chat";
import FeedSpace from "../../components/feed-space/FeedSpace";
import HorizontalBar from "../../components/horizontal-bar/HorizontalBar"
import VerticalBar from "../../components/vertical-bar/VerticalBar";

function Profile() {

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
  
    return (
        <>
            <GlobalStyle/>
                
                    <HorizontalBar
                        src={gui}                        
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