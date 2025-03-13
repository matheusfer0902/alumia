import data from "../lib/api";
import { useMemo } from "react";

export default function useHandle() {
  const postsData = useMemo(() => {
    const posts = data?.posts?.nodes || [];

    return posts.map(post => {
      const { title, content, date } = post;
      const { sourceUrl } = post?.featuredImage?.node || {};
      const { name: author } = post?.author?.node || {};
      const category = post?.categories?.edges[0]?.node?.name;

      return {
        title,
        content,
        date,
        sourceUrl,
        category,
        author,
      };
    });
  }, [data]);

  console.log(postsData);

  return { postsData };
}
