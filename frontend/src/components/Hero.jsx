import hero from "../assets/hero.png"
function Hero(){
    return( //bg-[#FCFAF7] 
        <section className="min-h-[clamp(650px,90dvh,850px)] p-8 pt-[108px] md:pt-[80px] flex items-center justify-center lg:min-h-dvh [@media(max-aspect-ratio:0.5)]:min-h-[80dvh]">

            <div className="flex flex-col max-w-[1350px] gap-6 lg:flex-row justify-center">

                <div className="flex flex-col items-start gap-4 md:gap-6 w-full md:items-center lg:items-start lg:w-1/2">  
                    
                    <div className="flex flex-col gap-3 md:gap-6 md:items-center lg:items-start">
                        <h1 className="sansation-bold primary-color text-[clamp(3rem,7vw,72px)] leading-none md:text-center lg:text-left">
                            Nurturing Hearts with the Light of Knowledge
                        </h1>
                        <p className="text-lg secondary-color">
                            Interactive Online Islamic Classes in English & Malayalam
                        </p>
                    </div>

                    <button className="px-6 py-3 button text-white rounded-lg hover:bg-[#BF8B28] sansation-bold transition-colors duration-300 w-[200px]">
                        Learn More
                    </button>
                </div>

                <div className="flex justify-center items-center w-full lg:w-[40%]">
                    <img className="w-full md:max-w-[540px]" src={hero} alt="Hero Image"></img>
                </div>

            </div>

        </section>
    )
}

export default Hero;

