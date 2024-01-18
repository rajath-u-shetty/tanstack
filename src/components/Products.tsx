import { Fragment, useState } from "react";
import { useProduct, useProducts } from "../services/queries"

export default function Products() {
    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null
    );
    
    const productsQuery = useProducts();
    const productQuery = useProduct(selectedProductId);
  return (
    <div>
      {productsQuery.data?.pages.map((group, index) => (
        <Fragment key={index}>
        {group.map((product) => (
            <Fragment key={product.id} >
                <button onClick={() => setSelectedProductId(product.id)}>{product.name}</button>
                <br />
            </Fragment>
        ))}
        </Fragment>
      ))}
      <div>
        <button onClick={() => productsQuery.fetchNextPage()} disabled={!productsQuery.hasNextPage || productsQuery.isFetchingNextPage}>{productsQuery.isFetchingNextPage ? 'Loading More...' : productsQuery.hasNextPage ? "Load more" : "nothing more to load"}</button>
      </div>
      <div>Selected products:</div>
      {JSON.stringify(productQuery.data)}
    </div>
  )
}
