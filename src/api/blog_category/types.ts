import { ProfileType } from "api/types";
import { UsersType } from "api/users/types";

export interface BlogCategoryType {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  image_id: number;
  image: ProfileType;
  created_at: Date;
  updated_at: Date;
  admin_id: number;
  admin: UsersType;
  slug: string;
  parent_id: number;
  parent: BlogCategoryType;
}
