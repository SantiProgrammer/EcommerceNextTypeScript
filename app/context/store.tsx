"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  price: number;
  image: string;
  item: string;
  qty: number;
  id: number;
  /* price: number; */
};

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  addProduct: (
    item: string,
    qty: number,
    image: string,
    id: number,
    price: number
  ) => void;
  clearCart: () => void;
  deleteProduct: (id: number) => void;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  data: [],
  setData: (): DataType[] => [],
  addProduct: () => {},
  clearCart: () => {},
  deleteProduct: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState<[] | DataType[]>([]);

  const addProduct = (
    item: string,
    qty: number,
    image: string,
    id: number,
    price: number
  ) => {
    setData([...data, { item, qty, image, id, price }]);
    localStorage.setItem("cart", JSON.stringify(data));
  };

  const clearCart = () => {
    setData([]);
  };

  const deleteProduct = (id: number) => {
    setData((prevData) => prevData.filter((elemento) => elemento.id !== id));
  };

  return (
    <GlobalContext.Provider
      value={{
        userId,
        setUserId,
        data,
        setData,
        addProduct,
        clearCart,
        deleteProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
