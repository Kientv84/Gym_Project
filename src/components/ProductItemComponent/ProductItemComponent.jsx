// src/components/ProductItemComponent.jsx
function ProductItemComponent({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition relative">
      {/* Badge giảm giá nếu có */}
      {product.discount && (
        <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          {product.discount}% OFF
        </div>
      )}

      {/* Hình ảnh sản phẩm */}
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-3" />

      {/* Tên sản phẩm */}
      <h3 className="text-sm font-semibold">{product.name}</h3>

      {/* Màu sắc */}
      <p className="text-xs text-gray-500">{product.color}</p>

      {/* Giá */}
      <div className="mt-2 flex items-center gap-2">
        <p className="text-black font-bold">${product.price}</p>
        {product.oldPrice && <p className="text-gray-400 line-through text-sm">${product.oldPrice}</p>}
      </div>

      {/* Rating */}
      <div className="mt-1 text-sm text-black flex items-center gap-1">
        <span>★</span>
        <span>{product.rating}</span>
      </div>
    </div>
  );
}

export default ProductItemComponent;
