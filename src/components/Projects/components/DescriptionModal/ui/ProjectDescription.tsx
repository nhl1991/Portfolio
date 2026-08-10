export default function ProjectDescription({
  description,
}: {
  description: string;
}) {
  return (
    <p className="text-sm text-muted-foreground leading-relaxed">
      {description}
    </p>
  );
}
