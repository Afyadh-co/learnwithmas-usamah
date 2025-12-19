"use client";
import { BackToHome } from "@/app/back-to-home";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";

const Learn1: React.FC = () => {
  const [dataOrang, setDataOrang] = useState({ name: "alex", age: 21 });
  const [arrays, setArrays] = useState<string[]>(["Adam", "Idris", "Nuh"]);
  const [userName, setUserName] = useState<string>("");
  const [editIndex, setEditIndex] =useState<number | null>(null)

  //   const userNameChange:<React.FC> = (e:React.MouseEvent<HTMLButtonElement>) => {
  //     setUserName(e.target.value)
  //   }

  /** Menyimpan perubahan di Local Storage */

  //Mengambil Data dari Local Storage saat komponen pertama kali di render

  // useEffect(() => {
  //   const storedData = localStorage.getItem("userArray")
  //   if(storedData) {
  //     const parsedData = JSON.parse(storedData)
  //     setArrays(parsedData)
  //   }
  // },[])

  const userNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserName(e.target.value); // Mengambil nilai dari input
    console.log(userName);
  };

  function tambahNama() {
    if (userName.trim()) {
      const newUserName = [...arrays, userName];
      setArrays(newUserName);
      setUserName("");
    }
  }

  function editNama() {
    if(editIndex !== null) {
      const newUserName = [...arrays]
      newUserName[editIndex] = userName;
      setArrays(newUserName);
      setUserName('')
      setEditIndex(null)
    }
  }

  function hapusNama(index: number) {
    const dataArray = [...arrays];
    dataArray.splice(index, 1);
    setArrays(dataArray);
  }

  function handleEdit(index:number) {
    setUserName(arrays[index]);
    setEditIndex(index)
  }

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-bold mb-20">Manipulasi Data</h1>

      {/* Tugas */}
      <div>
        <Image src="/tugas1.jpeg" alt="tugas1 " width={500} height={500} />
      </div>
      <ul className="mb-6">
        <li>
          1. di samping button tambah buat sebuah input, jika input itu diisi
          ,misal -Adam-, lalu buttonnya diklik maka akan menambahkan item -Adam-
          ke state array
        </li>
        <li>
          2. Di tiap item list, di samping button hapus, buat button edit.
          Button Edit jika diklik akan mengarah ke input yang di bawah (di
          samping button tambah). Dan bisa mengedit nama tersebut
        </li>
      </ul>

      {/* Tampil Data */}

      <div className="mb-10">
        <h1 className="text-2xl mb-4 font-bold">Mengambil Data dari State</h1>
        <p>Nama : {dataOrang.name}</p>
        <p>Age : {dataOrang.age}</p>
      </div>

      <div>
        <h1 className="text-2xl mb-4 font-bold">Munculkan Data Array</h1>
        <div className="wrapper w-100 border border-slate-500 flex flex-col p-6 rounded-lg justify-between">
          <h1 className="text-center ">Data</h1>

          {/* Tampilkan Data */}
          <div className="mt-4">
            <ul className="list-disc px-4">
              {arrays.map((array, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center justify-between py-2"
                  >
                    <h1>{array}</h1>
                    <div className="flex flex-row gap-x-4">
                      <button className="py-2 px-4 bg-slate-500 rounded-xl font-bold cursor-pointer hover:bg-slate-300" onClick={() => handleEdit(index)}>Edit</button>
                      <Button
                        onClick={() => hapusNama(index)}
                        className="border rounded-full p-2 cursor-pointer hover:bg-slate-600"
                      >
                        <FaX />
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Pertombolan */}
          <div className="mt-4 flex flex-row items-center gap-x-5">
            {/* Kolom Input */}
            <div className="py-2">
              <input
                type="text"
                value={userName}
                onChange={userNameChange}
                placeholder="Ketikkan Sesuatu"
                className="p-4 border border-slate-300 w-full rounded-xl"
              />
            </div>
            <Button
              type="submit"
              size="sm"
              onClick={editIndex !== null ? editNama : tambahNama}
              className="px-4 py-7 rounded-lg cursor-pointer"
            >
              Tambah Data
            </Button>
          </div>
        </div>
      </div>
      <BackToHome />
    </div>
  );
};

export default Learn1;
