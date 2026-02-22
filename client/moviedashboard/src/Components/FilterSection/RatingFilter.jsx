import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

export const RatingFilter = ({ selectedRatings, setSelectedRatings }) => {
  c;

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating],
    );
  };

  const isActive = selectedRatings.length > 0;

  return (
    <div className="rating-filter-section mt-6">
      <FormControl component="fieldset">
        <FormLabel
          component="legend"
          sx={{
            color: isActive ? "red" : "white",
            fontWeight: 400,
            fontSize: 16,
            mb: 2,
            transition: "color 0.3s ease",
            textAlign: "left",
            paddingLeft: 3,
            "&.Mui-focused": {
              color: isActive ? "#E50914" : "white",
            },
          }}
        >
          Rating
        </FormLabel>

        <FormGroup row>
          {[1, 2, 3, 4, 5].map((rating) => (
            <FormControlLabel
              key={rating}
              label={rating}
              labelPlacement="top"
              control={
                <Checkbox
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                  disableRipple
                  sx={{
                    color: "#9ca3af",
                    "&.Mui-checked": {
                      color: "#E50914",
                    },
                  }}
                />
              }
              sx={{
                color: "white",
                mx: 1,
              }}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
};
