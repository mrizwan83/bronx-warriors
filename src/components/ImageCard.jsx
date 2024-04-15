import React from 'react'

const ImageCard = ({ hero, changeImage, Image }) => {

    const handleClick = () => {
        if (Image !== hero.imgURL) {
            changeImage(hero.imgURL);
        }
    }


    return (
        <div className={`border-2 rounded-xl 
        ${Image === hero.imgURL ? 'border-coral-red' : 'border-transparent'}
        cursor-pointer max-sm:flex-1
        `} onClick={handleClick}>
            <div className='flex justify-center items-center bg-slate-950 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={hero.imgURL} alt={hero.alt} width={127} height={103} className='object-contain' />
            </div>
        </div >
    )
}

export default ImageCard
