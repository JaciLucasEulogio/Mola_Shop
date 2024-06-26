import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../../../State/Product/Action';
import ProductCard from '../Product/ProductCard';

export default function SearchResults() {
  const location = useLocation();
  const dispatch = useDispatch();
  
  const decodedQueryString = decodeURIComponent(location.search);
  const query = new URLSearchParams(decodedQueryString).get('q');

  const { product } = useSelector(store => store);
  const prevQuery = useRef(null);

  useEffect(() => {
    // Verifica si el query actual es igual al anterior para evitar llamadas duplicadas
    if (query !== prevQuery.current) {
        
      dispatch(searchProducts(query));
      prevQuery.current = query;
    }
  }, [dispatch, query]);

  console.log("AQUI PRODUCTOS",product);

  return (
    <div className="bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <div className='flex flex-wrap justify-center bg-white py-5'>
        {/* Renderiza los productos obtenidos */}
        {product.products?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

