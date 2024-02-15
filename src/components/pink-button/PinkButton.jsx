import { motion } from "framer-motion"
import { useState } from "react"

const PinkButton = ({name, width, height, fontSize, borderRadius, to}) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    return (
        
            <motion.button
                type="submit"
                style={{ 
                    backgroundColor: '#FF31F7',
                    color: 'white',
                    cursor: 'pointer',
                    width: width,
                    height: height,
                    borderRadius: borderRadius,
                    fontWeight: 'bold',
                    fontSize: fontSize,
                    border: 'none',
                    textDecoration: 'none',
                    boxShadow: isHovering? '0px 0px 25px 0px #FF31F7' : 'none',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileTap={{scale: 0.9}}
            >
                {name}
            </motion.button>
        
    )
}

export default PinkButton