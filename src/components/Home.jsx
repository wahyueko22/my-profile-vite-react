import banner from "../assets/banner.png";
import wahyu from "../assets/wahyu.png";

const Home = () =>{
    return(
        <div className="mt-20 bg-bgShade" id="home">
            <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
                <div className="w-1/3">
                        <img src={wahyu} alt="" className="w-full" />
                </div>
                {/* left side */}
                    <div className="md:w-1/2 w-full mt-5">
                    <p className="text-xl text-headingcolor font-semibold mb-5">Hey, I am Wahyu</p>
                    <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
                        I create <span className="text-primary">product design</span> and brand experience
                    </h1>
                    <p className="text-2xl text-body leading-9 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique.
                    </p>
                    <button className="btn-primary">Get In Touch</button>
                    </div>
                {/* rigth side */}
            </div>
        </div>
    )
}

export default Home