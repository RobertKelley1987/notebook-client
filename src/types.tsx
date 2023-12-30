type UserId = {
  userId: string;
};

export type UserIdPromise = Promise<UserId>;

export type Note = {
  id: string;
  title: string;
  content: string;
};
