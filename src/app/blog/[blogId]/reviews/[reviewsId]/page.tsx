export default function reviewAllDetails({
  params,
}: {
  params: {
    blogId: string;
    reviewsId: string;
  };
}) {
  return (
    <main>
      <h1>This is nested dynamic routes</h1>
      <p>
        Review {params.reviewsId} for Blog {params.blogId}
      </p>
    </main>
  );
}
