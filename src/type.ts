export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    title: string;
    bio: string;
  }
  
  export type NewUser = Omit<User, "id">; // NewUser type without 'id' property