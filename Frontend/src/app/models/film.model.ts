export interface Film {
  id?: string; // Optional if you're using MongoDB ObjectID
  title: string;
  director: string;
  releaseDate: Date;
}
