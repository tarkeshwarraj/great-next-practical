"use client"
import Todo from "@/Components/Todo";
import axios from "axios";
import Image from "next/image";
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function Home() {

  const [formData, setFormData] = useState({
    title:"",
    description:"",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({...form, [name]:value}));
    console.log(formData);
  }

  const onSubmitHandle = async(e) => {
    e.preventDefault();

    try {
      //api code

      const response = await axios.post('/api', formData);
      toast.success(response.data.msg);
      setFormData({
        title:"",
        description:"",
      })
    }catch(error){
      toast.error("Error")
    }
  }

  return (
    <>
    <ToastContainer theme="dark"
    />
      <form onSubmit={onSubmitHandle} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          onChange={onChangeHandler}
          value={formData.title}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
          onChange={onChangeHandler}
          value={formData.description}
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        ></textarea>

        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">

      <table className="w-full text-sm text-left rtl:text-right text">
        <thead className="text-sm text-gray-700 uppercase bg-gray-500">
          <tr>
            <th scope="col" className="px-6 py-3">Id</th>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Description</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <Todo/>
        </tbody>
      </table>
      </div>
    </>
  );
}
