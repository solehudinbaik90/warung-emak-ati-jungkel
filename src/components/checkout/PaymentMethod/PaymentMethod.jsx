const methods = [
  { id: "whatsapp", label: "Konfirmasi via WhatsApp", icon: "💬" },
  { id: "transfer", label: "Transfer Bank", icon: "🏦" },
  { id: "dana", label: "Bayar dengan DANA", icon: "📲" },
  { id: "ovo", label: "Bayar dengan OVO", icon: "📲" }
];

export default function PaymentMethod({ value, onChange }) {
  return (
    <div>
      <label className="text-sm text-title block mb-1">Metode Pembayaran</label>
      <div className="space-y-2">
        {methods.map((method) => (
          <label
            key={method.id}
            className="flex items-center gap-2 border border-item-border rounded-md px-3 py-2 text-sm cursor-pointer"
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={value === method.id}
              onChange={() => onChange(method.id)}
            />
            <span>{method.icon} {method.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

