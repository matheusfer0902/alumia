"use client";

import data from "../lib/api";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function useHandle() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const postsData = useMemo(() => {
    const posts = data?.posts?.nodes || [];

    interface Post {
      title: string;
      content: string;
      date: string;
      slug: string;
      featuredImage?: {
        node?: {
          sourceUrl?: string;
        };
      };
      author?: {
        node?: {
          name?: string;
        };
      };
      categories?: {
        edges: {
          node?: {
            name?: string;
          };
        }[];
      };
    }

    interface ProcessedPost {
      title: string;
      content: string;
      date: string;
      sourceUrl?: string;
      category?: string;
      author?: string;
      slug: string;
    }

    const processedPosts = posts.map((post: Post): ProcessedPost => {
      const { title, content, date, slug: postSlug } = post;
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
        slug: postSlug,
      };
    });

    if (query) {
      return processedPosts.filter((post: ProcessedPost) =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );
    }

    return processedPosts;
  }, [data, query]);

  return { postsData };
}
