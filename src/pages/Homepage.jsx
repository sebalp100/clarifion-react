const Homepage = () => {
  return (
    <main className="flex px-[5.5vw] gap-6 sm:gap-0 sm:px-0 flex-col items-center justify-center">
      <div className="flex justify-between w-full py-5 sm:py-0 sm:px-[127px]">
        <img
          src="images/logo.svg"
          alt="logo"
          className="h-[20px] w-[106.67px] sm:h-[36px] sm:w-[192px] sm:mt-[30px]"
        />
        <img
          src="images/virus-logos.png"
          className="h-[16px] w-[101px] sm:h-[32px] sm:mt-[32px] sm:w-[202px]"
          alt="logos"
        />
      </div>
      <div className="flex pt-[26px] sm:pt-0 flex-col text-center gap-[24px] items-center">
        <h2 className="text-[32px] sm:text-[48px] leading-[44.8px] sm:leading-[48px]">
          Wait ! your order in progress.
        </h2>
        <h3 className="text-[16px] sm:text-[24px] leading-[22.4px] capitalize sm:leading-[24px] text-[#4D5254]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h3>
      </div>
      <div className="flex sm:pt-[60px] w-full text-[12px] sm:text-[20px] leading-[22px] justify-between sm:px-[8.46%]">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-[20px]">
          <span className="relative h-5 w-5 sm:h-[40px] sm:w-[40px] bg-[#85BF55] rounded-full">
            <img
              src="images/tick-circlecheckg.svg"
              alt="checkmark"
              className="absolute top-[6px] sm:top-[12px] left-[4px] sm:left-[10px] h-[8px] w-[12px] sm:h-[16px] sm:w-[20px]"
            />
          </span>
          <p>
            <span className="hidden sm:inline">Step 1 : </span>Cart Review
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-[20px]">
          <span className="relative h-5 w-5 sm:h-[40px] sm:w-[40px] bg-[#85BF55] rounded-full">
            <img
              src="images/tick-circlecheckg.svg"
              alt="checkmark"
              className="absolute top-[6px] sm:top-[12px] left-[4px] sm:left-[10px] h-[8px] w-[12px] sm:h-[16px] sm:w-[20px]"
            />
          </span>
          <p>
            <span className="hidden sm:inline">Step 2 : </span>Checkout
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-[20px]">
          <span className="flex items-center justify-center text-white text-[20px] h-5 w-5 sm:h-[40px] sm:w-[40px] bg-[#2C7EF8] rounded-full">
            <p className="text-[14px] sm:text-[20px]">3</p>
          </span>
          <p className="font-bold">
            <span className="hidden sm:inline">Step 3 : </span>Special Offer
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-[20px]">
          <span className="flex items-center justify-center text-[#2C7EF8] text-[20px] h-5 w-5 sm:h-[40px] sm:w-[40px] bg-[white] border-[#2C7EF8] border-[1px] sm:border-[2px] rounded-full">
            <p className="text-[14px] sm:text-[20px]">4</p>
          </span>
          <p>
            <span className="hidden sm:inline">Step 4 : </span>Confirmation
          </p>
        </div>
      </div>
      <div className="flex items-center sm:bg-[#FAFAFA] rounded-[10px] sm:p-[40px] sm:mx-[8.46%] sm:mt-[40px] mb-[50px] sm:mb-[61px] gap-[2.67vw] justify-between">
        <div className="w-[38.34vw] hidden sm:flex flex-col">
          <img src="images/product-big.png" alt="product image" />
          <div className="p-[24px] bg-white flex flex-col gap-[18px] mt-[24px]">
            <div className="flex gap-[13px]">
              <img src="images/review.png" alt="Review photo" />
              <div className="flex flex-col gap-[7.35px] justify-center">
                <div className="flex items-center gap-1">
                  <img src="images/Vectorstar.svg" alt="Star" />
                  <img src="images/Vectorstar.svg" alt="Star" />
                  <img src="images/Vectorstar.svg" alt="Star" />
                  <img src="images/Vectorstar.svg" alt="Star" />
                  <img src="images/Vectorstar.svg" alt="Star" />
                </div>
                <div className="flex gap-[10px] items-center">
                  <span className="font-bold text-[14px]">Ken T.</span>
                  <img
                    src="images/verif.png"
                    alt="Verification logo"
                    className=""
                  />
                  <span className="text-[#5BB59A] text-[12px] leading-[14.4px]">
                    Verified Customer
                  </span>
                </div>
              </div>
            </div>
            <p className="leading-[24px] text-[#4D5254]">
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </p>
          </div>
        </div>
        <div className="sm:!w-[36.67vw] relative flex flex-col gap-6 sm:gap-8">
          <h3 className="text-[24px] capitalize sm:px-0 sm:text-[32px] leading-[33.6px] sm:leading-[44.8px] text-center sm:text-start">
            <span className="text-[#2C7EF8]">ONE TIME ONLY</span> special price
            for 6 extra Clarifion for only{' '}
            <span className="text-[#2C7EF8]">$14 each</span> ($84.00 total!)
          </h3>
          <div className="flex gap-4 sm:gap-6 h-[80px] sm:h-auto">
            <img
              src="images/item-small.png"
              alt="Item picture"
              className="max-h-[134px] w-[80px] sm:w-auto"
            />

            <div className="flex justify-between flex-col w-full">
              <div className="flex justify-between">
                <h5 className="text-[14px] sm:text-base ">
                  Clarifion Air Ionizer
                </h5>
                <div className="flex gap-2 font-semibold items-center">
                  <span className="text-[#969696] text-[10px] sm:text-base">
                    $180
                  </span>
                  <span className="text-[#2C7EF8] text-[14px] sm:text-[22px]">
                    $84
                  </span>
                </div>
              </div>
              <div className="flex items-center sm:-mt-2 gap-1">
                <img
                  src="images/Vectorstar.svg"
                  alt="Star"
                  className="h-[18px] w-[18px]"
                />
                <img
                  src="images/Vectorstar.svg"
                  alt="Star"
                  className="h-[18px] w-[18px]"
                />
                <img
                  src="images/Vectorstar.svg"
                  alt="Star"
                  className="h-[18px] w-[18px]"
                />
                <img
                  src="images/Vectorstar.svg"
                  alt="Star"
                  className="h-[18px] w-[18px]"
                />
                <img
                  src="images/Vectorstar.svg"
                  alt="Star"
                  className="h-[18px] w-[18px]"
                />
              </div>
              <h6 className="flex gap-4 text-[#37465A] text-[12px] sm:text-base items-center">
                <span className="bg-[#2C7EF8] h-[8.53px] w-[8.53px] rounded-full"></span>
                12 left in Stock
              </h6>
              <p className="leading-[16.8px] hidden sm:inline text-center sm:text-start sm:leading-[22.4px] text-[12px] sm:text-base text-[#4D5254]">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>
          <div>
            <p className="leading-[16.8px] sm:hidden text-center text-[12px] text-[#4D5254]">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>
          <div className="flex flex-col gap-[16px] text-[12px] sm:text-base">
            <div className="flex items-center gap-2">
              <img
                src="images/tick-circletick-blue.svg"
                alt=""
                className="h-4 w-4"
              />
              <p className="leading-[25.6px]">
                Negative Ion Technology may{' '}
                <span className="font-bold">help with allergens</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="images/tick-circletick-blue.svg"
                alt=""
                className="h-4 w-4"
              />
              <p className="leading-[25.6px]">
                Designed for <span className="font-bold">air rejuvenation</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="images/tick-circletick-blue.svg"
                alt=""
                className="h-4 w-4"
              />
              <p className="leading-[25.6px]">
                <span className="font-bold">Perfect for every room</span> in all
                types of places.
              </p>
            </div>
          </div>
          <div className="bg-[#EDF3FD] py-[12px] px-[16px]">
            <div className="flex gap-4 items-center">
              <img src="images/save.svg" alt="Save % icon" />
              <p className="leading-[19.6px] sm:leading-[22.4px] text-[14px] sm:text-base">
                Save <span className="text-[#2C7EF8]">53%</span> and get{' '}
                <span className="text-[#2C7EF8]">6 extra Clarifision</span> for
                only <span className="text-[#2C7EF8]">$14 Each</span>.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="flex items-center leading-[19.12px] sm:leading-[27.32px] text-[14px] sm:text-[20px] font-bold gap-4 sm:gap-[1.32vw] justify-center uppercase rounded-[50px] text-white bg-[#59AE43] py-4">
              Yes - Claim my discount{' '}
              <img src="images/arrow.svg" alt="Arrow icon" />
            </button>
            <div className="flex flex-col gap-3 md:flex-row items-center text-[12px] border-[1px] rounded-[4px] border-[#CFCFCF] md:border-0 mt-[12px] justify-center sm:justify-between py-[8px] px-[16px] #4D5254 text-[#4D5254]">
              <div className="flex gap-3 items-center justify-center pb-[12px] border-b-[1px] border-[#CFCFCF] md:border-0">
                <span className="w-[76px] sm:w-auto">Free shipping</span>
                <span className="bg-[#CFCFCF] h-4 w-[1px]"></span>
                <div className="flex gap-2 w-[192px] sm:w-auto sm:gap-[10px] items-center justify-center">
                  <img src="images/lock-gray.svg" alt="Lock icon" />
                  <span className="">Secure 256-bit SSL encryption.</span>
                </div>
              </div>
              <span className="bg-[#CFCFCF] h-4 w-[1px] hidden sm:inline"></span>
              <img
                src="images/cards.svg"
                alt="Credit cards icons"
                className=""
              />
            </div>
            <a
              href="#"
              className="text-[#F82C2C] text-center uppercase text-[12px] sm:text-[18px] leading-[24.59px] font-medium underline mt-[12px] md:mt-[20px]"
            >
              No thanks, I don’t want this.
            </a>
          </div>
          <div className="flex gap-4">
            <img
              src="images/guarantee.svg"
              alt="Guarantee image"
              className="max-h-[48px] sm:max-h-[88px]"
            />
            <p className="text-[12px] leading-[16.8px] sm:leading-[22.4px] sm:text-base text-[#4D5254]">
              If you are not completely thrilled with your Clarifion - We have a{' '}
              <span className="font-bold">30 day satisfaction guarantee</span>.
              Please refer to our return policy at the bottom of the page for
              more details. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
