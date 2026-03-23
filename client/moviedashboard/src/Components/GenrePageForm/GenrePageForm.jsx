import { useForm, Controller } from "react-hook-form";
import "../MoviePageForm/MoviePageForm.css";
import { useContext, useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { ApiContext } from "../../Context/ApiContext";

export const GenrePageForm = () => {
  const form = useForm();
  const { register, handleSubmit, formState, control, setFocus, reset } = form;
  const { errors } = formState;
  const { GENRE_API_BASE_URL } = useContext(ApiContext);
  const [genres, setGenres] = useState([]);
  const titleInputRef = useRef();

  useEffect(() => {
    fetchGenre();
    setFocus("title");
  }, []);
  const fetchGenre = async () => {
    try {
      const response = await axios(GENRE_API_BASE_URL);
      setGenres(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  const onSubmit = async (data) => {
    // console.log("form-submitted", data);
    try {
      const response = await axios.post(GENRE_API_BASE_URL, {
        title: data.title,
      });
      fetchGenre();
      console.log("==genre data", response.data);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
    reset();
    setFocus("title");
  };

  return (
    <>
      <div className="form-container bg-(--form-background-color) min-w-100 min-h-100 py-12 rounded-lg flex flex-col justify-center ">
        <h1 className="text-white text-[26px] font-medium mb-5">
          Edit/Create Genre
        </h1>
        <div className="form-section mt-5 flex flex-col items-center text-white">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full px-12">
            <div className="form-upper-section flex justify-between">
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

              <div className="submit-section mt-3 rounded-lg py-3 ">
                {/* <button type="submit">Submit</button> */}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#E50914",
                    px: 4,
                    py: 1,
                    fontSize: "17px",
                    fontWeight: 450,
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
            </div>
            <div className="form-lower-section flex justify-center mt-8 ">
              <div className="genre-section grid grid-cols-3 gap-5">
                {genres.map((genre) => (
                  <div
                    key={genre._id}
                    className="genre-card  w-24  pb-4 pt-.5 rounded-md bg-(--sidebar-text) "
                  >
                    <div className="action-icons  flex justify-end   ">
                      <div className="edit-icon">
                        <IconButton aria-label="edit" size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </div>
                      <div className="delete-icon">
                        <IconButton aria-label="delete" size="small">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </div>

                      {/* <div className="save-icon">
                        <IconButton aria-label="save" size="small">
                          <SaveIcon fontSize="small" />
                        </IconButton>
                      </div> */}
                    </div>

                    <h2 className="genre-text  mt-1 font-semibold text-[14px]">
                      {genre.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
