import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import { ExpenseTrackerContext } from "../../../context/context";
import formatDate from "../../../utils/formatDate";

import useStyles from "./styles";

const Form = () => {
  const initialState = {
    amount: "",
    category: "",
    type: "Income",
    date: formatDate(new Date()),
  };

  const [formData, setFormData] = useState(initialState);

  // context
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };

  console.log(formData);

  const classes = useStyles();

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {selectedCategories.map((c) => (
                <MenuItem key={c.type} value={c.type}>
                  {c.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          type="number"
          label="Amount"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
          type="date"
          label="Date"
          fullWidth
        />
      </Grid>
      <Button
        onClick={createTransaction}
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
