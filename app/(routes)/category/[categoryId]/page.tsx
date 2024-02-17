import getProducts from "@/actions/get-products";
import React from "react";
export const ravalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage:React.FC<CategoryPageProps> = async ({
    params,searchParams
}) => {
    const products = await getProducts({categoryId:params.categoryId,colorId:searchParams.colorId,sizeId:searchParams.sizeId})
    console.log(`[Category_page]`,{products})
  return <div>CategoryPage</div>;
};

export default CategoryPage;
