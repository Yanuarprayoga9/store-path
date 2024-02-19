import { Billboard } from "@/types";

const URL=`https://dashboard-cms-admin.vercel.app/api/a3486c42-a607-43fe-b75a-3ad74767d41a/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;