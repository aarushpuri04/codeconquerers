const CardSection = () => {
    return (    
        <div className="p-6 px-20 mt-[5rem] text-center bg-[#ffffff]">
        <h1 className="mb-10 text-5xl font-extrabold text-gray-800">Trending gigs</h1>
        <div className="flex flex-wrap justify-between px-9 py-1">
          <div className="flex items-center my-6 p-6 bg-cardGradient rounded-lg shadow-md w-[31%]">
            <div className="pl-2 pt-5 flex-1 font-medium text-xl text-left text-white">
              <p>Pharmeasy</p>
              <p className="text-[10px] text-green-300 pt-5">Rs10000/month</p>
            </div>
            <img
              className="flex-1 h-28 rounded-lg"
              src="/work_logos/pharmeasy.jpg"
              alt="Pharmeasy"
            />
          </div>
          <div className="flex items-center my-6  p-6 bg-cardGradient rounded-lg shadow-md w-[31%]">
            <div className="pl-2 pt-5 flex-1 font-medium text-xl text-left text-white">
              <p>Digit</p>
              <p className="text-[10px] text-green-300 pt-5">Rs10000/month</p>
            </div>
            <img
              className="flex-1 w-24 h-28 rounded-3xl"
              src="/work_logos/digit.jpg"
              alt="digit"
            />
          </div>
          <div className="flex items-center my-6  p-6 bg-cardGradient rounded-lg shadow-md w-[31%]">
            <div className="pl-2 pt-5 flex-1 font-medium text-xl text-left text-white">
              <p>Souled Store</p>
              <p className="text-[10px] text-green-300 pt-5">Rs10000/month</p>
            </div>
            <img
              className="flex-1 w-24 h-28 rounded-lg"
              src="/work_logos/souledStore.jpg"
              alt="Souled Store"
            />
          </div>
          <div className="flex items-center my-6  p-6 bg-cardGradient rounded-lg shadow-md w-[31%]">
            <div className="pl-2 pt-5 flex-1 font-medium text-xl text-left text-white">
              <p>Car Dheko</p>
              <p className="text-[10px] text-green-300 pt-5">Rs10000/month</p>
            </div>
            <img
              className="flex-1 w-24 h-24 rounded-lg"
              src="/work_logos/carDheko.jpg"
              alt="carDheko"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default CardSection;