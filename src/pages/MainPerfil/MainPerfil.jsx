import { GlobalStyle } from "../../GlobalStyle";
import { 
    Homeicon,
    Feed,
    Events,
    Myaccount,
    Gallery,
    Social} from "../../assets/icons/Icons"
import gui from "../../assets/img/gui.png"
import Chat from "../../components/Chat/Chat";
import FeedSpace from "../../components/FeedSpace/FeedSpace";
import HorizontalBar from "../../components/HorizontalBar/HorizontalBar"
import VerticalBar from "../../components/VerticalBar/VerticalBar";


function MainPerfil() {

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
            icon: <Myaccount /> ,
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
                        homeicon={<Homeicon />}
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

export default MainPerfil