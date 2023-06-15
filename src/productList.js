import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, description, category, price, action) {
  return { name, description, category, price, action };
}

export default function Productlist(prop) {
  const productDetailDialogHandler = (item) => {
    prop.productDetailOpen(item);
  };

  const deleteProductHandler = (id) => {
    prop.onDelete(id);
  };
  const editProductHandler = (item) => {
    prop.editProduct(item);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="centre">Product Title</StyledTableCell>
            <StyledTableCell align="centre">
              {" "}
              Product Description
            </StyledTableCell>
            <StyledTableCell align="centre">Product Category</StyledTableCell>
            <StyledTableCell align="centre">Product Price</StyledTableCell>
            <StyledTableCell align="centre">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prop.product.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row" align="centre">
                {item.title}
              </StyledTableCell>
              <StyledTableCell align="centre">
                {item.description}
              </StyledTableCell>
              <StyledTableCell align="centre">{item.category}</StyledTableCell>
              <StyledTableCell align="centre">{item.price}</StyledTableCell>
              <StyledTableCell align="centre">
                <VisibilityIcon
                  sx={{ color: "#b0adac", cursor: "pointer" }}
                  onClick={() => productDetailDialogHandler(item)}
                />
                <EditIcon
                  sx={{ color: "#46db5f", cursor: "pointer" }}
                  onClick={() => editProductHandler(item)}
                />
                <DeleteSweepIcon
                  sx={{ color: "#de0707", cursor: "pointer" }}
                  onClick={() => deleteProductHandler(item.id)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
