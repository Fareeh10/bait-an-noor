import logo from "../assets/logo.png"

function About(){
    return (
        <div className="flex flex-col items-center gap-6 px-12 py-16 bg-[#d0d0d041]">
            <img className="w-40" src={logo}></img>
            <h2 className="sansation-bold primary-color text-2xl text-center">Welcome to Bait An Noor Litarabiya</h2>
            <p className="sansation-regular secondary-color text-lg max-w-3xl text-center">
                Bait An Noor Litarabiya offers live online classes in Quran, Arabic, and Islamic Studies through fun and interactive sessions for children. Our experienced teachers create a nurturing environment where young hearts can grow in knowledge and faith.
            </p>
        </div>
    );
}

export default About;