import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CONSTANTS from "../constants";

const Bookings = ({ getMealsScheduled, handleOnChange }) => {
  return (
    <div className="row">
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        placeholder="Enter the hacker list (one hacker per line)"
        onChange={(e) =>
          handleOnChange(e.target.value.split("\n"), CONSTANTS.HACKERS)
        }
      />
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        placeholder="Enter the date range for each hacker's stay (one range per line)"
        onChange={(e) =>
          handleOnChange(e.target.value.split("\n"), CONSTANTS.DATES)
        }
      />
      <Button
        variant="outlined"
        color="primary"
        className="block-center"
        onClick={() => getMealsScheduled()}
      >
        Get Meals Schedule
      </Button>
    </div>
  );
};

export default Bookings;
