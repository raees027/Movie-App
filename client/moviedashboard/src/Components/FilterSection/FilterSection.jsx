import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

import { RatingFilter } from "./RatingFilter";
import { Button } from "@mui/material";

export const FilterSection = () => {
  const [filter, setFilter] = useState("");
  const [selectedRatings, setSelectedRatings] = useState([]);

  const isFilterActive = filter && filter !== "all";
  const isAnyFilterActive = filter !== "" || selectedRatings.length > 0;

  const genres = ["Action", "Drama", "Comedy", "Thriller", "Sci-Fi", "Horror"];

  const handleResetFilters = () => {
    !isFilterActive;
    setFilter("");
    setSelectedRatings([]);
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter-container group ring-1  rounded-3xl ring-red-500  py-5 ">
      <h2
        className={`font-medium mb-5 transition-colors duration-300 ${
          isFilterActive ? "text-red-500" : "text-white"
        }`}
      >
        Filter
      </h2>
      <div className="genre-filter-section group">
        <FormControl
          variant="standard"
          sx={{
            minWidth: 160,

            "& label": {
              color: "white",
            },

            "& label.Mui-focused": {
              color: "red",
            },

            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
            },

            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "red",
            },

            "& .MuiInput-underline:after": {
              borderBottomColor: "red",
            },

            "& .MuiSelect-select": {
              color: "white",
            },

            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        >
          <InputLabel id="genre-select-label">Genre</InputLabel>

          <Select
            labelId="genre-select-label"
            id="genre-select"
            value={filter}
            onChange={handleChange}
            label="Genre"
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "rgba(0,0,0,0.85)",
                  color: "white",
                  borderRadius: "12px",
                  mt: 1,

                  "& .MuiMenuItem-root": {
                    color: "white",
                    backgroundColor: "transparent",
                  },

                  "& .MuiMenuItem-root:hover": {
                    backgroundColor: "transparent",
                  },

                  "& .Mui-selected": {
                    backgroundColor: "transparent !important",
                    color: "red",
                  },
                },
              },
            }}
          >
            <MenuItem value="all">
              <em>All</em>
            </MenuItem>

            {genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="rating-filter-section text-white mt-10">
        {/* <FormControl component="fieldset">
          <FormLabel component="legend">Rating</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="bottom"
              control={<Checkbox />}
              label="1"
              labelPlacement="start"
            />
          </FormGroup>
        </FormControl> */}

        <RatingFilter
          selectedRatings={selectedRatings}
          setSelectedRatings={setSelectedRatings}
        />
      </div>
      <div className="filter-footer px-3">
        <Button
          onClick={handleResetFilters}
          //   disabled={!isFilterActive}s
          sx={{
            mt: 3,
            width: "100%",
            py: 1,
            fontSize: 14,
            textTransform: "none",
            color: isAnyFilterActive ? "#E50914" : "#9ca3af",
            border: "1px solid",
            borderColor: isAnyFilterActive ? "#E50914" : "#374151",
            backgroundColor: "transparent",
            opacity: isAnyFilterActive ? 1 : 0.6,
            cursor: isAnyFilterActive ? "pointer" : "not-allowed",
          }}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};
