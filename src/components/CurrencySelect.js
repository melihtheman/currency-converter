import { useState } from "react";

export default function CurrencySelect({
  className,
  setFromSelect,
  setToSelect,
}) {
  return (
    <>
      <select
        className={className}
        onChange={(e) => setFromSelect(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TRY">TRY</option>
      </select>

      <select
        className={className}
        onChange={(e) => setToSelect(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TRY">TRY</option>
      </select>
    </>
  );
}
