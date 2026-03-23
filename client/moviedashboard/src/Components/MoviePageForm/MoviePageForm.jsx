import { useForm, Controller } from "react-hook-form";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Slider as AntdSlider } from "antd";
import "../MoviePageForm/MoviePageForm.css";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { ApiContext } from "../../Context/ApiContext";
import { ToastContainer, toast, Slide } from "react-toastify";

export const MoviePageForm = () => {
  const form = useForm();
  const { register, handleSubmit, formState, control, watch, reset, setFocus } =
    form;
  const { errors } = formState;
  const [checked, setChecked] = useState(true);
  const { MOVIE_API_BASE_URL, GENRE_API_BASE_URL } = useContext(ApiContext);
  const [genres, setGenres] = useState([]);
  const [filteredGenres, setFilteredGenres] = useState([]);

  const [imagePreview, setImagePreview] = useState("");

  const moviePoster = watch("moviePoster");
  useEffect(() => {
    if (moviePoster && moviePoster[0]) {
      const file = moviePoster[0];
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  }, [moviePoster]);

  useEffect(() => {
    fetchGenre();
    setFocus("title");
  }, []);

  const fetchGenre = async () => {
    const response = await axios(GENRE_API_BASE_URL);
    setGenres(response.data);
    console.log(response.data);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("rating", data.rating);
    formData.append("genres", JSON.stringify(filteredGenres));

    if (data.moviePoster && data.moviePoster[0]) {
      formData.append("moviePoster", data.moviePoster[0]);
    }

    try {
      const response = await axios.post(MOVIE_API_BASE_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      reset();
      setImagePreview("");
    } catch (error) {
      toast.error(error.response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }

    console.log("form-submitted", data);
  };
  return (
    <>
      <div className="form-container bg-(--form-background-color) min-w-100 min-h-100 py-8 rounded-lg flex flex-col justify-center ">
        <h1 className="text-white text-[26px] font-medium mb-10">
          Edit/Create Movies
        </h1>
        <div className="form-section flex flex-col items-center text-white">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full px-12">
            <div className="uploading-section mb-4 flex flex-col items-center">
              <div>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt=""
                    style={{
                      width: "120px",
                      height: "120px",
                      marginBottom: "20px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                    }}
                  />
                )}
              </div>
              <input
                type="file"
                id="upload-image"
                hidden
                {...register("moviePoster")}
              />

              <label htmlFor="upload-image">
                <Fab
                  variant="extended"
                  component="span"
                  sx={{
                    backgroundColor: "#e50914",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#b20710",
                    },
                  }}
                >
                  <AddIcon sx={{ mr: 1 }} />
                  Upload Image
                </Fab>
              </label>
            </div>

            <div className="title-section mb-4  flex flex-col items-baseline">
              <label>Title</label>
              <input
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
                className="
  w-full
  bg-transparent
  text-white
  text-sm
  p-2
  border-b-2
  border-gray-500
  focus:border-red-600
  focus:outline-none
  transition-all
  duration-400
"
              />

              {errors.title?.message && (
                <p className="error-message text-red-600 font-[12px] mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="rating-section  flex flex-col items-baseline mb-6 ">
              <label>Rating</label>
              <div className="slider-bar w-full">
                <Controller
                  name="rating"
                  control={control}
                  defaultValue={0}
                  rules={{ required: "Rating is required" }}
                  render={({ field }) => (
                    <AntdSlider
                      min={0}
                      max={5}
                      step={0.5}
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                    />
                  )}
                />

                {errors.rating && (
                  <p className="text-red-600 text-[12px] mt-1">
                    {errors.rating.message}
                  </p>
                )}
              </div>
            </div>

            <div className="genre-section flex flex-col items-baseline">
              <label>Genre</label>
              <div className="genre-check-box w-full flex">
                <Controller
                  name="genres"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <div className="grid grid-cols-3 gap-3">
                      {genres?.map((genre) => (
                        <label
                          key={genre._id}
                          className="flex items-center gap-2 text-gray-200"
                        >
                          <Checkbox
                            checked={field.value.includes(genre._id)}
                            onChange={(e) => {
                              const newValue = e.target.checked
                                ? [...field.value, genre._id]
                                : field.value.filter((id) => id !== genre._id);

                              field.onChange(newValue);
                              setFilteredGenres(newValue);
                            }}
                            sx={{
                              color: "#fff",
                              "&.Mui-checked": {
                                color: "#e50914",
                              },
                            }}
                          />

                          <span className="text-bold ">{genre.title}</span>
                        </label>
                      ))}
                    </div>
                  )}
                />
              </div>
            </div>

            <div className="submit-section mt-5 rounded-lg py-3 ">
              {/* <button type="submit">Submit</button> */}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#E50914",
                  px: 3,
                  py: 1,
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#B20710",
                    boxShadow: "none",
                  },
                }}
                className="w-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
