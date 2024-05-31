const Header = () => {
  return (
    <header className="flex font-medium text-[12px] leading-3 h-[42px] sm:h-[50px] justify-around items-center bg-[#252F3D] text-white">
      <img src="images/arrowtop.svg" className="md:hidden" alt="right arrow" />
      <div className="flex justify-center items-center gap-2">
        <img src="images/check.svg" alt="checkmark" />
        <span>30-DAY SATISFACTION GUARANTEE</span>
      </div>
      <img
        src="images/arrowtop.svg"
        className="rotate-180 md:hidden"
        alt="left arrow"
      />
      <div className="hidden md:flex justify-center items-center gap-2">
        <img src="images/ph_truck-lighttruck.svg" alt="" />
        Free delivery on orders over $40.00
      </div>
      <div className="hidden md:flex justify-center items-center gap-2">
        <img src="images/mdi_cards-heart-outlineheart.svg" alt="" />
        50.000+ HAPPY CUSTOMERS
      </div>
      <div className="hidden md:flex justify-center items-center gap-2">
        <img
          src="images/fluent_arrow-sync-checkmark-20-regularsync.svg"
          alt=""
        />
        100% Money Back Guarantee
      </div>
    </header>
  );
};

export default Header;
