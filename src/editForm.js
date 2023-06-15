import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditForm(props) {
  console.log(props);
  const id = props.id;
  const editTitle = props.data.title;
  console.log(editTitle);

  const editDescription = props.data.description;
  const editCategory = props.data.category;
  const editPrice = props.data.price;

  const [title, setTitle] = React.useState(editTitle);
  const [description, setDescription] = React.useState(editDescription);
  const [category, setCategory] = React.useState(editCategory);
  const [price, setPrice] = React.useState(editPrice);

  React.useEffect(() => {
    setTitle(props.data.title);
    setDescription(props.data.description);
    setCategory(props.data.category);
    setPrice(props.data.price);
  }, [props.data]);

  const showTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const showDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const showCategoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const showPriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const handleClose = () => {
    props.closeForm();
  };

  const editProductHandler = (e) => {
    e.preventDefault();
    const editObj = {
      id: id,
      title: title,
      description: description,
      category: category,
      price: price,
    };
    props.onEdit(editObj);
  };

  return (
    <div>
      <Dialog open={props.openForm} onClose={handleClose}>
        <DialogTitle>Product details</DialogTitle>
        <DialogContent>
          <DialogContentText>Individual Product Details</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Product Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={showTitleHandler}
            value={title}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Product Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={showDescriptionHandler}
            value={description}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Product Category"
            type="text"
            fullWidth
            variant="standard"
            onChange={showCategoryHandler}
            value={category}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Product Price "
            type="number"
            fullWidth
            variant="standard"
            onChange={showPriceHandler}
            value={price}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={editProductHandler}>Edit </Button>
          <Button onClick={handleClose}>Cancel </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
