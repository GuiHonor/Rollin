import { motion } from 'framer-motion';

const LoginMainText = ({ title, subtitle, call, onClick }) => {
    return (
        <>
            <div className="text-white leading-9 mb-12 font-bold ">
                <h1 className='text-4xl'>{title}</h1>
                <div className="flex">
                    <h5>{subtitle}</h5>
                    <motion.h5
                        className="text-[#FF31F7] ml-1 cursor-pointer"
                        whileHover={{
                            color: "#ff31f8ce",
                            transition: { duration: 0.1 },
                        }}
                        onClick={onClick}
                    >
                        {call}
                    </motion.h5>
                </div>
            </div>
        </>
    );
};

export default LoginMainText;
