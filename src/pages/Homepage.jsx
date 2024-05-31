const Homepage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex justify-between w-full px-[127px]">
        <img
          src="images/logo.svg"
          alt="logo"
          className="h-[36px] w-[192px] mt-[30px]"
        />
        <img
          src="images/virus-logos.png"
          className="h-[32px] mt-[32px] w-[202px]"
          alt="logos"
        />
      </div>
      <div className="flex flex-col gap-[24px] items-center">
        <h2 className="text-[48px] leading-[48px]">
          Wait ! your order in progress.
        </h2>
        <h3 className="text-[24px] leading-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h3>
      </div>
      <div className="flex pt-[60px] w-full text-[20px] leading-[22px] justify-between px-[8.46%]">
        <div className="flex items-center gap-[20px]">
          <span className="relative h-[40px] w-[40px] bg-[#85BF55] rounded-full">
            <img
              src="images/tick-circlecheckg.svg"
              alt="checkmark"
              className="absolute top-[12px] left-[10px] h-[16px] w-[20px]"
            />
          </span>
          <p>Step 1 : Cart Review</p>
        </div>
        <div className="flex items-center gap-[20px]">
          <span className="relative h-[40px] w-[40px] bg-[#85BF55] rounded-full">
            <img
              src="images/tick-circlecheckg.svg"
              alt="checkmark"
              className="absolute top-[12px] left-[10px] h-[16px] w-[20px]"
            />
          </span>
          <p>Step 2 : Checkout</p>
        </div>
        <div className="flex items-center gap-[20px]">
          <span className="flex items-center justify-center text-white text-[20px] h-[40px] w-[40px] bg-[#2C7EF8] rounded-full">
            <p className="">3</p>
          </span>
          <p className="font-bold">Step 3 : Special Offer</p>
        </div>
        <div className="flex items-center gap-[20px]">
          <span className="flex items-center justify-center text-[#2C7EF8] text-[20px] h-[40px] w-[40px] bg-[white] border-[#2C7EF8] border-[2px] rounded-full">
            <p className="">4</p>
          </span>
          <p>Step 4 : Confirmation</p>
        </div>
      </div>
      <div className="flex items-center bg-[#FAFAFA] rounded-[10px] p-[40px] mt-[40px] mb-[61px] gap-[2.67vw] justify-center">
        <div className="w-[38.34vw]">
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
        <div>Section 2</div>
      </div>
    </main>
  );
};

export default Homepage;
