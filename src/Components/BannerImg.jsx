import banner from "../assets/banner.jpg";
const BannerImg = () => {
  return (
    <div className="p-4 border-2 rounded-xl absolute top-[350px] md:top-[330px] lg:top-[380px] left-[14%] w-3/4 z-10">
      <figure className=" rounded-xl border-2 ">
        <img src={banner} alt="" className="w-full rounded-xl" />
      </figure>
    </div>
  );
};

export default BannerImg;
