import http from "api";
import { BlogCategoryType } from "./types";

namespace blogCategory {
  export const create = (body: any) =>
    http.post<any>("admin/blog_categories", {
      hasAuth: true,
      body,
    });

  export const get = (id: number) =>
    http.get<any>(`admin/blog_categories/${id}`, {
      hasAuth: true,
    });

  export const list = (params: any) =>
    http.post<BlogCategoryType[]>("admin/blog_categories/list", {
      hasAuth: true,
      params,
    });

  export const update = (id: number, body: any) =>
    http.put<any>(`admin/blog_categories/${id}`, {
      hasAuth: true,
      body,
    });

  export const deleteCategory = (id: number) =>
    http.del<any>(`admin/blog_categories/${id}`, {
      hasAuth: true,
    });
}

export default blogCategory;
