import "./HorizontalStyle.css"
import {motion} from "framer-motion"

const HorizontalBar = ({href,homeicon,src, HorizontalMenu}) => {

    return (
        
        <motion.div className="divMain">

            <motion.img 
                whileHover={{backgroundColor: '#fafafaac'}} 
                className="img" 
                alt="Perfil" 
                src={src}
            />

           
            <div className="horlist">
                
               {HorizontalMenu.map(item =>

                <motion.div 
                    className="HorizontalContent"
                    
                >
                    
                    <motion.a 
                        key={item.name} 
                        href={item.href}
                        whileHover={{
                        backgroundColor:'#ffffff29', 
                        transition:{duration:0.4}}}
                        
                    whileTap={{
                        
                        transition:{duration:0.1},
                        backgroundColor: '#ffffff45'
                    }}
                    >
                            {item.icon} 
                            <h1>{item.name}</h1>
                    </motion.a>
                    
                </motion.div> 
               )}
               
            </div>
            <motion.div
                whileHover={{scale: 1.1}}
                className="homeIcon" 
            >
                <a 
                    
                    href={href}> 
                    {homeicon}
                </a> 
            </motion.div>       
            

                      
        </motion.div>

    )
}

export default HorizontalBar