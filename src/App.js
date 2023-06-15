import { useEffect, useState } from "react";
import "./App.css";
import Header from "./header";
import Productlist from "./productList";
import ViewProduct from "./viewProduct";
import EditForm from "./editForm";

function App() {
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [viewData, setViewData] = useState(null);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const deleteProduct = (id) => {
    const list = [...productData];
    const deletedItem = list.find((item) => item.id === id);
    const newList = list.filter((item) => item.id !== id);
    setProductData(newList);
    alert(`Item deleted: ${JSON.stringify(deletedItem)}`);
  };

  const editProduct = (item) => {
    setViewData(item);
    setEditOpen(true);
  };
  const editProductHandler = (newObj) => {
    const updatedProductData = productData.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      }
      return item;
    });
    setProductData(updatedProductData);
    console.log("Updated product:", newObj);
    alert("product uodated");
    setEditOpen(false);
  };
  const productDetailOpen = (item) => {
    setViewData(item);
    setOpen(true);
    console.log(item);
  };
  const closeDilog = () => {
    setOpen(false);
    setEditOpen(false);
  };
  const setFilterFunction = (filtered) => {
    setFilteredProducts(filtered);
  };
  const fiterGreaterThan100 = () => {
    const newList = [...productData];
    const newProductData = newList.filter((item) => item.price > 100);
    setProductData(newProductData);
  };
  async function filterLessThan100() {
    const newList = [...productData];
    const newProductData = newList.filter((item) => item.price < 100);
    setProductData(newProductData);
  }

  async function getData() {}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.postman.com/collections/24582109-37d97559-22b0-42e0-b592-7fd8b90b8e01?access_key=PMAT-01GXAEX88FNRZN45AWACQ2V20F",
          { method: "GET" }
        );

        const jsonData = await response.json();
        console.log(jsonData);
        console.log(jsonData.collection.item[0]);
        setData(jsonData.collection.item[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const allProduct = async () => {
      try {
        const allProductResponse = await fetch(
          "https://fakestoreapi.com/products",
          { method: "GET" }
        );
        const allProductJsonData = await allProductResponse.json();
        console.log(allProductJsonData);
        setProductData(allProductJsonData);
      } catch (erroe) {
        console.error("Error fetching allProductData");
      }
    };
    allProduct();
  }, []);
  return (
    <div className="App">
      <Header
        searchData={productData}
        filteredItems={setFilterFunction}
        onFilterGreaterThan100={fiterGreaterThan100}
        onFilterLessThan100={filterLessThan100}
      />
      <Productlist
        product={filteredProducts.length > 0 ? filteredProducts : productData}
        productDetailOpen={productDetailOpen}
        onDelete={deleteProduct}
        editProduct={editProduct}
      />
      {viewData != null && (
        <ViewProduct item={viewData} dilogOpen={open} dilogClose={closeDilog} />
      )}
      {viewData != null && (
        <EditForm
          data={viewData}
          openForm={editOpen}
          closeForm={closeDilog}
          onEdit={editProductHandler}
        />
      )}
    </div>
  );
}

export default App;
