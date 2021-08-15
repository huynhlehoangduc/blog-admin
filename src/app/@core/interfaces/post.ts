export interface Post {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  title?: string;
  content?: string;
  publish?: boolean;
  publishAt?: Date;
  author?: string;
  minutesRead?: number;
  thumbnail?: string;
  description?: string;
}
