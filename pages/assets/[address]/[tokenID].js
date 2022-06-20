import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {useAddress, useMarketplace} from '@thirdweb-dev/react'
import {BigNumber} from 'ethers'

import TopNavbarLayout from '../../../layouts/TopNavbarLayout'
import NFTImage from '../../../components/NFTDetails/NFTImage'

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

    const getListing = async () => {
        try {
            setLoading(true)
            const listing = await marketplace.getListing(BigNumber.from(tokenID))
            console.log('running')
            setListing(listing)
            setLoading(false)
        } 
        
        catch(error) {
            console.log(error)
        }
    }

    console.log(listing)

    return (
        <TopNavbarLayout>
            <div className={style.wrapper}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className={style.nftContainer}>
                        <div className={style.leftContainer}>
                            <div className={style.leftElement}>
                                <NFTImage image={listing}/>
                            </div>

                            <div className={style.leftElement}>
                                {/* <NFTDetails/> */}
                            </div>
                        </div>

                        <div className={style.rightContainer}>
                            {/* <NFTBasicInfo/> */}

                            <div className={style.buyoutContainer}>
                                {/* <NFTSalesInfo/> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </TopNavbarLayout>
    )
}

export default NFT