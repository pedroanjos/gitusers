export interface IUser {
  name?: string;
  login: string;
  email?: string;
  followers?: number;
  following: number;
  bio?: string;
  avatar_url?: string;
}

export interface IRepository {
  name: string;
  description: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
}
