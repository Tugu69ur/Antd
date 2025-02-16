export interface BaseResponse<T> {
  message: string;
  body: T;
}

export interface PaginationResponse<T> {
  total: number;
  items: Array<T>;
}

export interface ProfileType {
  id: number;
  created_at: Date;
  updated_at: Date;
  file_name: string;
  original_name: string;
  physical_path: string;
  extention: string;
  file_size: number;
}
