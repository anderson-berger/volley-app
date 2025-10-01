export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'organizer' | 'player';
  createdAt: string;
  updatedAt: string;
}

export type CreateUserInput = {
  name: string;
  email: string;
  role: 'admin' | 'organizer' | 'player';
}

export type UpdateUserInput = {
  name?: string;
  email?: string;
  role?: 'admin' | 'organizer' | 'player';
}