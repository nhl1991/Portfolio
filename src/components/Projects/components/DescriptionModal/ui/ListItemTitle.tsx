export function ListItem({ items }: { items: Array<string> }) {
  return (
    <ul className="flex gap-2">
      {items.map((item, idx) => {
        return (
          <li
            key={idx}
            className="px-3 py-1.5 bg-black rounded-md "
          >
            <p className="">{item.toUpperCase()}</p>
          </li>
        );
      })}
    </ul>
  );
}
