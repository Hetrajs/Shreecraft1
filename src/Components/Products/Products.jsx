import React, { useContext, useEffect, useState } from "react";
import NavbarTopBarPreview from "./partials/Navbar";
import { CartContext } from "../../CartContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Products = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [disableSelectSize, setDisableSelectSize] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0); 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);
    return () => clearTimeout(timer); 
  }, []);

  const handleAddToCart = (product) => {
    const selectedOption = selectedOptions[product.id];
    if (!selectedOption) {
      alert("Please select a size before adding to cart.");
      return;
    }
    const productWithOption = { ...product, selectedOption };

    if (cartItems.some((item) => item.id === product.id && item.selectedOption === selectedOption)) {
      removeFromCart(productWithOption);
    } else {
      addToCart(productWithOption);
    }
  };

  const handleSelectChange = (e, productId) => {
    setSelectedOptions({ ...selectedOptions, [productId]: e.target.value });
    setDisableSelectSize({ ...disableSelectSize, [productId]: true });
  };

  const details = [
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
  

  return (
    <>
      <NavbarTopBarPreview />
      <div className="products w-full px-4 lg:px-20">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <div className="product mt-24 mb-10 lg:my-24 lg:mb-10 skeleton-animation" key={index}>
              <div className="P_image mt-5 w-full overflow-hidden h-[15rem] lg:h-[40rem]">
                <Skeleton height={400} />
              </div>
              <div className="Product_details flex justify-between items-end mt-3 lg:mt-5">
                <div className="left_side">
                  <Skeleton height={20} width={200} />
                  <Skeleton height={15} width={150} style={{ marginTop: "10px" }} />
                  <Skeleton height={40} width={150} style={{ marginTop: "10px" }} />
                </div>
                <div className="right_side flex flex-col items-end justify-center">
                  <Skeleton height={20} width={150} />
                  <Skeleton height={28} width={150} style={{ marginTop: "10px" }} />
                  <Skeleton height={50} width={150} style={{ marginTop: "10px" }} />
                </div>
              </div>
            </div>
          ))
        ) : (
          details.map((prod) => (
            <div className="product mt-24 mb-10 lg:my-24 lg:mb-10 product-animation" key={prod.id}>
              <div className="P_image mt-5 w-full overflow-hidden h-[15rem] lg:h-[40rem]">
                  <LazyLoadImage
                    className="w-full h-full rounded-[20px] object-cover object-center"
                    src={prod.FirstImage}
                    alt={prod.ProductName}
                    effect="blur"
                  />
              </div>
              <div className="Product_details flex justify-between items-end lg:mt-5">
                <div className="left_side">
                  <h1 className="text-[20px] lg:text-[28px] font-inter font-medium">{prod.ProductName}</h1>
                  <h1 className="text-[15px] lg:text-[17px] font-inter font-medium tracking-tight">Size: 12 inch, 4 mm</h1>
                  <select
                    className="select-blue mt-4 lg:mt-6 outline-none font-inter tracking-tight bg-[#f2f2f2] py-3 px-1 rounded-[10px]"
                    value={selectedOptions[prod.id] || ""}
                    onChange={(e) => handleSelectChange(e, prod.id)}
                  >
                    <option className="font-inter font-medium" value="" disabled={disableSelectSize[prod.id]}>Select Size</option>
                    <option value={prod.MDFSize1}>{prod.MDFSize1}</option>
                    <option value={prod.MDFSize2}>{prod.MDFSize2}</option>
                  </select>
                </div>
                <div className="right_side flex flex-col items-end justify-center">
                  <h1 className="text-[16px] lg:text-[21px] font-inter font-medium line-through text-[#747373]">{prod.PriceLineThrough}</h1>
                  <h1 className="text-[20px] lg:text-[28px] mt-1 font-inter font-medium">{prod.OriginalPrice}</h1>
                  <button
                    className={`border-[1.5px] px-4 text-[13px] whitespace-nowrap duration-300 lg:text-[18px] mt-3 lg:mt-6 lg:px-6 font-semibold py-3 rounded-full ${
                      cartItems.some((item) => item.id === prod.id && item.selectedOption === (selectedOptions[prod.id] || prod.MDFSize1)) ? "bg-red-500 text-white" : "border-[#000000] hover:bg-black hover:text-white active:bg-black active:text-white"
                    }`}
                    onClick={() => handleAddToCart(prod)}
                  >
                    {cartItems.some((item) => item.id === prod.id && item.selectedOption === (selectedOptions[prod.id] || prod.MDFSize1)) ? "Remove" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Products;
