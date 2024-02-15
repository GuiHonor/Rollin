import "./PostStyle.css"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const Post = ({ name, photoPerfil, description, photoPost}) => {

    const descriptionRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [showReadMore, setShowReadMore] = useState(false)

    useEffect(() => {

        if (descriptionRef.current) {
            setShowReadMore(
                descriptionRef.current.scrollHeight !== descriptionRef.current.clientHeight
            )
        }
    },[])

    return (
    <>
        <div className="Main">
            <div style={{
                border: '1px solid rgba(255,255,255, 0.10)',
                borderTopRightRadius: '20px',
                borderTopLeftRadius: '20px',
                padding: '15px',
            }}>
            <div className="MainContent" >
                
                <div style={{display: 'flex'}}>
                    <img 
                        className="PostImg" 
                        src={photoPerfil} 
                        alt="Perfil"
                    />
                    <h1 className="Name">{name}</h1>
                </div>

                { showReadMore && (
                    
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ReadMore"
                        whileTap={{
                            scale: 0.9
                        }}
                    >

                        {isOpen? 'Ver menos' : 'Ver mais'}

                    </motion.button>
                
                )}
            
            </div>

            <div 
            style={{
                wordBreak: 'break-all',
                
            }}
            >

                <p  className= {isOpen? 'DescriptionNull' : 'DescriptionStyle'}
                    ref={descriptionRef}
                >
                    {description}
                </p>

                
            </div>
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