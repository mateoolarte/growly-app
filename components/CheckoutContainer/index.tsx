export default function CheckoutContainer() {
  return (
    <form action="https://checkout.wompi.co/p/" method="GET">
      <input
        type="hidden"
        name="public-key"
        value="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
      />
      <input type="hidden" name="currency" value="COP" />
      <input type="hidden" name="amount-in-cents" value="4950000" />
      <input type="hidden" name="reference" value="4XMPGKWWPKWQ" />

      {/* <input type="hidden" name="redirect-url" value="URL_REDIRECCION" /> */}
      <button type="submit">Pagar con Wompi</button>
    </form>
  );
}
