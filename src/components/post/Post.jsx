import "./PostStyle.css"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const Post = ({style, name, photoPerfil, description, photoPost}) => {

    const descriptionRef = useRef(null)
    const [isOpen, setIsOpen] = useState(true)
    const [lines, setLines] = useState(0)

    const handleResizeDescription = () => {
        const descriptionHeight = descriptionRef.current.offsetHeight
        const descriptionLineHeight = parseInt(window.getComputedStyle(descriptionRef.current).lineHeight)
        setLines(descriptionHeight/descriptionLineHeight)
    } 

    
    useEffect(() => {
        handleResizeDescription()
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResizeDescription)
    
        return () => window.removeEventListener('resize', handleResizeDescription)
    }, [])

    return (
    <>
        <div className="Main" style={style} >

            <div className="MainContent" >
                
                <div style={{display: 'flex'}}>
                    <img 
                        className="PostImg" 
                        src={photoPerfil} 
                        alt="Perfil"
                    />
                    <h1 className="Name">{name}</h1>
                </div>

                { lines > 3 && (
                    
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ReadMore"
                        whileTap={{
                            scale: 0.9
                        }}
                    >

                        {isOpen? 'Ver mais' : 'Ver menos'}

                    </motion.button>
                
                )}
            
            </div>

            <div 
            style={{
                wordBreak: 'break-all',
            }}
            >

                <p  className= {isOpen? 'DescriptionStyle':'DescriptionNull'}
                    ref={descriptionRef}
                >
                    {description}
                </p>

                
            </div>
            <img 
                className="PhotoPost"
                src={photoPost} 
                alt="Post"
            />
        </div>
        
    </>
    )
}

export default Post;