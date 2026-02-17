import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Slider as AntdSlider } from "antd";
import "../MoviePageForm/MoviePageForm.css";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Button from "@mui/material/Button";

export const MoviePageForm = () => {
  const form = useForm();
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;
  const [checked, setChecked] = useState(true);
  const genres = ["Action", "Drama", "Comedy", "Thriller", "Sci-Fi", "Horror"];

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const onSubmit = (data) => {
    console.log("form-submitted", data);
  };
  return (
    <>
      <div className="form-container bg-(--form-background-color) min-w-100 min-h-100 py-8 rounded-lg flex flex-col justify-center ">
        <h1 className="text-white text-[30px] font-medium mb-10">
          Edit/Create Movies
        </h1>
        <div className="form-section flex flex-col items-center text-white">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full px-12">
            <div className="uploading-section mb-4 flex flex-col items-center">
              <input
                type="file"
                id="upload-image"
                hidden
                {...register("profilePicture")}
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
                      step={1}
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
                      {genres.map((genre) => (
                        <label
                          key={genre}
                          className="flex items-center gap-2 text-gray-200"
                        >
                          <Checkbox
                            checked={field.value.includes(genre)}
                            onChange={(e) => {
                              const newValue = e.target.checked
                                ? [...field.value, genre]
                                : field.value.filter((g) => g !== genre);
                              field.onChange(newValue);
                            }}
                            sx={{
                              color: "#fff",
                              "&.Mui-checked": {
                                color: "#e50914",
                              },
                            }}
                          />
                          <span className="text-sm">{genre}</span>
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
