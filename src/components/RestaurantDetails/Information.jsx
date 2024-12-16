const Information = () => {
  const socialIcons = [
    {
      src: "/fb.png",
    },
    {
      src: "/instra.png",
    },
    {
      src: "/tiktok.png",
    },
    {
      src: "/wp.png",
    },
  ];
  return (
    <>
      <section className="w-[80%] mx-auto mt-12 sm:mt-24 mb-8">
        <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-4 ">
          <div className="space-y-12">
            <h1 className="font-lexend font-semibold text-xl sm:text-[34px]  leading-7 sm:leading-[42px]">
              More informations
            </h1>
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <img src="/spon.png" alt="" />
                <a
                  href="#"
                  className="border-b border-gray-800 font-roboto text-xl leading-6 text-EerieBlack"
                >
                  See the menu
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/call.png" alt="" />
                <p className="font-roboto text-xl leading-6 text-EerieBlack">
                  +847 87 37 29 01
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/location.png" alt="" />
                <p className="font-roboto text-xl leading-6 text-EerieBlack">
                  Singapour, Bishan
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/clock.png" alt="" />
                <p className="font-roboto text-xl leading-6 text-EerieBlack">
                  7j/7, 08:00 - 22:00
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/link.png" alt="" />
                <a
                  href="#"
                  className="border-b border-gray-800 font-roboto text-xl leading-6 text-EerieBlack"
                >
                  www.bellaitalia.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#">
                  <img src={icon.src} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <img src="/secondMap.png" alt="" />
          </div>
        </div>
      </section>
      <hr className="w-full h-[1px] bg-[#DCDCDC]" />
    </>
  );
};

export default Information;
