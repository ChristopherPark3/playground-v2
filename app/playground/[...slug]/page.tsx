export default function PlaygroundSlugPage({
  params,
}: {
  params: { slug: string[] };
}) {
  return <div className="h-full">{params.slug}</div>;
}
