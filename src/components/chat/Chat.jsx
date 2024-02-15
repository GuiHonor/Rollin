import "./ChatStyle.css"
import {ArrowDown, ArrowUp, ExitIcon, SendIcon} from "../../assets/icons/Icons"
import gui from '../../assets/img/gui.png'
import princesa from '../../assets/img/princesa.jpg'
import bilu from '../../assets/img/bilu.jpg'
import veia from '../../assets/img/veia.jpg'
import {  useState, useEffect } from "react"
import { motion, } from "framer-motion"
import { useForm } from "react-hook-form"
import io from "socket.io-client"


const Chat = () => {

        const [showCurrentChatName, setShowCurrentChatName] = useState([])
        const [openChat, setOpenChat] = useState(true)
        const [openConversation, setOpenConversation] = useState(false)
        const [senderMessage, setSenderMessage] = useState([])
        const [receiverMessage, setReceiverMessage] = useState([])
        const [passSocket, setPassSocket] = useState()
        const { register, handleSubmit, reset } = useForm()
        

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

    const moveToTop = async (person) => {
        const updatedList = [...rolliners.filter((p) => p.id !== person.id)]
        setRolliners([person, ...updatedList])
        setShowCurrentChatName(person)
        const socket = await io.connect('http://localhost:3001')
        socket &&
        setPassSocket(socket)
    }

  

    const handleSendMessage = async (data) => {
        if(!data.message.trim()) return
        passSocket.emit('setUserName', showCurrentChatName.name)
        passSocket.emit('message', data.message)
        reset()

    }
    

    useEffect(() => {
        
        if (passSocket) {
        passSocket.on('receiveMessage', data => {
            setSenderMessage((current) => [data, ...current])
        })
        
        return () => passSocket.off('receiveMessage')
        }   
        
    },[passSocket])

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
                        <form onSubmit={handleSubmit(handleSendMessage)} autoComplete="off"> 

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
                                            {senderMessage.map((item) => 
                                                <div className="Sender">{item.message}</div>
                                            )}

                                            {receiverMessage.map((item) => 
                                                <div className="Receiver">{item.message}</div>
                                            )}
                                        </div>
                                                
                                    <div className="TextArea">
                                        
                                        <input 
                                                type="text"
                                                className="TextConversation" 
                                                placeholder="Digite uma mensagem de texto aqui."
                                                {...register('message')}
                                        />
                                        
                                        <motion.button
                                            className="SendContainer" 
                                            whileTap={{scale: 0.9, boxShadow: 0}}
                                        > 
                                            <SendIcon className={'SendIcon'}/> 
                                        </motion.button>

                                    </div>

                                </motion.div>  

                        </form>
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
