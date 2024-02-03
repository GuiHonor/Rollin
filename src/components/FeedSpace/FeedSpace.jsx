import Post from "../Post/Post"
import "./FeedStyle.css"
import { motion, useScroll, useTransform} from "framer-motion"
const FeedSpace = () => {

    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div className="FeedSpace" style={{scale}}>
            <Post ></Post>     
        </div>
        
    )
}

export default FeedSpace