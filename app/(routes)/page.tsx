import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
export default async function Home() {
  const billboard  = await getBillboard("2f08eccd-1cf1-4494-ba9b-c483259be440")
  const products = await getProducts({isFeatured:true})
  return (
   <Container>
    <div className="space-x-10 pb-10">
      <Billboard data={billboard}/>
    </div>
    <div className="flex flex-col gap-y-8 px-4 sm-px-6 lg-px-8">
      <ProductList title="Featured Products" items={products}/>
    </div>
   </Container>
  );
}
