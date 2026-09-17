import shippingRegions from "../../../data/shipping.js";

export default function ShippingSelector({ value, onChange }) {
  return (
    <div>
      <label className="text-sm text-title block mb-1">Wilayah Pengiriman</label>
      <select
        className="w-full border border-item-border rounded-md px-3 py-2 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Pilih Wilayah</option>
        {shippingRegions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
}

