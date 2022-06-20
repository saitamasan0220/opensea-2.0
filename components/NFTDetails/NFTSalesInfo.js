import React from 'react'
import {BsCreditCard2FrontFill, BsFillTagFill} from 'react-icons/bs'
import {AiOutlineQuestionCircle, AiOutlineClockCircle} from 'react-icons/ai'
import Image from 'next/image'

const style = {
    wrapper: `flex flex-col divide-y border dark:divide-black dark:rounded-lg dark:border-black`,
    header: `flex items-center justify-between rounded-t-lg px-6 py-4 dark:bg-[#262a30]`,
    headerContent: `flex items-center space-x-2`,
    headerIcon: `h-6 w-6`,
    greyText: `text-gray-400 `
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

                <div className={style.buttonsContainer}>
                    <div 
                        className={`${style.button} ${style.purchaseButton}`}
                        onClick={buyNFT}
                    >
                        <BsCreditCard2FrontFill className={style.buttonIcon} />
                        <span className='text-lg font-semibold'>Buy Now</span>
                    </div>
                    <div className={`${style.button} ${style.offerButton}`}>
                        <BsFillTagFill className={style.buttonIcon} />
                        <span className="text-lg font-semibold">Make Offer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTSalesInfo