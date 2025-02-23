import { useState } from "preact/hooks";
import { Post } from "../utils/posts.ts";
import PostCard from "./PostCard.tsx";

const ITEMS_PER_PAGE = 20;

export default function PostPaging({ allPosts }: { allPosts: Post[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allPosts.length / ITEMS_PER_PAGE);

  const getShownData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return allPosts.slice(startIndex, endIndex);
  };

  return (
    <>
      <div>
        {getShownData().map((post) => <PostCard post={post} key={post.slug} />)}
      </div>

      <div className="flex justify-center">
        {[...Array(totalPages)].map((_, i) => (
          <button
            type="button"
            key={i}
            className={"font-bold p-4 m-2 rounded-lg" + (currentPage === i + 1
              ? " bg-gray-200"
              : " bg-teal-200 hover:bg-teal-300")}
            onClick={() => setCurrentPage(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
