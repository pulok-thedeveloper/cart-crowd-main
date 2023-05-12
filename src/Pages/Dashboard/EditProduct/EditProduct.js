import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import EditForm from "./EditForm";

const EditProduct = () => {

  const [product, setProduct] = useState();
  const { id } = useParams();
  

  useEffect(() => {
    fetch(`https://cart-crowd-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      })
      .catch((error) => console.log(error));
  }, [id]);


  return (
    <div className="p-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-5xl font-semibold">Edit Product</h1>
      </div>
      <EditForm product={product}></EditForm>
    </div>
  );
};

export default EditProduct;
