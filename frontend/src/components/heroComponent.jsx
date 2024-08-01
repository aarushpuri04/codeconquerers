export default function HeroComponent({ imageSrc, text, btnText }) {
    return (
  
      <div className="relative bg-cover bg-center bg-no-repeat h-[45rem]">
        <img src={imageSrc} alt="" className="absolute inset-0 object-fill w-[100vw] h-full " />
        <div className="relative inset-0 flex pt-48 justify-center">
          <h1 className="text-white text-[4rem] font-bold max-w-[55rem] text-center">{text}</h1>
        </div>
        <div className="relative inset-0 pt-20 flex justify-center">
          <button className="bg-blue-700 hover:bg-blue-600 text-[18px] text-white font-medium py-[6px] px-6 rounded-full">
            {btnText}
          </button>
        </div>
      </div>
      
    );
  }
  