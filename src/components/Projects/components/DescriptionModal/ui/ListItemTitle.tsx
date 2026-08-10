export function ListItem({ items }: { items: Array<string> }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item, idx) => {
        return (
          <li
            key={idx}
            className="px-2.5 py-1 bg-secondary rounded-full"
          >
            <p className="text-xs font-semibold">{item}</p>
          </li>
        );
      })}
    </ul>
  );
}
