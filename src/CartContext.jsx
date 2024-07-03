import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialProducts = [
    {
      id: 1,
      ProductName: "Shivji - ma parvati",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹500.00",
      OriginalPrice: "₹400.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/7yayt8mu0nc7thhc239dj/shivji-maa-parvati.jpeg?rlkey=bcx8e7dydnxo2lz23q8mo7b3j&st=cyvpn6pz&dl=0",
    },
    {
      id: 2,
      ProductName: "Radha Krishna",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/4iehdjlxetlgnyzga11p2/radha-krishna.jpg?rlkey=662ppdmmu51iqqzu9grlbo0f5&st=1jaryemk&dl=0",
    },
    {
      id: 3,
      ProductName: "Jai Ganesh",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/uc6lqas3f43ah0kf3z5m8/jai-ganesh.jpg?rlkey=m4infbjbpzuc2gd7mez8v12we&st=zz1eezt1&dl=0",
    },
    {
      id: 4,
      ProductName: "Gautam Budhha",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/hl757h8xfijsetkro8zru/buddha.jpg?rlkey=m378xcvkrsm3jwmrgbmua7mbo&st=k2haennm&dl=0",
    },
    {
      id: 5,
      ProductName: "Shiv Ganga",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/6tqua0e3o5t5h6rj43ybb/shivji-ganga.jpg?rlkey=8elioxthmzn54psa0gfftvxi7&st=8l5157d5&dl=0",
    },
    {
      id: 6,
      ProductName: "Sankat Mochan Hanuman",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/mq9vk6r6620hew0ytrid3/sankat-mochan-hanuman.jpg?rlkey=nn5qq92tjqeal67uu26emsf5f&st=uqmoahsy&dl=0",
    },
    {
      id: 7,
      ProductName: "Mahakal",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/fjt3mr17oo5gx7lbkxzqy/mahakal.jpg?rlkey=jjuamydlfp3mt3sv6rg8i68r3&st=k765ylef&dl=0",
    },
    {
      id: 8,
      ProductName: "Universe Time",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/ox3xfzdisz6ezu2mwbv4h/universe-time.jpg?rlkey=d4ivtd8ceu4txiwhvrfrxtgm0&st=1jxcy68a&dl=0",
    },
    {
      id: 9,
      ProductName: "Shree Ganesh",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/uzjfsv9mlyyusolazic0r/shree-ganesh.jpeg?rlkey=nkocy2xu4gqsigt1ywox6ys6k&st=1grgjq0a&dl=0",
    },
    {
      id: 10,
      ProductName: "Red - Blue Rangoli",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/fpx0dne745kg6u2o5nabr/red-blue-art.jpeg?rlkey=5eu3w1vs7wg6yuybf3rmakz9s&st=ljp1ihqr&dl=0",
    },
    {
      id: 11,
      ProductName: "Yellow - Sky Blue Rangoli",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/2niyrcm6q1y5djm9xd4so/yellow-blue-rangoli.jpeg?rlkey=epetg5m23vyyk4jy5p5e23ue1&st=z6vo88aw&dl=0",
    },
  ];

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    calculateTotalDiscount();
  }, [cartItems]);

  const calculateTotalDiscount = () => {
    const discount = cartItems.reduce((total, item) => {
      const price = parseFloat(item.OriginalPrice.replace("₹", "").replace(",", ""));
      return total + item.quantity * (price * 0.1);
    }, 0);
    setTotalDiscount(discount);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalUniqueItems = () => new Set(cartItems.map((item) => item.id)).size;

  const getTotalDiscount = () => totalDiscount.toFixed(2);

  const getRecommendedProducts = () => initialProducts.filter(product => !cartItems.some(item => item.id === product.id));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        getTotalUniqueItems,
        getTotalDiscount,
        getRecommendedProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
