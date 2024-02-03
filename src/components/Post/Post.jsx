import "./PostStyle.css"
import gui from "../../assets/img/gui.png"
import princesa from "../../assets/img/princesa.jpg"
import veia from "../../assets/img/veia.jpg"
import bilu from "../../assets/img/bilu.jpg"
import bento from "../../assets/img/photofeed.png"
import mundoanimal from "../../assets/img/testemundoanimal.jpg"
import testeleao from "../../assets/img/leaoanimal.jpg"
import teste from "../../assets/img/mundoanimal.png"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const Post = ({style}) => {

    const descriptionRef = useRef(null)
    const [isOpen, setIsOpen] = useState(true)
    const [lines, setLines] = useState(0)
     
    const  Posts = [
        {
            name: 'Guilherme Honório',
            photoPerfil: gui,
            description: 'Batata muito ruim, não gostei',
            photoPost: bento,
        },
        {
            name: 'Mylena Lima',
            photoPerfil: princesa,
            description: 'KKKKKkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkKKKKK',
            photoPost: mundoanimal,
        },
        {
            name: 'Ana Maria',
            photoPerfil: veia,
            description: 'Puta rolê looouco, meeeu!!!',
            photoPost: testeleao,
        },
        {
            name: 'Luara dos Santos',
            photoPerfil: bilu,
            description: 'Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!',
            photoPost: teste,
        },
    ]
    

    useEffect(() =>{
        if(descriptionRef.current){
            const descriptionHeight = descriptionRef.current.offsetHeight
            const descriptionLineHeight = parseInt(window.getComputedStyle(descriptionRef.current).lineHeight)
            setLines(descriptionHeight/descriptionLineHeight)
    
        }
        
    })
        
    return (
    <>
    
    {Posts.map(item => 

        <div className="Main" style={style} >

            <div className="MainContent" >
                
                <div style={{display: 'flex'}}>
                    <img 
                        className="PostImg" 
                        src={item.photoPerfil} 
                        alt="Perfil"
                    />
                    <h1 className="Name">{item.name}</h1>
                </div>

                { lines >= 3 &&
                    
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ReadMore"
                        whileTap={{
                            scale: 0.9
                        }}
                    >

                        {isOpen? 'Ver mais' : 'Ver menos'}

                    </motion.button>
                }
            
            </div>

            <div 
            style={{
                wordBreak: 'break-all',
            }}
            
            >

                <p  className={isOpen? 'DescriptionStyle': 'DescriptionNull'}
                    ref={descriptionRef}
                    
                >
                    {item.description}
                </p>

                
            </div>
            <img 
                className="PhotoPost"
                src={item.photoPost} 
                alt="Post"
            />
        </div>)}
        
    </>
    )
}

export default Post;