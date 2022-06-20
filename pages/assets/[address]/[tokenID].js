import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {useAddress, useMarketplace} from '@thirdweb-dev/react'
import {BigNumber} from 'ethers'

import TopNavbarLayout from '../../../layouts/TopNavbarLayout'
import NFTImage from '../../../components/NFTDetails/NFTImage'
import NFTSalesInfo from '../../../components/NFTDetails/NFTSalesInfo'

const style = {

}

const NFT = () => {

    const [listing, setListing] = useState()
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const {tokenID} = router.query
    console.log(tokenID)

    const marketplace = useMarketplace('0xCe9b05958ceB455A7937F9Ac3f21314689d7d70E')
    const address = useAddress()

    useEffect(() => {
        getListing()
    }, [])

    useEffect(() => {
        if (!address) router.replace('/')
        
    }, [address])

    const getListing = async () => {
        try {
            setLoading(true)
            const listing = await marketplace.getListing(BigNumber.from(tokenID))

            setListing(listing)
            setLoading(false)
        } 
        
        catch(error) {
            console.log(error)
        }
    }

    const buyNFT = async () => {
        try {
            await marketplace.buyoutListing(tokenID, 1)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TopNavbarLayout>
            <div className={style.wrapper}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className={style.nftContainer}>
                        <div className={style.leftContainer}>
                            <div className={style.leftElement}>
                                <NFTImage image={listing?.asset?.image}/>
                            </div>

                            <div className={style.leftElement}>
                                {/* <NFTDetails/> */}
                            </div>
                        </div>

                        <div className={style.rightContainer}>
                            {/* <NFTBasicInfo/> */}

                            <div className={style.buyoutContainer}>
                                <NFTSalesInfo price={listing?.buyoutCurrencyValuePerToken?.displayValue} buyNFT={buyNFT} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </TopNavbarLayout>
    )
}

export default NFT