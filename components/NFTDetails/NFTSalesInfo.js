import React from 'react'
import {BsCreditCard2FrontFill, BsFillTagFill} from 'react-icons/bs'
import {AiOutlineQuestionCircle, AiOutlineClockCircle} from 'react-icons/ai'
import Image from 'next/image'

const style = {
    wrapper: ``
}

const NFTSalesInfo = ({price, buyNFT}) => {
    console.log(price)
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerContent}></div>
            </div>
            
            {/* <h2>{price}</h2>
            <button onClick={buyNFT}>BUY NFT</button> */}
        </div>
    )
}

export default NFTSalesInfo