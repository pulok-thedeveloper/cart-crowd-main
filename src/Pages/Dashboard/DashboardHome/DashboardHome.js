import React from "react";
import sales from "../../../Assests/Dashboard/increase.png";
import orders from "../../../Assests/Dashboard/shopping-bag.png";
import products from "../../../Assests/Dashboard/products.png";
import visitors from "../../../Assests/Dashboard/user.png";
import {
  LineChart,
  CartesianGrid,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardHome = () => {
  const lineChartData = [
    {
      name: "Jan",
      orders: 4000,
      sales: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      orders: 3000,
      sales: 1900,
      amt: 2210,
    },
    {
      name: "Mar",
      orders: 9800,
      sales: 7000,
      amt: 2290,
    },
    {
      name: "Apr",
      orders: 7080,
      sales: 5200,
      amt: 2000,
    },
    {
      name: "May",
      orders: 8000,
      sales: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      orders: 4390,
      sales: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      orders: 6490,
      sales: 4300,
      amt: 5100,
    },
    {
      name: "Aug",
      orders: 4000,
      sales: 2400,
      amt: 2400,
    },
    {
      name: "Sep",
      orders: 3000,
      sales: 1398,
      amt: 2210,
    },
    {
      name: "Oct",
      orders: 5000,
      sales: 3800,
      amt: 2290,
    },
    {
      name: "Nov",
      orders: 3780,
      sales: 2908,
      amt: 2000,
    },
    {
      name: "Dec",
      orders: 6890,
      sales: 4800,
      amt: 2181,
    },
  ];

  const barChartData = [
    {
      name: "1",
      Profit: 2000,
      Refund: 2400,
      Expense: 5000
    },
    {
      name: "2",
      Profit: 3000,
      Refund: 1398,
      Expense: 5000
    },
    {
      name: "3",
      Profit: 4000,
      Refund: 9800,
      Expense: 5000
    },
    {
      name: "4",
      Profit: 2780,
      Refund: 3908,
      Expense: 5000
    },
    {
      name: "5",
      Profit: 1890,
      Refund: 4800,
      Expense: 5000
    },
    {
      name: "6",
      Profit: 2390,
      Refund: 3800,
      Expense: 5000
    },
    {
      name: "7",
      Profit: 3490,
      Refund: 4300,
      Expense: 5000
    },
    {
      name: "8",
      Profit: 2000,
      Refund: 2400,
      Expense: 5000
    },
    {
      name: "9",
      Profit: 3000,
      Refund: 1398,
      Expense: 5000
    },
    {
      name: "10",
      Profit: 4000,
      Refund: 9800,
      Expense: 5000
    },
    {
      name: "11",
      Profit: 2780,
      Refund: 3908,
      Expense: 5000
    },
    {
      name: "12",
      Profit: 1890,
      Refund: 4800,
      Expense: 5000
    },
    {
      name: "13",
      Profit: 2390,
      Refund: 3800,
      Expense: 5000
    },
    {
      name: "14",
      Profit: 3490,
      Refund: 4300,
      Expense: 5000
    },
    {
      name: "15",
      Profit: 3490,
      Refund: 4300,
      Expense: 5000
    },
  ];

  const pieChartData = [
    { name: 'Dhaka', value: 700 },
    { name: 'Chattogram', value: 300 },
    { name: 'Rajshahi', value: 250 },
    { name: 'Sylhet', value: 400 },
    { name: 'Khulna', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  
  return (
    <div className="w-full p-10">
      <div className="grid grid-cols-4 gap-5 mb-10">
        <div className="bg-white rounded-lg border shadow-md h-48 flex items-center gap-5 p-5">
          <div className="bg-[#3f6fff3d] p-5 rounded-lg">
            <img className="w-[48px]" src={sales} alt="" />
          </div>
          <div className="text-right w-full flex flex-col gap-3">
            <h3 className="text-3xl font-semibold text-[#3f6fff]">
              Total Sales
            </h3>
            <h1 className="text-5xl font-bold text-primary">$67,400</h1>
          </div>
        </div>
        <div className="bg-white rounded-lg border shadow-md h-48 flex items-center gap-5 p-5">
          <div className="bg-[#e28a253d] p-5 rounded-lg">
            <img className="w-[48px]" src={orders} alt="" />
          </div>
          <div className="text-right w-full flex flex-col gap-3">
            <h3 className="text-3xl font-semibold text-[#e28a25]">
              Total Orders
            </h3>
            <h1 className="text-5xl font-bold text-primary">$90,150</h1>
          </div>
        </div>
        <div className="bg-white rounded-lg border shadow-md h-48 flex items-center gap-5 p-5">
          <div className="bg-[#328f683d] p-5 rounded-lg">
            <img className="w-[48px]" src={products} alt="" />
          </div>
          <div className="text-right w-full flex flex-col gap-3">
            <h3 className="text-3xl font-semibold text-[#328F68]">
              Total Products
            </h3>
            <h1 className="text-5xl font-bold text-primary">1200</h1>
          </div>
        </div>
        <div className="bg-white rounded-lg border shadow-md h-48 flex items-center gap-5 p-5">
          <div className="bg-[rgba(216,60,60,0.24)] p-5 rounded-lg">
            <img className="w-[48px]" src={visitors} alt="" />
          </div>
          <div className="text-right w-full flex flex-col gap-3">
            <h3 className="text-3xl font-semibold text-[#D83C3C]">
              Daily Visitors
            </h3>
            <h1 className="text-5xl font-bold text-primary">148,700</h1>
          </div>
        </div>
      </div>
      <div className="grid my-5">
        <div className="bg-white rounded-lg p-5 border">
          <div className="flex justify-between items-center mb-10 mt-5 mx-16">
            <h2 className="text-3xl font-semibold">Total Sales and Orders</h2>
            <div className="flex gap-5">
              <button className="py-2 px-5 border border-primary text-primary text-2xl font-semibold rounded">
                Daily
              </button>
              <button className="py-2 px-5 bg-primary text-secondary text-2xl font-semibold rounded">
                Monthly
              </button>
              <button className="py-2 px-5 border border-primary text-primary text-2xl font-semibold rounded">
                Yearly
              </button>
            </div>
          </div>
          <LineChart
            width={1000}
            height={250}
            data={lineChartData}
            className="text-xl z-0"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 my-5">
        <div className="bg-white rounded-lg p-5 border">
          <div className="m-10 mt-5">
            <h2 className="text-3xl font-semibold">Monthly Statistics</h2>
          </div>
          <BarChart
            width={500}
            height={250}
            data={barChartData}
            className="text-xl"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Profit" fill="#8884d8" />
            <Bar dataKey="Refund" fill="#82ca9d" />
            <Bar dataKey="Expense" fill="#F9C200" />
          </BarChart>
        </div>
        <div className="bg-white rounded-lg p-5 border">
          <div className="m-10 mt-5">
            <h2 className="text-3xl font-semibold">Sales by Divisions</h2>
          </div>
          <PieChart width={500} height={250}>
          <Legend />
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
