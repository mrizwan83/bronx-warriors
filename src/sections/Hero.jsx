import { arrowRight } from "../assets/icons"
import { team_img1 } from "../assets/images"
import Button from "../components/Button"
import { heroImages, statistics } from "../constants"
import ImageCard from "../components/ImageCard"
import { useState } from "react"



const Hero = () => {

    const [heroImage, setHeroImage] = useState(team_img1)
    return (
        //  usually its flex column but if its xl screen then its flex row full height
        <section id="home" className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
                <p className="text-xl font-montserrat text-coral-red">Youth and Adolescent League</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-12 rounded-r-[50px] ">Bronx <span className="text-coral-red">Warriors</span></span>
                    <br />
                    <span className="inline-block mt-3">
                        Football
                    </span>


                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Established in 1952, the Warriors Football League brings together youths and volunteers in the Pelham Bay Park area of The Bronx.</p>
                <Button label="Register now" iconUrl={arrowRight} />
                {/* statistics, flex-wrap for collapsing on small devices */}
                <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                    {statistics.map((stat) => (
                        <div key={stat.label} className='flex flex-col justify-center items-center gap-2'>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center border-bottom-rounded rounded-b-lg">
                <div className="relative overflow-hidden rounded-[50px] xl:mt-[60px]">
                    <img
                        src={heroImage}
                        alt="team collection"
                        width={550}
                        height={500}
                        className="relative z-10"
                    />
                </div>
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {heroImages.map((hero, idx) => (
                        <div key={idx}>
                            <ImageCard
                                hero={hero}
                                changeImage={(hero) => setHeroImage(hero)}
                                Image={heroImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
