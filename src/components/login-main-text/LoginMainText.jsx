import {motion} from "framer-motion"

const LoginMainText = ({title, subtitle, call, onClick}) => {
    return (
        <>
            <div className="MainText" style={{
                    color: 'white',
                    fontSize: '18px',
                    lineHeight: '35px',
                    marginBottom: '50px'
            }}> 
                <h1>{title}</h1>
                <div style={{display: 'flex'}}>
                    <h5>{subtitle}</h5>
                    <motion.h5 style={{
                        color: '#FF31F7', 
                        marginLeft: '5px', 
                        cursor: 'pointer'}}
                        whileHover={{
                            color: '#ff31f8ce', 
                            transition:{duration: 0.1}
                        }}
                        onClick={onClick}
                        >
                            {call}
                    </motion.h5>
                </div>
            </div>
        </>
    )
}

export default LoginMainText