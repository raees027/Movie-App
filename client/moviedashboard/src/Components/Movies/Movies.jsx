import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { useContext } from "react";
import { SearchListContext } from "../../context/SearchListContext";

export const Movies = ({ movieList }) => {
  // const { movieList } = useContext(SearchListContext);
  // console.log("movieli in movies", movieList);

  if (!Array.isArray(movieList)) {
    return <p className="text-white">Loading...</p>; // 🛡️ prevents crash
  }

  return (
    <div className="movie-container pt-10 px-6">
      <div
        className="
        movie-items
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-10
      "
      >
        {movieList.map((movie) => (
          <div
            key={movie._id}
            className="
            group
            relative
            h-60
            w-45
            rounded-xl
            overflow-hidden
            bg-cover bg-center
            transition-all duration-300
            hover:scale-105
          "
            style={{
              backgroundImage: `url(http://localhost:3007/images/${movie.image})`,
              objectFit: "cover",
            }}
          >
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/65 transition-all"></div>

            <div className="header-bar relative z-10 flex justify-between pt-2 px-2">
              <Tooltip title="Edit">
                <EditIcon className="cursor-pointer hover:scale-110 transition" />
              </Tooltip>

              <Tooltip title="Watchlater">
                <BookmarkIcon className="cursor-pointer hover:scale-110 transition" />
              </Tooltip>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-10 text-white">
              <h2 className="text-lg font-semibold">{movie.title}</h2>

              <div className="genre-items flex flex-wrap justify-center ">
                {movie.genre?.map((gen) => (
                  <h3 key={gen._id} className="text-sm text-gray-270 ml-2">
                    {gen.title}
                  </h3>
                ))}
              </div>

              <div className="rating-bar flex justify-center">
                <Stack spacing={1}>
                  <Rating
                    value={movie.rating}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                </Stack>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
