import React from "react";
import { IoFilter } from "react-icons/io5";
import Products from "../../components/products/Products";
import {
  useGetCategoryProductQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import "./shop.scss";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Shop = () => {
  const { data: categoryData } = useGetCategoryQuery();
  let limit = 2;
  const [page, setPage] = React.useState(1);
  const { data } = useGetProductsQuery({ limit, skip: page });

  let totalCount = Math.ceil(data?.total / limit);
  const handleChange = (event, value) => {
    setPage(value);
  };

  console.log(categoryData);

  return (
    <div className="shop">
      <div className="container">
        <div className="shop__cards">
          <div className="shop__info">
            <div className="shop__filter">
              <h3>Filters</h3>
              <IoFilter />
            </div>
            <hr />
            <div className="shop__category">
              <ul className="shop__list">
                <li>
                  <data value="">All</data>
                </li>
                {categoryData?.payload?.map((el) => (
                  <li>
                    <data value={el._id}>{el.title}</data>
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="shop__size">
              <h2>Size</h2>
              <div className="shop__size__cards">
                <NavLink className="shop__size__item">XX-Small</NavLink>
                <NavLink className="shop__size__item">X-Small</NavLink>
                <NavLink className="shop__size__item">Small</NavLink>
                <NavLink className="shop__size__item">Medium</NavLink>
                <NavLink className="shop__size__item">Large</NavLink>
                <NavLink className="shop__size__item">X-Large</NavLink>
                <NavLink className="shop__size__item">XX-Large</NavLink>
                <NavLink className="shop__size__item">3X-Large</NavLink>
                <NavLink className="shop__size__item">4X-Large</NavLink>
              </div>
            </div>
          </div>
          <div className="shop__product__box">
            <h3>Casual</h3>
            <div className="shop__products">
              <Products data={data?.payload} />
            </div>
            <Stack spacing={2}>
              <Typography>Page: {page}</Typography>
              <Pagination
                count={totalCount}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

// import React, { useState } from "react";
// import { IoFilter } from "react-icons/io5";
// import Products from "../../components/products/Products";
// import {
//   useGetCategoryProductQuery,
//   useGetProductsQuery,
// } from "../../context/api/productApi";
// import "./shop.scss";
// import { useGetCategoryQuery } from "../../context/api/categoryApi";
// import { NavLink } from "react-router-dom";

// const Shop = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const { data: dataProduct } = useGetProductsQuery();
//   const { data, isLoading } = useGetCategoryProductQuery({
//     id: selectedCategory,
//   });
//   const { data: categoryData } = useGetCategoryQuery();

//   // Handle category click
//   const handleCategoryClick = (value) => {
//     setSelectedCategory(value);
//     console.log("Selected category ID:", value);
//   };

//   return (
//     <div className="shop">
//       <div className="container">
//         <div className="shop__cards">
//           <div className="shop__info">
//             <div className="shop__filter">
//               <h3>Filters</h3>
//               <IoFilter />
//             </div>
//             <hr />
//             <div className="shop__category">
//               <ul className="shop__list">
//                 <li onClick={() => handleCategoryClick("")}>
//                   <data value="">All</data>
//                 </li>
//                 {categoryData?.payload?.map((el) => (
//                   <li key={el._id} onClick={() => handleCategoryClick(el._id)}>
//                     <data value={el._id}>{el.title}</data>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <hr />
//             <div className="shop__size">
//               <h2>Size</h2>
//               <div className="shop__size__cards">
//                 <NavLink className="shop__size__item">XX-Small</NavLink>
//                 <NavLink className="shop__size__item">X-Small</NavLink>
//                 <NavLink className="shop__size__item">Small</NavLink>
//                 <NavLink className="shop__size__item">Medium</NavLink>
//                 <NavLink className="shop__size__item">Large</NavLink>
//                 <NavLink className="shop__size__item">X-Large</NavLink>
//                 <NavLink className="shop__size__item">XX-Large</NavLink>
//                 <NavLink className="shop__size__item">3X-Large</NavLink>
//                 <NavLink className="shop__size__item">4X-Large</NavLink>
//               </div>
//             </div>
//           </div>
//           <div className="shop__product__box">
//             <h3>Casual</h3>
//             <div className="shop__products">
//               <Products
//                 data={
//                   selectedCategory === ""
//                     ? dataProduct?.payload
//                     : categoryData?.payload
//                 }
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

// import React, { useState, useEffect } from "react";
// import { IoFilter } from "react-icons/io5";
// import Products from "../../components/products/Products";
// import {
//   useGetCategoryProductQuery,
//   useGetProductsQuery,
// } from "../../context/api/productApi";
// import "./shop.scss";
// import { useGetCategoryQuery } from "../../context/api/categoryApi";
// import { NavLink } from "react-router-dom";

// const Shop = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const { data: allProductsData } = useGetProductsQuery();
//   console.log(allProductsData);

//   const { data: categoryProductsData } =
//     useGetCategoryProductQuery(selectedCategory);
//   const { data: categoryData } = useGetCategoryQuery();

//   const [displayedProducts, setDisplayedProducts] = useState([]);

//   useEffect(() => {
//     if (selectedCategory === "") {
//       // Show all products if no category is selected
//       setDisplayedProducts(allProductsData?.payload || []);
//     } else {
//       // Show products of the selected category
//       setDisplayedProducts(categoryProductsData?.payload || []);
//     }
//   }, [selectedCategory, allProductsData, categoryProductsData]);

//   const handleCategoryClick = (value) => {
//     setSelectedCategory(value);
//     console.log("Selected category ID:", value);
//   };

//   return (
//     <div className="shop">
//       <div className="container">
//         <div className="shop__cards">
//           <div className="shop__info">
//             <div className="shop__filter">
//               <h3>Filters</h3>
//               <IoFilter />
//             </div>
//             <hr />
//             <div className="shop__category">
//               <ul className="shop__list">
//                 <li onClick={() => handleCategoryClick("")}>
//                   <span>All</span>
//                 </li>
//                 {categoryData?.payload?.map((el) => (
//                   <li key={el._id} onClick={() => handleCategoryClick(el._id)}>
//                     <span>{el.title}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <hr />
//             <div className="shop__size">
//               <h2>Size</h2>
//               <div className="shop__size__cards">
//                 <NavLink className="shop__size__item">XX-Small</NavLink>
//                 <NavLink className="shop__size__item">X-Small</NavLink>
//                 <NavLink className="shop__size__item">Small</NavLink>
//                 <NavLink className="shop__size__item">Medium</NavLink>
//                 <NavLink className="shop__size__item">Large</NavLink>
//                 <NavLink className="shop__size__item">X-Large</NavLink>
//                 <NavLink className="shop__size__item">XX-Large</NavLink>
//                 <NavLink className="shop__size__item">3X-Large</NavLink>
//                 <NavLink className="shop__size__item">4X-Large</NavLink>
//               </div>
//             </div>
//           </div>
//           <div className="shop__product__box">
//             <h3>
//               {selectedCategory
//                 ? categoryData?.payload.find(
//                     (el) => el._id === selectedCategory
//                   )?.title
//                 : "All Products"}
//             </h3>
//             <div className="shop__products">
//               <Products data={displayedProducts} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;
