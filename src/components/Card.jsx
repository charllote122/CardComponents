const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col  items-center bg-white shadow-md rounded-lg p-6 m-4 w-64 hover:shadow-lg transition">
      <img src={image} alt={title} className="w-24 h-24 object-contain mb-4" />
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
}

export default Card;