import Nav from '../components/nav';
import commerce from "../lib/commerce";
import ProductList from '../components/products/ProductList';


export default function IndexPage({ merchant, categories, products }){
  return (
    <ul>
      {/*<li>{JSON.stringify(merchant, null, 2)}</li>}
      <li>{JSON.stringify(categories, null, 2)}</li>
  <li>{JSON.stringify(products, null, 2)}</li>*/}
      {products.map((product) => (
      <ul>
        <li key={product.permalink}>
          {product.name}
        </li>
      </ul>
      )
      )}
    </ul>
  );
}


export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}
