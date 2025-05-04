import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FilterSection from './components/FilterSection';
import ProductGrid from './components/ProductGrid';


const ProductCatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState({ value: 'recommended', label: 'RECOMMENDED' });
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const productsPerPage = 9;
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // Sort options
  const sortOptions = [
    { value: 'recommended', label: 'RECOMMENDED' },
    { value: 'newest', label: 'NEWEST' },
    { value: 'price-low-high', label: 'PRICE: LOW TO HIGH' },
    { value: 'price-high-low', label: 'PRICE: HIGH TO LOW' },
    { value: 'name-a-z', label: 'NAME: A-Z' },
    { value: 'name-z-a', label: 'NAME: Z-A' },
  ];
  
  // Mock product data
  useEffect(() => {
    // In a real app, this would be an API call
    const mockProducts = [
      {
        id: 1,
        name: 'PPXOC Milkyway dress in pressed flowers',
        image: '/images/img_front_pic.png',
        hoverImage: '/images/img_hover_pic.png',
        isNew: true,
        outOfStock: false,
      },
      {
        id: 2,
        name: 'PPXOC Milkyway dress in pressed flowers',
        image: '/images/img_rectangle_29438_9.png',
        hoverImage: '/images/img_rectangle_29438_3.png',
        isNew: false,
        outOfStock: true,
      },
      {
        id: 3,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_4.png',
        hoverImage: '/images/img_rectangle_29438_4.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 4,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_2.png',
        hoverImage: '/images/img_rectangle_29438_2.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 5,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_399x300.png',
        hoverImage: '/images/img_rectangle_29438_399x300.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 6,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_3.png',
        hoverImage: '/images/img_rectangle_29438_3.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 7,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_8.png',
        hoverImage: '/images/img_rectangle_29438_8.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 8,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_7.png',
        hoverImage: '/images/img_rectangle_29438_7.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 9,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_1.png',
        hoverImage: '/images/img_rectangle_29438_1.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 10,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_6.png',
        hoverImage: '/images/img_rectangle_29438_6.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 11,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_5.png',
        hoverImage: '/images/img_rectangle_29438_5.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 12,
        name: 'Product Name',
        image: '/images/img_rectangle_29438.png',
        hoverImage: '/images/img_rectangle_29438.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 13,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_4.png',
        hoverImage: '/images/img_rectangle_29438_4.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 14,
        name: 'Product Name',
        image: '/images/image13.jpg',
        hoverImage: '/images/image13.jpg',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 15,
        name: 'Product Name',
        image: '/images/image15.jpg',
        hoverImage: '/images/image15.jpg',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 16,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_1.png',
        hoverImage: '/images/img_rectangle_29438_1.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 17,
        name: 'Product Name',
        image: '/images/img_rectangle_29438_399x300.png',
        hoverImage: '/images/img_rectangle_29438_399x300.png',
        isNew: false,
        outOfStock: false,
      },
      {
        id: 18,
        name: 'Product Name',
        image: '/images/img_rectangle_29438.png',
        hoverImage: '/images/img_rectangle_29438.png',
        isNew: false,
        outOfStock: false,
      },
      
    ];
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);
  
  // Handle filter changes
  const handleFilterChange = (filters) => {
    // In a real app, this would filter the products based on the selected filters
    console.log('Filters applied:', filters);
    // For now, we'll just use the mock data
    setFilteredProducts(products);
    setCurrentPage(1);
  };
  
  // Handle sort changes
  

  

  const handleSortChange = (option) => {
    setSortOption(option.value);
    setIsSortOpen(false);
    
    let sortedProducts = [...filteredProducts];
    
    switch (option.value) {
      case 'newest':
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'name-a-z':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default: // recommended
        sortedProducts = [...products];
    }
    
    setFilteredProducts(sortedProducts);
  };

  const currentSortLabel = sortOptions.find(opt => opt.value === sortOption)?.label || 'Recommended';
  
  // Handle wishlist
  const handleAddToWishlist = (productId) => {
    console.log(`Added product ${productId} to wishlist`);
    // In a real app, this would add the product to the user's wishlist
  };
  
  // Toggle filter visibility
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
    
  
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow w-[1280px] mx-auto">
        {/* Page Title and Description */}
        <section className="text-center py-16 px-4">
          <h1 className="text-5xl font-normal uppercase tracking-wide mb-6">DISCOVER OUR PRODUCTS</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>
        
        {/* Filter Bar */}
        <div className="container mx-auto px-4 border-t border-b border-gray-200 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h2 className="text-lg font-bold uppercase mr-8">3425 Items</h2>
              
              <button 
                onClick={toggleFilterVisibility}
                className="flex items-center"
              >
                <img 
                  src="/images/img_arrowleft_16x16.svg" alt="Filter" 
                  className={`h-4 w-4 mr-2 transform ${isFilterVisible ? 'rotate-180' : 'rotate-0'}`} 
                />
                <span className="text-base text-gray-500 underline">
                  {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
                </span>
              </button>
            </div>
            
                <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={() => setIsSortOpen(!isSortOpen)}>
              <h2 className="text-lg font-bold uppercase mr-2">{currentSortLabel}</h2>
              <button className="focus:outline-none">
                <img 
                  src="/images/img_arrowleft.svg" 
                  alt="Sort" 
                  className={`h-4 w-4 transform ${isSortOpen ? 'rotate-270' : 'rotate-90'}`} 
                />
              </button>
            </div>

            {isSortOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSortChange(option)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      sortOption === option.value
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          </div> 
        </div>
        
        {/* Products Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            {/* Filter Sidebar */}
            {isFilterVisible && (
              <div className="w-full md:w-1/4 pr-8">
                <FilterSection onFilterChange={handleFilterChange} />
              </div>
            )}
            
            {/* Product Grid */}
            <div className={`w-full ${isFilterVisible ? 'md:w-3/4' : 'md:w-full'}`}>
              <ProductGrid 
                products={products} 
                onAddToWishlist={handleAddToWishlist} 
              />
              
              {/* Pagination */}
              {/* {filteredProducts.length > productsPerPage && (
                <div className="mt-12">
                  <Pagination 
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
                    onPageChange={handlePageChange}
                  />
                </div>
              )} */}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductCatalogPage;