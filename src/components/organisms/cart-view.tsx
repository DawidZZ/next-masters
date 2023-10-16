import { ChangeQuantity } from "../atoms/cart/change-quantity";

const CartView = ({ cart }: { cart: Cart }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start bg-white pt-5">
      <h1 className="mb-6 text-2xl font-semibold">Order #{cart.id} summary</h1>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto divide-y divide-gray-200 bg-gray-50 shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-gray-50">
            {cart.orderItems &&
              cart.orderItems.map((item) => {
                if (!item.product) {
                  return null;
                }
                return (
                  <tr key={item.id} className="cursor-pointer hover:bg-gray-200">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.product.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">${item.product.price / 100}</td>
                    <td className="flex justify-start space-x-2 px-6 py-4 text-sm text-gray-900">
                      <ChangeQuantity itemId={item.id} quantity={item.quantity} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartView;
