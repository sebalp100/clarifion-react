const Footer = () => {
  return (
    <div className="bg-[#252F3D] py-[20px] gap-4 sm:h-[88px] text-[12px] leading-[18px] sm:text-base flex flex-wrap items-center px-[8.4%] sm:px-[8.44%] text-white justify-center sm:justify-between">
      <div className="flex gap-3 py-[8px] sm:py-0 sm:gap-4 items-center justify-between">
        <span className="min-w-[106px]">Copyright (c) 2023</span>
        <span className="bg-white h-[14px] sm:h-6 w-[1px]"></span>
        <span>clarifionsupport@clarifion.com</span>
      </div>
      <div className="mb-[2px] sm:mb-0 flex gap-4 items-center justify-between">
        <img src="images/lock.png" alt="lock" className="" />
        <span className="sm:text-base">Secure 256-bit SSL encryption.</span>
      </div>
    </div>
  );
};

export default Footer;
