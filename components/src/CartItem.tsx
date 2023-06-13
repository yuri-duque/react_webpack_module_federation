import ContainedButton from "ui-elements/Button/ContainedButton";
import Card from "ui-elements/Card";

export interface CartItemProps {
  quantity: number;
  add: (quantity: number) => void;
  remove: (quantity: number) => void;
}

export const CartItem = function ({ quantity, add, remove }: CartItemProps) {
  return (
    <Card title="leite">
      <div className="flex justify-between items-center">
        <ContainedButton color="error" onClick={() => remove(quantity)}>
          -
        </ContainedButton>

        <p className="text-center font-bold px-4">{quantity}</p>

        <ContainedButton color="success" onClick={() => add(quantity)}>
          +
        </ContainedButton>
      </div>
    </Card>
  );
};

export default CartItem;
