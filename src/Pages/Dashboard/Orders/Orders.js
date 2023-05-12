import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Orders = () => {
    const [orders, setOrders] = useState();


  useEffect(() => {
    fetch('https://cart-crowd-server.vercel.app/orders')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.data);
      })
      .catch((error) => console.log(error));
  }, [orders]);

  return (
    <div className="p-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-5xl font-semibold">Orders List</h1>
        <Link
          to="/dashboard/add-product"
          className="flex items-center gap-3 bg-primary py-4 px-6 text-2xl font-medium text-secondary"
        >
          <BsPlus className="text-4xl" />
          Add new product
        </Link>
      </div>
      <div className="bg-white rounded-lg">
        <div className="px-10">
          <table className="table w-full">
            <thead>
              <tr className="grid grid-cols-6 text-3xl font-medium py-6 border-b">
                <th>Customer Name</th>
                <th>Date</th>
                <th>Payment Status</th>
                <th>Total</th>
                <th>Payment Method</th>
                <th>Delivery Status</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr
                  key={order._id}
                  className="grid grid-cols-6 items-center gap-5 py-6 text-2xl border-b hover:bg-[#F5F6F7] transition cursor-pointer"
                >
                  <td className="text-center text-2xl font-medium">
                    {order.customerName}
                  </td>
                  <td className="text-center text-2xl font-medium">
                    {order.date}
                  </td>
                  <td className="text-center text-2xl font-medium">
                    {order.paymentStatus}
                  </td>
                  <td className="text-center text-2xl font-medium">
                    $ {order.total}
                  </td>
                  <td className="text-center text-2xl font-medium">
                    {order.paymentMethod}
                  </td>
                  <td className="text-center text-2xl font-medium">
                    {order.deliveryStatus}
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

export default Orders;
