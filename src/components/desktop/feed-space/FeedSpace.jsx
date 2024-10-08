import Post from '../post/Post';
import './FeedStyle.css';
import gui from '../../../assets/img/gui.png';
import princesa from '../../../assets/img/princesa.jpg';
import veia from '../../../assets/img/veia.jpg';
import bilu from '../../../assets/img/bilu.jpg';
import bento from '../../../assets/img/photofeed.png';
import mundoanimal from '../../../assets/img/testemundoanimal.jpg';
import testeleao from '../../../assets/img/leaoanimal.jpg';
import teste from '../../../assets/img/mundoanimal.png';
import { motion } from 'framer-motion';

const FeedSpace = () => {
    const posts = [
        {
            name: 'Guilherme Honório',
            photoPerfil: gui,
            description: 'Batata muito ruim, não gostei',
            photoPost: bento,
        },
        {
            name: 'Mylena Lima',
            photoPerfil: princesa,
            description:
                'KKKKKkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkKKKKK',
            photoPost: mundoanimal,
        },
        {
            name: 'Ana Maria',
            photoPerfil: veia,
            description: 'testeteste',
            photoPost: testeleao,
        },
        {
            name: 'Luara dos Santos',
            photoPerfil: bilu,
            description:
                'teste',
            photoPost: teste,
        },
    ];

    return (
        <motion.div className="FeedSpace">
            {posts.length && posts.map((post) => <Post {...post} />)}
        </motion.div>
    );
};

export default FeedSpace;
