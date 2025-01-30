export default function Card({ title, description, img }: { title: string, description: string, img?: HTMLImageElement }) {
  return(
    <a href="#" className="w-full block mt-4 p-6 bg-white rounded-lg shadow-sm hover:bg-gray-100">
      <h2 class="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      {img}
    </a>
  )
}