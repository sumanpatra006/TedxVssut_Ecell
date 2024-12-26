export const HeroSection = () => {
  return <div className='bg-black sm:h-[80vh] md:h-screen flex flex-col items-center justify-center space-y-16 font-helvetica'>
    <div className="h-[350vh] w-screen hero-gradient absolute left-1/2 bottom-1/3"></div>
    <div className="h-[350vh] w-screen hero-gradient absolute right-1/2 bottom-[50%]"></div>

    <h1 className="text-white text-center font-bold sm:text-5xl md:text-7xl z-10">
      Ideas Worth Spreading
    </h1>

    <div className="flex flex-col items-center w-screen z-10 space-y-2">
      <p className="text-white font-medium sm:text-lg md:text-2xl">
        Empowering Ideas That Shape the Future
      </p>
      <p className="text-[#6d6d6d] text-xl sm:w-[80%] md:w-[35%] text-center">
        Join us for a day of inspiring talks, innovative ideas, and transformative conversations.
      </p>
    </div>

    <div className="flex sm:flex-col md:flex-row items-center sm:space-y-2 md:space-x-10 z-10">
      <a className="bg-white text-black px-7 py-3 rounded font-medium">
        Register Now
      </a>
      <a className="text-white px-7 py-3 rounded-sm font-bold">
        Learn More
      </a>
    </div>
  </div>;
};
