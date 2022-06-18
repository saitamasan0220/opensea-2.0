import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'

const style = {
      
}

const NFTCard = ({listing}) => {

    console.log(listing.asset.name)
    return (
        <div className={style.wrapper}>
            {/* {listing.asset.name} */}
            <div className={style.imageContainer}>
                <Image
                    className={style.nftImage}
                    src={listing.asset.image}
                    height = {340}
                    width = {340}
                    alt = 'nft'
                />
            </div>
        </div>
    )
}

export default NFTCard