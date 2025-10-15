export default function Header({ text }: { text: string }) {
  return (
    <header className="p-2">
      <h2>{text}</h2>
    </header>
  );
}
