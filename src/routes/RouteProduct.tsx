import {Route} from 'react-router-dom'
import Lazy from "@/utils/lazies/Lazy";

export default <>
    <Route path="/collections/:categoryId" element={Lazy(() => import("@/pages/product/collections/Product"))()}></Route>
    <Route path="/products/:id" element={Lazy(() => import("@/pages/product/productDetail/ProductDetail"))()}></Route>
</>
