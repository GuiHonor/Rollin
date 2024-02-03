import { motion } from "framer-motion"
import { Config } from "../../assets/icons/Icons"
import "./VerticalStyle.css"


const VerticalBar = ({VerticalMenu}) => {

    return (

        <div className="verticalDiv">
            
            {VerticalMenu.map(item =>
                <motion.div 
                    className="VerticalContent"
                    whileHover={{
                        backgroundColor:'#ffffff29', 
                        transition:{duration:0.4}}}
                    whileTap={{
                        backgroundColor: '#ffffff45',
                        transition: {duration: 0.1}
                    }}  
                    >
                    
                        <a  key={item.name} 
                            href={item.href}
                        >
                                {item.icon} 
                            <h1>{item.name}</h1>
                        </a>
                    
                </motion.div>
            )}  

                <a 
                href="#" 
                className="config"> 
                    <Config/> 
                    <h1>Configurações</h1>
                </a>
       
            <motion.button
            whileTap={{scale: 0.9}}
            >Anunciar<br></br>Festa</motion.button>

        </div>
        
    )
}

export default VerticalBar