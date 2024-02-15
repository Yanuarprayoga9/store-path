import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export default async function Home() {
  const billboard  = await getBillboard("2f08eccd-1cf1-4494-ba9b-c483259be440")
  const products = await getProducts({isFeatured:true})
  console.log({products})
  return (
   <Container>
    <div className="space-x-10 pb-10">
      <Billboard data={billboard}/>
    </div>
   </Container>
  );
}
