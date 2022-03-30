interface Post {
  id: number;
  title: string;
  content: string;
  shortDescription: string;
  slug: string;
  comments: Comment[];
  likes: number;
  views: number;
  shares: number;
}

//Pick & Omit

//Pick pega poucas propriedades
type PostPreview = Pick<Post, "id" | "title">

let post: PostPreview

post.title = "hello"

//Omit pega todas as propriedades menos uma
type PostPreview2 = Omit<Post, "likes">