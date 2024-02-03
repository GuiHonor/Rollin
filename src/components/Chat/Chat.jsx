import "./ChatStyle.css"
import {ArrowDown, ArrowUp, ExitIcon, SendIcon} from "../../assets/icons/Icons"
import gui from '../../assets/img/gui.png'
import princesa from '../../assets/img/princesa.jpg'
import bilu from '../../assets/img/bilu.jpg'
import veia from '../../assets/img/veia.jpg'
import { useState, useEffect } from "react"
import { motion} from "framer-motion"

const Chat = () => {

    const [rolliners, setRolliners] = useState([
        {
            src: gui,
            name: 'Guilherme Honório',
            id: 1,
        },
        {
            src: princesa,
            name: 'Mylena Lima',
            id: 2,
        },
        {
            src: bilu,
            name: 'Luara dos Santos',
            id: 3,
        },
        {
            src: veia,
            name: 'Ana Maria',
            id: 4,
        },            
    ]) 
    const [showCurrentChatName, setShowCurrentChatName] = useState([])
    const [openChat, setOpenChat] = useState(true)
    const [openConversation, setOpenConversation] = useState(false)

    const moveToTop = (person) => {
        const updatedList = [...rolliners.filter((p) => p.id !== person.id)]
        setRolliners([person, ...updatedList])
        setShowCurrentChatName(person)
    }



    if (openChat === true){

    return (
        <>
        
        <motion.div className="MainChat"
            initial={{top:0}}
            transition={{duration:0.3}}
        >

            <motion.div 
                className="HeaderChatOpen" 
                onClick={() => setOpenChat(!openChat)}
                whileHover={{backgroundColor:'#ffffff10', transition: {duration: 0.1}}}
                whileTap={{backgroundColor:'#ffffff20', transition: {duration: 0.1} }}
            >
                <h3>Rolliners</h3>            
                    <ArrowDown />
 
            </motion.div>
        
            <div className="BodyChat">
                
                {rolliners.map(item => 

                    <motion.div 
                        className="Content" 
                        key={item.name}
                        whileHover={{backgroundColor:'#ffffff29', transition: {duration: 0.4} }}
                        whileTap={{backgroundColor:'#ffffff45', transition: {duration: 0.1} }}
                        onClick={() => { 
                            return (
                                setOpenConversation(!openConversation),
                                moveToTop(item)
                            )}}
                             
                    >
                        
                        <img className="ChatImg" alt={item.name} src={item.src}></img>
                        <div className="ChatOn"/>
                        <h3>{item.name}</h3>

                    </motion.div>
                )}
            </div>

                    {openConversation &&
                        <div>

                            <motion.div 
                                className="BackgroundConversation" 
                                onClick={() => setOpenConversation(!openConversation)}
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {duration: 0.4}}}
                                
                            /> 

                                <motion.div className="ContentConversation"
                                    initial={{
                                        scale: 0,
                                        y: -240,
                                        x: 700,
                                        opacity: 0
                                    }}
                                    animate={{
                                        scale: 1,
                                        y:0,
                                        x:0,
                                        transition:{duration: 0.4},
                                        opacity: 1,
                                        
                                    }}
                                >

                                    <header className="HeaderConversation">

                                        <div className="InfoRolliner">
                                            <img src={showCurrentChatName.src}></img> 
                                            <h3>{showCurrentChatName.name}</h3>
                                        </div>

                                        <ExitIcon 
                                            className={'ExitIcon'} 
                                            onClick={() => setOpenConversation(!openConversation)} 
                                            />

                                    </header>

                                    <div className="Conversation">

                                    </div>

                                    <div className="TextAreaMain">

                                        <textarea 
                                            className="TextAreaConversation" 
                                            placeholder="Digite uma mensagem de texto aqui."
                                        />
                                        <div className="SendContainer"> 
                                            <SendIcon className={'SendIcon'}/> 
                                        </div>

                                    </div>

                                </motion.div>  

                        </div>
                    } 

        </motion.div>
       
        </>
    )
} else {

   return (
            <motion.div 
                animate={{top:735}}
                transition={{duration:0.1}}
                onClick={() => setOpenChat(!openChat)}
                className="HeaderChatClose"
            >
              <h3>Rolliners</h3>
               <ArrowUp></ArrowUp>
            </motion.div>
    )
}} 

export default Chat