const Footer = () => {
  return (
    <div className="bg-[#252F3D] h-[88px] flex items-center px-[8.46%] text-white justify-between">
      <div className="flex gap-4 items-center justify-between">
        <span>Copyright (c) 2023</span>
        <span className="bg-white h-6 w-[1px]"></span>
        <span>clarifionsupport@clarifion.com</span>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <img src="images/lock.png" alt="lock" className="" />
        <span className="text-base">Secure 256-bit SSL encryption.</span>
      </div>
    </div>
  );
};

export default Footer;
