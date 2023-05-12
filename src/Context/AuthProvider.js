import React, { createContext, useCallback, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-hot-toast";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [categories, setCategories] = useState();
  const [menProducts, setMenProducts] = useState();
  const [womenProducts, setWomenenProducts] = useState();
  const [allProducts, setAllProducts] = useState();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetch("https://cart-crowd-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch("https://cart-crowd-server.vercel.app/categories/men")
      .then((res) => res.json())
      .then((data) => setMenProducts(data.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch("https://cart-crowd-server.vercel.app/categories/women")
      .then((res) => res.json())
      .then((data) => setWomenenProducts(data.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch("https://cart-crowd-server.vercel.app/shop")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.data))
      .catch((error) => console.log(error.message));
  }, [allProducts]);

  // use local storage to manage cart data
  const addToDb = (id, productQuantity, location) => {
    if (location === "cart") {
      let shoppingCart = {};

      //get the shopping cart from local storage
      const storedCart = localStorage.getItem("shopping-cart");
      if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
      }

      // add quantity
      const quantity = shoppingCart[id];
      if (quantity) {
        const newQuantity = quantity + productQuantity;
        shoppingCart[id] = newQuantity;
      } else {
        shoppingCart[id] = productQuantity;
      }
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
      toast.success("The product has been added to the cart.")
    } else if (location === "wishlist") {
      let wishlist = {};

      //get the shopping cart from local storage
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        wishlist = JSON.parse(storedWishlist);
      }

      wishlist[id] = productQuantity;

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("The product has been added to the wishlist.")
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getStoredCart = useCallback(() => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getStoredWishlist = useCallback(() => {
    let wishlist = {};

    //get the shopping cart from local storage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      wishlist = JSON.parse(storedWishlist);
    }
    return wishlist;
  });

  const removeFromDb = (id, location) => {
    if (location === "cart") {
      const storedCart = localStorage.getItem("shopping-cart");

      if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
          delete shoppingCart[id];
          localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
        }
      }
    } else if (location === "wishlist") {
      const storedWishlist = localStorage.getItem("wishlist");

      if (storedWishlist) {
        const wishlist = JSON.parse(storedWishlist);
        if (id in wishlist) {
          delete wishlist[id];
          localStorage.setItem("wishlist", JSON.stringify(wishlist));
        }
      }
    }
  };

  const deleteShoppingCart = () => {
    localStorage.removeItem("shopping-cart");
  };


  useEffect(() => {
  const storedCart = getStoredCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = allProducts?.find((product) => product._id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  setCart(savedCart);
}, [allProducts, cart, getStoredCart]);

  useEffect(() => {
    const storedWishlist = getStoredWishlist();
    const savedWishlist = [];
    for (const id in storedWishlist) {
      const addedProduct = allProducts?.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedWishlist[id];
        addedProduct.quantity = quantity;
        savedWishlist.push(addedProduct);
      }
    }
    setWishlist(savedWishlist);
  }, [allProducts, wishlist]);

  const handleCartDelete = (id) => {
    const location = "cart";
    removeFromDb(id, location);
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
  };

  const handleWishDelete = (id) => {
    const location = "wishlist";
    removeFromDb(id, location);
    const remaining = wishlist.filter((product) => product._id !== id);
    setCart(remaining);
  };

  const authInfo = {
    categories,
    setCategories,
    menProducts,
    setMenProducts,
    womenProducts,
    setWomenenProducts,
    user,
    loading,
    createUser,
    login,
    logOut,
    signInwithGoogle,
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart,
    allProducts,
    cart,
    wishlist,
    handleCartDelete,
    handleWishDelete
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
