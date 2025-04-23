import ProductItemComponent from './ProductItemComponent/ProductItemComponent';

// Giả sử bạn truyền props hoặc lấy từ API
function ContainerComponent({ type }) {
  // Dữ liệu mẫu, sau này có thể thay bằng API
  const products = [
    {
      id: 1,
      name: 'Crew Socks 5pk',
      color: 'White/Black/Light Grey Marl',
      price: 17.6,
      oldPrice: 22,
      discount: 20,
      rating: 4.3,
      image: '/images/socks1.png', // Đường dẫn hình ảnh (bạn cập nhật lại theo đúng ảnh)
    },
    {
      id: 2,
      name: 'Midi 3pk Socks',
      color: 'White',
      price: 16,
      rating: 5,
      image: '/images/socks2.png',
    },
    {
      id: 3,
      name: 'Adapt Camo Cross Back Sports Bra',
      color: 'Asphalt Grey/Black',
      price: 28,
      oldPrice: 40,
      discount: 30,
      rating: 5,
      image: '/images/bra1.png',
    },
    {
      id: 2,
      name: 'Midi 3pk Socks',
      color: 'White',
      price: 16,
      rating: 5,
      image: '/images/socks2.png',
    },
    {
      id: 3,
      name: 'Adapt Camo Cross Back Sports Bra',
      color: 'Asphalt Grey/Black',
      price: 28,
      oldPrice: 40,
      discount: 30,
      rating: 5,
      image: '/images/bra1.png',
    },
    {
      id: 2,
      name: 'Midi 3pk Socks',
      color: 'White',
      price: 16,
      rating: 5,
      image: '/images/socks2.png',
    },
    {
      id: 3,
      name: 'Adapt Camo Cross Back Sports Bra',
      color: 'Asphalt Grey/Black',
      price: 28,
      oldPrice: 40,
      discount: 30,
      rating: 5,
      image: '/images/bra1.png',
    },
    {
      id: 2,
      name: 'Midi 3pk Socks',
      color: 'White',
      price: 16,
      rating: 5,
      image: '/images/socks2.png',
    },
    {
      id: 3,
      name: 'Adapt Camo Cross Back Sports Bra',
      color: 'Asphalt Grey/Black',
      price: 28,
      oldPrice: 40,
      discount: 30,
      rating: 5,
      image: '/images/bra1.png',
    },
    {
      id: 2,
      name: 'Midi 3pk Socks',
      color: 'White',
      price: 16,
      rating: 5,
      image: '/images/socks2.png',
    },
    {
      id: 3,
      name: 'Adapt Camo Cross Back Sports Bra',
      color: 'Asphalt Grey/Black',
      price: 28,
      oldPrice: 40,
      discount: 30,
      rating: 5,
      image: '/images/bra1.png',
    },
    {
      id: 2,
      name: 'Midi 3pk Socks',
      color: 'White',
      price: 16,
      rating: 5,
      image: '/images/socks2.png',
    },
    {
      id: 3,
      name: 'Adapt Camo Cross Back Sports Bra',
      color: 'Asphalt Grey/Black',
      price: 28,
      oldPrice: 40,
      discount: 30,
      rating: 5,
      image: '/images/bra1.png',
    },
    {
      id: 2,
      name: 'Midi 3pk Socks',
      color: 'White',
      price: 16,
      rating: 5,
      image: '/images/socks2.png',
    },
    {
      id: 3,
      name: 'Adapt Camo Cross Back Sports Bra',
      color: 'Asphalt Grey/Black',
      price: 28,
      oldPrice: 40,
      discount: 30,
      rating: 5,
      image: '/images/bra1.png',
    },
    {
      id: 2,
      name: 'Midi 3pk Socks',
      color: 'White',
      price: 16,
      rating: 5,
      image: '/images/socks2.png',
    },
    {
      id: 3,
      name: 'Adapt Camo Cross Back Sports Bra',
      color: 'Asphalt Grey/Black',
      price: 28,
      oldPrice: 40,
      discount: 30,
      rating: 5,
      image: '/images/bra1.png',
    },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md h-full">
      <h2 className="text-xl font-bold mb-4">Sản phẩm: {type?.toUpperCase()}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductItemComponent key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ContainerComponent;
