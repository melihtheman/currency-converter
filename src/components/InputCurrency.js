export default function InputCurrency({ className, setInput, input }) {
  return (
    <>
      <label className="input-label">Enter Amount</label>
      <input
        type="number"
        className={className}
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </>
  );
}
