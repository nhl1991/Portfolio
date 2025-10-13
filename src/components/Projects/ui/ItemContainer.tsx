export function ListItem({ items }: { items: Array<string> }) {
  return (
    <div className="flex gap-2">
      {items.map((item, idx) => {
        return (
          <div
            key={idx}
            className="px-2 py-0.5 md:rounded-xl rounded-md text-white bg-sky-600"
          >
            <p className="p-0.5">{item.toUpperCase()}</p>
          </div>
        );
      })}
    </div>
  );
}
