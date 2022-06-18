import React from 'react'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import {useMarketplace} from '@thirdweb-dev/react'

const style = {

}

const Listings = () => {

    const marketplace = useMarketplace('0xCe9b05958ceB455A7937F9Ac3f21314689d7d70E')

    console.log(marketplace)

    // const getListings = async() => {

    // }

    return (
        <div>Listings</div>
    )
}

export default Listings