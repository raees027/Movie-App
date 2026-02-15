import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

export const Movies = () => {
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
        gap-15
      "
      >
        <div
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
          style={{ backgroundImage: "url('movieswallpaper.jpg')" }}
        >
          <div
            className="
            absolute inset-0
            bg-black/40
            group-hover:bg-black/65
            transition-all duration-300
          "
          ></div>

          <div className="header-bar relative z-11 flex justify-between pt-2 px-2 ">
            {/* <EditIcon className="cursor-pointer" />
            <BookmarkIcon className="cursor-pointer" /> */}

            <Tooltip title="Edit" placement="right-end">
              <EditIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                "
              />
            </Tooltip>

            <Tooltip title="Watchlater " placement="left-start">
              <BookmarkIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                    "
              />
            </Tooltip>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-10  text-white">
            <h2 className="text-lg font-semibold ">Superman</h2>
            <h3 className="text-sm text-gray-300">Action</h3>
            <div className="rating-bar flex justify-center">
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size="small"
                />
              </Stack>
            </div>
          </div>
        </div>
        <div
          className="
            group
            relative
            h-60
            rounded-xl
            overflow-hidden
            bg-cover bg-center
            transition-all duration-300
            hover:scale-105
          "
          style={{ backgroundImage: "url('movieswallpaper.jpg')" }}
        >
          <div
            className="
            absolute inset-0
            bg-black/40
            group-hover:bg-black/65
            transition-all duration-300
          "
          ></div>

          <div className="header-bar relative z-11 flex justify-between pt-2 px-2 ">
            {/* <EditIcon className="cursor-pointer" />
            <BookmarkIcon className="cursor-pointer" /> */}

            <Tooltip title="Edit" placement="right-end">
              <EditIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                "
              />
            </Tooltip>

            <Tooltip title="Watchlater " placement="left-start">
              <BookmarkIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                    "
              />
            </Tooltip>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-10  text-white">
            <h2 className="text-lg font-semibold ">Superman</h2>
            <h3 className="text-sm text-gray-300">Action</h3>
            <div className="rating-bar flex justify-center">
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size="small"
                />
              </Stack>
            </div>
          </div>
        </div>
        <div
          className="
            group
            relative
            h-60
            rounded-xl
            overflow-hidden
            bg-cover bg-center
            transition-all duration-300
            hover:scale-105
          "
          style={{ backgroundImage: "url('movieswallpaper.jpg')" }}
        >
          <div
            className="
            absolute inset-0
            bg-black/40
            group-hover:bg-black/65
            transition-all duration-300
          "
          ></div>

          <div className="header-bar relative z-11 flex justify-between pt-2 px-2 ">
            {/* <EditIcon className="cursor-pointer" />
            <BookmarkIcon className="cursor-pointer" /> */}

            <Tooltip title="Edit" placement="right-end">
              <EditIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                "
              />
            </Tooltip>

            <Tooltip title="Watchlater " placement="left-start">
              <BookmarkIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                    "
              />
            </Tooltip>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-10  text-white">
            <h2 className="text-lg font-semibold ">Superman</h2>
            <h3 className="text-sm text-gray-300">Action</h3>
            <div className="rating-bar flex justify-center">
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size="small"
                />
              </Stack>
            </div>
          </div>
        </div>
        <div
          className="
            group
            relative
            h-60
            rounded-xl
            overflow-hidden
            bg-cover bg-center
            transition-all duration-300
            hover:scale-105
          "
          style={{ backgroundImage: "url('movieswallpaper.jpg')" }}
        >
          <div
            className="
            absolute inset-0
            bg-black/40
            group-hover:bg-black/65
            transition-all duration-300
          "
          ></div>

          <div className="header-bar relative z-11 flex justify-between pt-2 px-2 ">
            {/* <EditIcon className="cursor-pointer" />
            <BookmarkIcon className="cursor-pointer" /> */}

            <Tooltip title="Edit" placement="right-end">
              <EditIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                "
              />
            </Tooltip>

            <Tooltip title="Watchlater " placement="left-start">
              <BookmarkIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                    "
              />
            </Tooltip>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-10  text-white">
            <h2 className="text-lg font-semibold ">Superman</h2>
            <h3 className="text-sm text-gray-300">Action</h3>
            <div className="rating-bar flex justify-center">
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size="small"
                />
              </Stack>
            </div>
          </div>
        </div>
        <div
          className="
            group
            relative
            h-60
            rounded-xl
            overflow-hidden
            bg-cover bg-center
            transition-all duration-300
            hover:scale-105
          "
          style={{ backgroundImage: "url('movieswallpaper.jpg')" }}
        >
          <div
            className="
            absolute inset-0
            bg-black/40
            group-hover:bg-black/65
            transition-all duration-300
          "
          ></div>

          <div className="header-bar relative z-11 flex justify-between pt-2 px-2 ">
            {/* <EditIcon className="cursor-pointer" />
            <BookmarkIcon className="cursor-pointer" /> */}

            <Tooltip title="Edit" placement="right-end">
              <EditIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                "
              />
            </Tooltip>

            <Tooltip title="Watchlater " placement="left-start">
              <BookmarkIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                    "
              />
            </Tooltip>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-10  text-white">
            <h2 className="text-lg font-semibold ">Superman</h2>
            <h3 className="text-sm text-gray-300">Action</h3>
            <div className="rating-bar flex justify-center">
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size="small"
                />
              </Stack>
            </div>
          </div>
        </div>
        <div
          className="
            group
            relative
            h-60
            rounded-xl
            overflow-hidden
            bg-cover bg-center
            transition-all duration-300
            hover:scale-105
          "
          style={{ backgroundImage: "url('movieswallpaper.jpg')" }}
        >
          <div
            className="
            absolute inset-0
            bg-black/40
            group-hover:bg-black/65
            transition-all duration-300
          "
          ></div>

          <div className="header-bar relative z-11 flex justify-between pt-2 px-2 ">
            {/* <EditIcon className="cursor-pointer" />
            <BookmarkIcon className="cursor-pointer" /> */}

            <Tooltip title="Edit" placement="right-end">
              <EditIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                "
              />
            </Tooltip>

            <Tooltip title="Watchlater " placement="left-start">
              <BookmarkIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                    "
              />
            </Tooltip>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-10  text-white">
            <h2 className="text-lg font-semibold ">Superman</h2>
            <h3 className="text-sm text-gray-300">Action</h3>
            <div className="rating-bar flex justify-center">
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size="small"
                />
              </Stack>
            </div>
          </div>
        </div>
        <div
          className="
            group
            relative
            h-60
            rounded-xl
            overflow-hidden
            bg-cover bg-center
            transition-all duration-300
            hover:scale-105
          "
          style={{ backgroundImage: "url('movieswallpaper.jpg')" }}
        >
          <div
            className="
            absolute inset-0
            bg-black/40
            group-hover:bg-black/65
            transition-all duration-300
          "
          ></div>

          <div className="header-bar relative z-11 flex justify-between pt-2 px-2 ">
            {/* <EditIcon className="cursor-pointer" />
            <BookmarkIcon className="cursor-pointer" /> */}

            <Tooltip title="Edit" placement="right-end">
              <EditIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                "
              />
            </Tooltip>

            <Tooltip title="Watchlater " placement="left-start">
              <BookmarkIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                    "
              />
            </Tooltip>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-10  text-white">
            <h2 className="text-lg font-semibold ">Superman</h2>
            <h3 className="text-sm text-gray-300">Action</h3>
            <div className="rating-bar flex justify-center">
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size="small"
                />
              </Stack>
            </div>
          </div>
        </div>
        <div
          className="
            group
            relative
            h-60
            rounded-xl
            overflow-hidden
            bg-cover bg-center
            transition-all duration-300
            hover:scale-105
          "
          style={{ backgroundImage: "url('movieswallpaper.jpg')" }}
        >
          <div
            className="
            absolute inset-0
            bg-black/40
            group-hover:bg-black/65
            transition-all duration-300
          "
          ></div>

          <div className="header-bar relative z-11 flex justify-between pt-2 px-2 ">
            {/* <EditIcon className="cursor-pointer" />
            <BookmarkIcon className="cursor-pointer" /> */}

            <Tooltip title="Edit" placement="right-end">
              <EditIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                "
              />
            </Tooltip>

            <Tooltip title="Watchlater " placement="left-start">
              <BookmarkIcon
                className="
                    cursor-pointer
                    transition-transform
                    duration-200
                    hover:scale-110
                    active:scale-95
                    "
              />
            </Tooltip>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-10  text-white">
            <h2 className="text-lg font-semibold ">Superman</h2>
            <h3 className="text-sm text-gray-300">Action</h3>
            <div className="rating-bar flex justify-center">
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size="small"
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
