import React, { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Select, MenuItem } from "@mui/material";
import Label from '../../common/Label'
import { tr } from 'framer-motion/client';
import { LuEye } from 'react-icons/lu';
import Header from '../../components/header/Header';

const yearlyData = {
  2024: [
    { month: "Jan", users: 600 },
    { month: "Feb", users: 500 },
    { month: "Mar", users: 700 },
    { month: "Apr", users: 650 },
    { month: "May", users: 700 },
    { month: "Jun", users: 850 },
    { month: "Jul", users: 600 },
    { month: "Aug", users: 580 },
    { month: "Sep", users: 620 },
    { month: "Oct", users: 680 },
    { month: "Nov", users: 650 },
    { month: "Dec", users: 750 },
  ],
  2025: [
    { month: "Jan", users: 750 },
    { month: "Feb", users: 700 },
    { month: "Mar", users: 820 },
    { month: "Apr", users: 770 },
    { month: "May", users: 880 },
    { month: "Jun", users: 930 },
    { month: "Jul", users: 720 },
    { month: "Aug", users: 690 },
    { month: "Sep", users: 760 },
    { month: "Oct", users: 810 },
    { month: "Nov", users: 770 },
    { month: "Dec", users: 900 },
  ],
};

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

   const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const users = [
    { id: 1, trId:'123456', username: "john_doe", amount: "120.00", date: "16 April 2024" },
    { id: 2, trId:'123456', username: "jane_smith", amount: "75.50", date: "16 April 2024" },
    { id: 3, trId:'123456', username: "alice_jones", amount: "200.00", date: "16 April 2024"},
    { id: 4, trId:'123456', username: "bob_brown", amount: "50.25", date: "16 April 2024" },
    { id: 5, trId:'123456', username: "charlie_black", amount: "90.00", date: "16 April 2024" },
  ]

  return (
  <div className='px-4'>
    <div className='mt-4'>
      <Label  />
    </div>
    {/* chart section  */}
     <div className="bg-white shadow-custom rounded-[10px] p-4 mt-6">
      {/* Chart Header with Year Selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-textClr">Earnings</h2>
        <Select
          value={selectedYear}
          onChange={handleYearChange}
          style={{ width: "120px" }}
        >
          {Object.keys(yearlyData).map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={yearlyData[selectedYear]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#1C5941" barSize={22} />
          <ReferenceLine y={0} stroke="#000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    {/* recent transactions section  */}
    <div className='shadow-custom my-6 rounded-[10px] py-2 bg-white'>
        <h1 className='text-xl font-medium text-textClr p-4'>Recent transaction </h1>
        <div className='overflow-x-auto px-4 '>
          <table className='w-[100%] bg-white text-left '>
            <thead className='bg-Primary text-white'>
              <tr>
                <th className='px-4 py-3'>#Tr.Id</th>
                <th className='px-4 py-3'>Username</th>
                <th className='hidden md:table-cell px-4 py-3'>Amount</th>
                <th className='hidden md:table-cell px-4 py-3'>Date</th>
                <th className='px-4 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user)=>(
                  <tr>
                    <td className='px-4 py-3'>{user.trId}</td>
                    <td className='px-4 py-3'>{user.username}</td>
                    <td className='hidden md:table-cell px-4 py-3'>${user.amount}</td>
                    <td className='hidden md:table-cell px-4 py-3'>{user.date}</td>
                    <td className='px-4 py-3'>
                      <LuEye size={20} className="text-Primary cursor-pointer"/>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className='text-center py-4'>No transactions found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    </div>
  </div>
  )
}

export default Dashboard
