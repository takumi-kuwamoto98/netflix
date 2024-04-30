import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { AxiosResponse } from "axios";
import { IMAGE_BASE_URL } from "../../api/request";
import instance from "../../api/axios";
import YouTube from "react-youtube";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  originalName: string;
  poster_path: string;
  backdrop_path: string;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");
  const options: Options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request: AxiosResponse = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie: Movie): Promise<void> => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const response = await instance.get(
        `/movie/${movie.id}/videos?api_key=545fc55d4b1e6529eda949cf72ab09f4`
      );
      console.log(response.data.results);
      setTrailerUrl(response.data.results[0]?.key);
    }
  };

  // console.log(movies[0]);
  return (
    <div className="ml-[20px] text-white">
      <h2 className="">{title}</h2>
      <div className="flex overflow-x-auto overflow-y-hidden p-[20px] hidden-scrollbar">
        {movies?.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`transition object-contain
                ${
                  isLargeRow
                    ? "max-h-[250px] hover:scale-150"
                    : "max-h-[100px] hover:scale-150"
                }
              }`}
              src={`${IMAGE_BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              onClick={() => handleClick(movie)}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </div>
  );
};
