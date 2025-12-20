'use client'

import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext(null);

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY;
    const router = useRouter();

    const { user, isSignedIn, isLoaded } = useUser();
    const { getToken } = useAuth();

    const [products, setProducts] = useState([]);
    const [userData, setUserData] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [cartItems, setCartItems] = useState({});


    const fetchProductData = async () => {
        try {
            const { data } = await axios.get('/api/product/list');

            if (data.success) {
                setProducts(data.products);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const fetchUserData = async () => {
        try {
            // Guest users
            if (!isSignedIn || !user) return;

            // Safe metadata access
            if (user.publicMetadata?.role === 'seller') {
                setIsSeller(true);
            } else {
                setIsSeller(false);
            }

            const token = await getToken();
            if (!token) return;

            const { data } = await axios.get(
                '/api/user/data',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (data.success) {
                setUserData(data.user);
                setCartItems(data.user.cartItems || {});
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            console.warn("fetchUserData skipped:", error.message)
        }
    };


    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        setCartItems(cartData);
        toast.success("Item added to cart");
    };

    const updateCartQuantity = (itemId, quantity) => {
        setCartItems(prev => {
            const cart = structuredClone(prev);
            if (quantity === 0) {
                delete cart[itemId];
            } else {
                cart[itemId] = quantity;
            }
            return cart;
        });
    };

    const getCartCount = () => {
        return Object.values(cartItems).reduce((a, b) => a + b, 0);
    };

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const itemId in cartItems) {
            const itemInfo = products.find(p => p._id === itemId);
            if (!itemInfo) continue;

            totalAmount += itemInfo.offerPrice * cartItems[itemId];
        }

        return Math.floor(totalAmount * 100) / 100;
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    useEffect(() => {
        if (isLoaded && isSignedIn) {
            fetchUserData();
        }
    }, [isLoaded, isSignedIn]);

    const value = {
        user,
        getToken,
        isSignedIn,
        currency,
        router,
        isSeller,
        userData,
        products,
        cartItems,
        addToCart,
        updateCartQuantity,
        getCartCount,
        getCartAmount,
        fetchUserData,
        setCartItems,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
