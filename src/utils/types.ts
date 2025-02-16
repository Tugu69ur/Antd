export interface AntdFile {
  uid: string;
  name?: string;
  status: string;
  response: string;
  url: any;
  originFileObj?: File;
}

export enum RoleType {
  ADMIN = "admin",
  USER = "user",
}

export enum GenderType {
  MALE = 0,
  FEMALE = 1,
}
