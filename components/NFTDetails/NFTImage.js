import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {

}

const NFTImage = ({image}) => {
    console.log(image)
    return (
        <div>
            {image && <Image
            src = {image}
            width = {448}
            height = {448}
            alt = "nft"
            /> }
        </div>
    )
}

export default NFTImage