export default function Card(
  { href, title, description, imgPath, imgAlt }: {
    href: string,
    title: string,
    description: string,
    imgPath?: string,
    imgAlt?: string
  }) {
  return (
    <a href={href} className="w-full flex justify-between mt-4 p-6 bg-white rounded-lg shadow-sm hover:bg-gray-100">
      <div className="">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      {
        (typeof imgPath !== "undefined") ?
          <img className="rounded-full" height={55} width={55} alt={imgAlt} src={imgPath} /> : ""
      }
    </a>
  );
}
