import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Product"],
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
      providesTags: ["Product"],
    }),
    getCategoryProduct: build.query({
      query: (id) => ({
        url: `/products/category/${id}`,
      }),
      providesTags: ["Product", "Category"],
    }),
    getProductSearch: build.query({
      query: (params) => ({
        url: "/product",
        params,
      }),
      providesTags: ["Product"],
    }),
    createProduct: build.mutation({
      query: (body) => ({
        url: "/product",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/product/${id}`,
        method: "PATCH", // or "PATCH"
        body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductSearchQuery,
  useGetCategoryProductQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
