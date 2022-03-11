export function ImagesGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 pt-24">
      {/* This div will take up 1 row and 2 cols */}
      <div className="grid-cols-1 grid-rows-1 gap-4">
        <img
          src="https://cdn.hildey.com/Art1.jpg"
          alt=""
          className="object-contain"
        />
      </div>
      {/* This grid will take up 2 of the cols and 2 of the rows */}
      <div className="grid-cols-2 grid-rows-2 gap-4">
        <img
          src="https://cdn.hildey.com/Art2.jpeg"
          alt=""
          className="object-contain"
        />
        <img
          src="https://cdn.hildey.com/Art3.jpeg"
          alt=""
          className="object-contain"
        />
        <img
          src="https://cdn.hildey.com/Art4.jpeg"
          alt=""
          className="object-contain"
        />
        <img
          src="https://cdn.hildey.com/Art5.jpeg"
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  )
}
