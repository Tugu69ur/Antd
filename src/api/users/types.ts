import { ProfileType } from "api/types";

export interface UsersType {
  id: number;
  created_at: Date;
  updated_at: Date;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  phone: string;
  is_active: boolean;
  is_verified: boolean;
  profile_id: number;
  profile: ProfileType;
  role: string;
  birth_date: Date;
}
