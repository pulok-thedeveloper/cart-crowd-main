import React, { useContext, useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { AuthContext } from "../../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const DashboardProducts = () => {
  const { categories } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("All category");
  const [filteredProducts, setFilteredProducts] = useState();

  const handleform = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetch(`https://cart-crowd-server.vercel.app/shop/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredProducts(data.data);
      })
      .catch((error) => console.log(error));
  }, [selectedCategory, filteredProducts]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you wanna delete this product"
    );
    console.log(id);
    if (proceed) {
      fetch(`https://cart-crowd-server.vercel.app/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            toast.success("deleted successfully");
          }
        });
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-5xl font-semibold">Products List</h1>
        <Link
          to="/dashboard/add-product"
          className="flex items-center gap-3 bg-primary py-4 px-6 text-2xl font-medium text-secondary"
        >
          <BsPlus className="text-4xl" />
          Add new product
        </Link>
      </div>
      <div className="bg-white rounded-lg">
        <div className="px-10 py-6 border-b">
          <form onSubmit={handleform} className="flex items-center">
            <select
              name="category"
              className="bg-[#F5F6F7] text-2xl px-5 py-3 rounded outline-none w-1/3"
            >
              <option>All category</option>
              {categories?.map((category) => (
                <option key={category._id}>{category.name}</option>
              ))}
            </select>
            <input
              type="submit"
              value="Filter"
              className="text-2xl px-5 py-4 border-l bg-[#F5F6F7] cursor-pointer"
            />
          </form>
        </div>
        <div className="px-10">
          <table className="table w-full">
            <thead>
              <tr className="grid grid-cols-4 text-3xl font-medium py-6 border-b">
                <th className="col-span-2">Product title</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts?.map((product) => (
                <tr
                  key={product._id}
                  className="grid grid-cols-4 items-center gap-5 py-6 text-2xl border-b hover:bg-[#F5F6F7] transition cursor-pointer"
                >
                  <td className="col-span-2">
                    <div className="flex items-center gap-5">
                      <img className="w-20" src={product.image[0]} alt="" />
                      <h3 className="text-3xl font-medium leading-relaxed">
                        {product.title}
                      </h3>
                    </div>
                  </td>
                  <td className="text-center text-3xl font-medium">
                    $ {product.price.disPrice}
                  </td>
                  <td className="flex items-center justify-center gap-5">
                    <Link to={`/dashboard/edit-product/${product._id}`} className="px-5 py-3 bg-primary rounded flex items-center gap-3 text-secondary">
                      <FiEdit />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="px-5 py-3 bg-red-600 rounded flex items-center gap-3 text-secondary"
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardProducts;
