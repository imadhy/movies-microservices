export interface Comment {
  id: number;
  userId: number;
  mediaId: number;
  createdAt: Date;
  updatedAt: Date;
  rating: number;
  text: string;
}
