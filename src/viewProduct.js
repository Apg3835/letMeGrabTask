import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ViewProduct(props) {
  console.log(props);
  const id = props.id;
  const productTitle = props.item.title;

  const productDescription = props.item.description;
  const productCategory = props.item.category;
  const productPrice = props.item.price;

  const [title, setTitle] = React.useState(productTitle);
  const [description, setDescription] = React.useState(productDescription);
  const [category, setCategory] = React.useState(productCategory);
  const [price, setPrice] = React.useState(productPrice);

  React.useEffect(() => {
    setTitle(props.item.title);
    setDescription(props.item.description);
    setCategory(props.item.category);
    setPrice(props.item.price);
  }, [props.item]);

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
    props.dilogClose();
  };

  return (
    <div>
      <Dialog open={props.dilogOpen} onClose={handleClose}>
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
          <Button onClick={handleClose}>Cancel </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
