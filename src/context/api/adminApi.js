import { api } from "./index";

export const adminApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAdmins: build.query({
      query: (params) => ({
        url: "/admins",
        params,
      }),
      providesTags: ["Admin"],
    }),
    deleteAdmins: build.mutation({
      query: (id) => ({
        url: `/admins/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Admin"],
    }),
    getProfile: build.query({
      query: () => ({
        url: "/admin/profile",
      }),
      providesTags: ["Profile"],
    }),
    signIn: build.mutation({
      query: (body) => ({
        url: "/admins/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin", "Profile"],
    }),
    registerUser: build.mutation({
      query: (body) => ({
        url: "/admins/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
    updateAdmins: build.mutation({
      query: ({ id, body }) => ({
        url: `/admins/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const {
  useGetAdminsQuery,
  useGetProfileQuery,
  useRegisterUserMutation,
  useSignInMutation,
  useDeleteAdminsMutation,
  useUpdateAdminsMutation,
} = adminApi;
