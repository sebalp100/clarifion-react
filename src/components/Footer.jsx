const Footer = () => {
  return (
    <div className="bg-[#252F3D] py-[20px] gap-4 md:h-[88px] text-[12px] leading-[18px] md:text-base flex flex-wrap items-center px-[8.4%] md:px-[8.44%] text-white justify-center md:justify-between">
      <div className="flex gap-3 py-[8px] md:py-0 md:gap-4 items-center justify-between">
        <span className="min-w-[106px]">Copyright (c) 2023</span>
        <span className="bg-white h-[14px] md:h-6 w-[1px]"></span>
        <span>clarifionsupport@clarifion.com</span>
      </div>
      <div className="mb-[2px] md:mb-0 flex gap-4 items-center justify-between">
        <img src="images/lock.png" alt="lock" className="" />
        <span className="md:text-base">Secure 256-bit SSL encryption.</span>
      </div>
    </div>
  );
};

export default Footer;
