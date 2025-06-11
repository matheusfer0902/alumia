import { notFound } from "next/navigation";
import Article from "@/components/articleComp/index";
import { getPostBySlug, Post } from "@/app/lib/getPostBySlug";

interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params }: Params) {
  const post: Post | null = await getPostBySlug(params.slug);
  return {
    title: post ? post.title : "Postagem não encontrada",
    description: post ? post.content.substring(0, 150) : "Nenhum conteúdo disponível.",
  };
}

export default async function ArticlePage({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  const categories = post.categories.edges.map((cat: { node: { name: string } }) => cat.node.name).join(", ");

  return (
    <Article
      content={post.content}
      featuredImageUrl={post.featuredImage.node.sourceUrl}
      slug={post.slug}
      title={post.title}
      subtitle={`Categoria: ${categories}`}
      datePublished={new Date(post.date).toLocaleDateString("pt-BR")}
      dateUpdated={new Date(post.modified).toLocaleDateString("pt-BR")}
      author={post.author.node.name}
      tags={categories}

    />
  );
}
