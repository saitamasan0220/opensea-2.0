import React from 'react'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import {useMarketplace} from '@thirdweb-dev/react'

const style = {

}

const Listings = () => {

    const [listings, setListings] = useState([])

    const marketplace = useMarketplace('0xCe9b05958ceB455A7937F9Ac3f21314689d7d70E')

    console.log(marketplace)

    useEffect(() => {
        getListings()
    }, [])

    const getListings = async() => {
        try {
            const list = await marketplace.getActiveListings()

            setListings(list)

            console.log('listings: ', list)

        } catch(error) {
            console.log(error)
        }

    }

    
    return (
        <div className={style.wrapper}>
            {listings.length > 0 ? (
                <>
                    {listings?.map((listing) => (
                        <div>NFT CARD HERE</div>
                    ))}
                </>
            ) :(
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Listings