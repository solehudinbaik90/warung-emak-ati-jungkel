import { formatCurrency } from "../../../utils/formatCurrency.js";
import Button from "../../common/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function CartSummary({ totalPrice, disabled }) {
  const navigate = useNavigate();
  return (
    <div className="border border-item-border rounded-md p-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-meta">Subtotal</span>
        <span className="text-title">{formatCurrency(totalPrice)}</span>
      </div>
      <div className="flex justify-between text-base font-semibold mb-4">
        <span>Total</span>
        <span className="price">{formatCurrency(totalPrice)}</span>
      </div>
      <Button
        variant="primary"
        className="w-full"
        disabled={disabled}
        onClick={() => navigate("/checkout")}
      >
        Checkout via WhatsApp
      </Button>
    </div>
  );
}
