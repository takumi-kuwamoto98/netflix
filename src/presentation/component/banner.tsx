import { useEffect, useState } from "react";
import { requests } from "../../api/request";
import axios from "../../api/axios";

type movieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.result);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log({ movie });
  function truncate(string: any, number: number) {
    if (string !== undefined) {
      return string.length > number
        ? string.substr(0, number - 1) + "..."
        : string;
    }
  }
  return (
    <header
      className="text-[#fff] object-contain h-[448px]"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-[30px] pt-[140px] h-[190px]">
        <h1 className="text-[3rem] font-extrabold pb-[0.3rem]">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="">
          <button className="px-[2rem] font-bold hover:text-black hover:bg-white">
            Play
          </button>
          <button className="px-[2rem] font-bold hover:text-black hover:bg-white">
            My List
          </button>
        </div>
        <p className="w-[45rem] h-[80px] leading-snug text-[0.8rem] max-w-[360px] pt-4">
          {truncate(movie?.overview, 150)}
        </p>
      </div>
      <div className="block pt-[258px] h-[7.4rem] bg-gradient-to-b from-transparent via-rgba-37-37-37-61 to-[#111]"></div>
    </header>
  );
};
