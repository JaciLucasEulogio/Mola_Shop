import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../../../State/Product/Action';
import ProductCard from '../Product/ProductCard';

export default function SearchResults() {
  const location = useLocation();
  const dispatch = useDispatch();

  const decodedQueryString = decodeURIComponent(location.search);
  const query = new URLSearchParams(decodedQueryString).get('q');

  const { products, loading, error } = useSelector(store => store.product);
  const prevQuery = useRef(null);

  useEffect(() => {
    if (query && query !== prevQuery.current) {
      dispatch(searchProducts(query));
      prevQuery.current = query;
    }
  }, [dispatch, query]);

  const renderProducts = () => {
    if (loading) {
      return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error) {
      return <p className="text-center text-red-500">Error: {error}</p>;
    }

    if (!Array.isArray(products) || products.length === 0) {
      return <p className="text-center text-gray-500">No products found.</p>;
    }

    return products.map((item) => (
      <ProductCard key={item.id} product={item} />
    ));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Results</h1>
      <div className="flex flex-wrap justify-center">
        {renderProducts()}
      </div>
    </div>
  );
}

