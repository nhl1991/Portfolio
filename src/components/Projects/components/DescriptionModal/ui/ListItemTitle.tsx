export function ListItem({ items }: { items: Array<string> }) {
  return (
    <ul className="flex gap-2">
      {items.map((item, idx) => {
        return (
          <li
            key={idx}
            className="px-3 py-1 md:rounded-xl rounded-md text-white bg-sky-600 dark:bg-indigo-800"
          >
            <p className="">{item.toUpperCase()}</p>
          </li>
        );
      })}
    </ul>
  );
}
