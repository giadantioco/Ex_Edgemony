import { Card, ICard } from "@/components/Card";

const blogpost: ICard = {
  title: "Title",
  date: "27-08-24",
  id: 4,
  description: "lorem ipsum dolor sit amet",
  author: { name: "Johan Smith" },
};

export default function Home() {
  return (
    <main>
      <h1>Hello Next.js</h1>
      <Card post={blogpost}></Card>
    </main>
  );
}
