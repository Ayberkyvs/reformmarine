import PageHeading from "../components/PageHeading"
import Banner from "../assets/banners/products.webp"
import { ChangeEvent, useState } from "react";
import { Card, Input, Select } from "antd";
import { BiCategoryAlt } from "react-icons/bi";

const { Meta } = Card;
const { Option } = Select;
const { Search } = Input;

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  actions?: React.ReactNode[];
}

const products: Product[] = [
  {
    id: 1,
    title: 'Ürün 1',
    description: 'Açıklama 1',
    imageUrl: 'https://picsum.photos/300/300',
    category: 'Kategori 1',
  },
  {
    id: 2,
    title: 'Ürün 2',
    description: 'Açıklama 2',
    imageUrl: 'https://picsum.photos/300/300',
    category: 'Kategori 2',
  },
  {
    id: 3,
    title: 'Ürün 3',
    description: 'Açıklama 3',
    imageUrl: 'https://picsum.photos/300/300',
    category: 'Kategori 1',
  },
  {
    id: 4,
    title: 'Ürün 4',
    description: 'Açıklama 4',
    imageUrl: 'https://picsum.photos/300/300',
    category: 'Kategori 3',
  },
  {
    id: 5,
    title: 'Ürün 1',
    description: 'Açıklama 1',
    imageUrl: 'https://picsum.photos/300/300',
    category: 'Kategori 1',
  },
  {
    id: 6,
    title: 'Ürün 2',
    description: 'Açıklama 2',
    imageUrl: 'https://picsum.photos/300/300',
    category: 'Kategori 2',
  },
  {
    id: 7,
    title: 'Ürün 3',
    description: 'Açıklama 3',
    imageUrl: 'https://picsum.photos/300/300',
    category: 'Kategori 1',
  },
  {
    id: 8,
    title: 'Ürün 4',
    description: 'Açıklama 4',
    imageUrl: 'https://picsum.photos/300/300',
    category: 'Kategori 3',
  },
  // Daha fazla ürün eklenebilir
];


export default function Products() {
  return (
    <section>
    <PageHeading title="Products" backgroundImage={Banner}/>
    <div className="w-full h-fit py-20 border-2">
      <ProductList />
    </div>
    </section>
  )
}

export const ProductList: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const handleFilterChange = (value: string) => {
    setFilter(value);
    applyFilters(value, searchTerm);
  };
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchLoading(true);
    applyFilters(filter, value);
  };

  const applyFilters = (filter: string, searchTerm: string) => {
    let filtered = products.filter(product =>
      product.category.includes(filter) && product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
    setSearchLoading(false);
  };

  return (
    <div className="flex flex-col max-w-screen-xl w-full m-auto p-4 gap-6">
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between mb-4">
        <Search
          placeholder="Search Product"
          onChange={handleSearchChange}
          value={searchTerm}
          loading={searchLoading}
          size="large"
        />
        <div className="flex gap-4 w-full justify-end items-center">
        <Select
          onChange={handleFilterChange}
          value={filter}
          style={{ width: 200 }}
          placeholder="Select Category"
          size="large"
        >
          <Option value="">Category</Option>
          <Option value="Kategori 1">Category 1</Option>
          <Option value="Kategori 2">Category 2</Option>
          <Option value="Kategori 3">Category 3</Option>
        </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-101"
          >
            <Card
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.imageUrl}
                  className="object-cover w-full h-40 cursor-pointer"
                />
              }
              actions={[
                <span className="flex justify-center gap-1 text-center items-center font-semibold"><BiCategoryAlt/> {item.category}</span>
              ]}
            >
              <Meta title={item.title} description={item.description} className="text-sm lg:text-base" />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};


