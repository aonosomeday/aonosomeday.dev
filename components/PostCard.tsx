import { Post } from "../utils/posts.ts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={`blog/posts/${post.slug}`}
      className="w-full flex justify-between mt-4 p-6 bg-white rounded-lg shadow-sm hover:bg-gray-100"
    >
      <div>
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <time className="text-gray-500 mr-2">
          {new Date(post.publishedAt).toLocaleDateString("ja-jp")}
        </time>
        {post.snippet}
      </div>
    </a>
  );
}
