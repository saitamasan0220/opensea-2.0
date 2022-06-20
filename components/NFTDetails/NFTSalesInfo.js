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
                <div className={style.headerContent}>
                    <AiOutlineClockCircle className={`${style.greyText} ${style.headerIcon}`} />
                </div>
            </div>
            
            <div className={style.mainContainer}>
                <div className={style.priceInfoContainer}>
                    <div className={`${style.greyText} ${style.mediumFont}`}>Buy at</div>

                    <div className={style.priceContainer}>
                        <Image 
                            src = '/weth-logo.svg'
                            width={24}
                            height={24}
                            alt = 'weth'
                        />
                        <span className={style.price}>{price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTSalesInfo