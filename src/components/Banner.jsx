import IconRating from "../assets/icons/rating.png";
import ImgMovie from "../assets/img/Trieu-Lo-Tu-Than-An.jpg";
import IconPlay from "../assets/icons/play-button.png";

const Banner = () => {
  return (
    <div className="relative w-full h-[1000px] md:h-[600px] bg-banner bg-cover bg-center bg-no-repeat mt-16">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-4 md:p-10">
        <div className="md:w-1/2 w-full flex flex-col space-y-6">
        <p className="bg-gradient-to-r from-red-600  py-2 px-4 md:px-6 lg:px-8 text-center md:text-left w-[100%]  lg:w-[190px] text-xl md:text-2xl lg:text-3xl font-bold">
          TV Show
        </p>
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Thần ẩn
            </h1>
            <div className="flex items-center space-x-3">
              {[...Array(5)].map((_, index) => (
                <img key={index} src={IconRating} alt="rating" className="w-8 h-8" />
              ))}
            </div>
            <p className="text-white text-sm md:text-base lg:text-lg">
              Phim cổ trang tiên hiệp Thần Ẩn đã chính thức lên sóng những tập đầu tiên và nhận về 
              phản ứng khả quan từ khán giả. Mặc dù đây là chiếc bình cũ về ngược luyến trong 
              bối cảnh huyền huyễn tưởng tượng của văn hóa phương Đông nhưng cách triển khai cốt truyện
              vẫn có sự mới mẻ, nhiều điểm sáng lôi cuốn.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
              <button className="py-2 px-3 bg-black text-white border border-black font-bold rounded">
                Chi tiết
              </button>
              <button className="py-2 px-3 bg-red-600 text-white font-bold rounded">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center mt-4 md:mt-0">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg h-[800px] md:h-[550px] relative group">
            <button className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </button>
            <img
              src={ImgMovie}
              alt="banner"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
