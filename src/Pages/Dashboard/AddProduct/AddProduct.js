import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import addImage from "../../../Assests/addImage.png";
import { MdCancel } from "react-icons/md";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const imageHostKey = process.env.REACT_APP_imgbb;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { categories } = useContext(AuthContext);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const image = selectedImages

    selectedFilesArray.forEach((item, index) => {

      const formData = new FormData();
      formData.append("image", item);

      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            image.push(imgData.data.url)
          }
        });
    });

    setSelectedImages(image);
  };

  const handleUpload = (data) => {

    const productData = {
      title: data.title,
      detail: data.detail,
      description: data.description,
      price: {
        general: +data.general,
        discount: +data.discount,
        disPrice: data.general - (data.discount * data.general) / 100,
        discountDuration: 0,
      },
      image: selectedImages,
      sizes: data.sizes,
      colors: [],
      available: +data.available,
      sold: 22,
      categories: data.categories,
    };
    console.log(productData);

    fetch("https://cart-crowd-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.success){
          toast.success('New product added successfully');
          navigate('/dashboard/products')
        }
      });
  };

  return (
    <div className="p-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-5xl font-semibold">Add Product</h1>
      </div>
      <form
        className="bg-white p-10 rounded-lg grid gap-5 text-2xl"
        onSubmit={handleSubmit(handleUpload)}
      >
        <input
          className="px-5 py-3 outline-none border rounded focus:border-primary"
          {...register("title", {
            required: { value: true, message: "Product title is required" },
          })}
          placeholder="Product title"
        />
        {errors.title && <p className="text-red-500">This field is required</p>}
        <textarea
          className="px-5 py-3 outline-none border rounded focus:border-primary"
          {...register("detail", {
            required: { value: true, message: "Short Detail is required" },
          })}
          placeholder="Short Detail"
        />
        {errors.detail && (
          <p className="text-red-500">This field is required</p>
        )}
        <textarea
          className="px-5 py-3 outline-none border rounded focus:border-primary"
          {...register("description", {
            required: { value: true, message: "Description is required" },
          })}
          placeholder="Description"
          rows="5"
        />
        {errors.description && (
          <p className="text-red-500">This field is required</p>
        )}
        <div className="grid grid-cols-3 gap-5">
          <div>
            <input
              className="px-5 py-3 outline-none border rounded focus:border-primary w-full"
              {...register("general", {
                required: { value: true, message: "Product price is required" },
              })}
              placeholder="$ Product price"
              type="number"
            />
            {errors.general && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
          <div>
            <input
              className="px-5 py-3 outline-none border rounded focus:border-primary w-full"
              {...register("discount", {
                required: {
                  value: true,
                  message: "Product discount is required",
                },
              })}
              placeholder="% Discount"
              type="number"
            />
            {errors.discount && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
          <div>
            <input
              className="px-5 py-3 outline-none border rounded focus:border-primary w-full"
              {...register("available", {
                required: {
                  value: true,
                  message: "Product Quantity is required",
                },
              })}
              placeholder="Quantity"
              type="number"
            />
            {errors.available && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
        </div>
        {/* Categories */}
        <h3 className="font-medium">Select Categories</h3>
        <div className="grid grid-cols-4 gap-3">
          {categories?.map((category) => (
            <div className="flex gap-3">
              <input
                type="checkbox"
                {...register("categories", {
                  required: {
                    value: true,
                    message: "Product category is required",
                  },
                })}
                id={category._id}
                value={category.name}
              />
              <label for={category._id}>{category.name}</label>
            </div>
          ))}
        </div>
        {errors.categories && (
          <p className="text-red-500">This field is required</p>
        )}

        {/* Sizes */}
        <h3 className="font-medium">Select Sizes</h3>
        <div className="grid grid-cols-6 gap-3">
          <div className="flex gap-3">
            <input
              type="checkbox"
              {...register("sizes", {
                required: { value: true, message: "Product size is required" },
              })}
              id="XS"
              value="XS"
            />
            <label for="XS">XS</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              {...register("sizes", {
                required: { value: true, message: "Product size is required" },
              })}
              id="S"
              value="S"
            />
            <label for="S">S</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              {...register("sizes", {
                required: { value: true, message: "Product size is required" },
              })}
              id="L"
              value="L"
            />
            <label for="L">L</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              {...register("sizes", {
                required: { value: true, message: "Product size is required" },
              })}
              id="XL"
              value="XL"
            />
            <label for="XL">XL</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              {...register("sizes", {
                required: { value: true, message: "Product size is required" },
              })}
              id="XXL"
              value="XXL"
            />
            <label for="XXL">XXL</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              {...register("sizes", {
                required: { value: true, message: "Product size is required" },
              })}
              id="XXXL"
              value="XXXL"
            />
            <label for="XXXL">XXXL</label>
          </div>
        </div>
        {errors.sizes && <p className="text-red-500">This field is required</p>}

        <div className="mt-5">
          <label
            htmlFor="image"
            className=" border-2 cursor-pointer flex flex-col gap-5 p-5 rounded-lg justify-center items-center border-dashed"
          >
            <img className="w-40" src={addImage} alt="" />
            <h1 className="text-3xl font-semibold text-gray-500">
              Browse to upload
            </h1>
            <p className="text-primary font-medium">
              Only JPEG, PNG and WEBP files are supported
            </p>
          </label>
          <input
            type="file"
            {...register("image", {
              required: { value: true, message: "Product image is required" },
            })}
            id="image"
            multiple
            accept="image/png, image/jpeg, img/webp"
            className="invisible"
            onChange={handleImageSelect}
          />
          <div className="grid grid-cols-6 gap-5 my-5">
            {selectedImages &&
              selectedImages.map((image, index) => {
                return (
                  <div className="relative" key={index}>
                    <img src={image} alt="" />
                    <button
                      onClick={() =>
                        setSelectedImages(
                          selectedImages.filter((item) => item !== image)
                        )
                      }
                      className="text-red-500 absolute top-0 right-0 text-4xl bg-secondary rounded-full"
                    >
                      <MdCancel />
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        {errors.image && <p className="text-red-500">This field is required</p>}

        <div>
          <input
            type="submit"
            value="Upload product"
            className="flex items-center gap-3 cursor-pointer hover:bg-[#114c5fc7] bg-primary py-4 px-6 text-2xl font-medium text-secondary"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
