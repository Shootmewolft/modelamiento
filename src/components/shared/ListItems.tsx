interface Props {
  items: string[]
 };

export function ListItems({ items }: Props) {
  return (
    <ul className="flex flex-col gap-2 text-lg font-bold">
      {items.map((item, index) => (
        <li key={index} className="transition-colors duration-300 hover:text-chart-4">{item}</li>
      ))}
    </ul>
  );
};
