import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [categories, setCategories] = useState();
  const [menProducts, setMenProducts] = useState();
  const [womenProducts, setWomenenProducts] = useState();

  useEffect(() => {
      fetch('http://localhost:5000/categories')
          .then(res => res.json())
          .then(data => setCategories(data.data))
          .catch(err=>{
              console.log(err.message)
          })
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/categories/men")
      .then((res) => res.json())
      .then((data) => setMenProducts(data.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  useEffect(() => {
    fetch("http://localhost:5000/categories/women")
      .then((res) => res.json())
      .then((data) => setWomenenProducts(data.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

useEffect(() => {
    fetch("../../public/women.json")
      .then((res) => res.json())
      .then((data) => setWomenenProducts(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const authInfo = {
    categories,
    setCategories,
    menProducts,
    setMenProducts,
    womenProducts,
    setWomenenProducts,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
