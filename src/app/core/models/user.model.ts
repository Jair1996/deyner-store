export interface User {
  id?: string;
  name: string;
  lastname: string;
  role: 'user' | 'admin';
}
