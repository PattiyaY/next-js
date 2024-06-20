export default function blog({ params }: { params: { blogId: string } }) {
  return (
    <main>
      <h1>Details of blog {params.blogId}</h1>
      <p>This is dynamic routes</p>
    </main>
  );
}
