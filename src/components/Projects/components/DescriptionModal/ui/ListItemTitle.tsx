export function ListItem({ items }: { items: Array<string> }) {
  return (
    <ul className="flex gap-2">
      {items.map((item, idx) => {
        return (
          <li
            key={idx}
            className="px-2 py-0.5 md:rounded-xl rounded-md text-white bg-sky-600"
          >
            <p className="">{item.toUpperCase()}</p>
          </li>
        );
      })}
    </ul>
  );
}
