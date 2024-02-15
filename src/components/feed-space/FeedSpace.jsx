import Post from "../post/Post"
import "./FeedStyle.css"
import gui from "../../assets/img/gui.png"
import princesa from "../../assets/img/princesa.jpg"
import veia from "../../assets/img/veia.jpg"
import bilu from "../../assets/img/bilu.jpg"
import bento from "../../assets/img/photofeed.png"
import mundoanimal from "../../assets/img/testemundoanimal.jpg"
import testeleao from "../../assets/img/leaoanimal.jpg"
import teste from "../../assets/img/mundoanimal.png"

const FeedSpace = () => {

    const  posts = [
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
            description: 'Puta rolê loooucoPuta rolê loooucoPuta rolê loooucoPuta rolê loooucoPuta rolê loooucoPuta rolê loooucoPuta rolê loooucoPuta rolê loooucoPuta rolê loooucoPuta rolê loooucoPuta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!Puta rolê looouco, meeeu!!!',
            photoPost: teste,
        },
    ]

    return (
        <div className="FeedSpace">
            
               {
                posts.length && posts.map(post => (
                    <Post 
                        {...post}
                    />     
                ))
               }
               
        </div>
        
    )
}

export default FeedSpace