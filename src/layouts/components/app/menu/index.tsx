export function Menu() {
  const categoryNames = [
    "Aves",
    "Carnes",
    "Peixes",
    "Sobremesas",
    "Veganas",
    "Vegetarianas",
  ];

  return (
    <div>
      <p className="font-bold text-4xl">Recipes</p>

      <div className="mt-10">
        {categoryNames.map((categoryName) => {
          return (
            <p key={categoryName} className="mt-4 text-xl">
              {categoryName}
            </p>
          );
        })}
      </div>
    </div>
  );
}
