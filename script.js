document.getElementById('calcBtn').addEventListener('click', () => {
  const cost = Number(document.getElementById('cost').value);
  const price = Number(document.getElementById('price').value);
  const name = document.getElementById('productName').value.trim();

  if (!name) {
    alert('商品名を入力してください');
    return;
  }
  if (isNaN(cost) || cost <= 0) {
    alert('仕入れ値は1以上の数字で入力してください');
    return;
  }
  if (isNaN(price) || price <= 0) {
    alert('販売価格は1以上の数字で入力してください');
    return;
  }
  if (price < cost) {
    alert('販売価格は仕入れ値以上にしてください');
    return;
  }

  const profit = price - cost;
  const profitPercent = ((profit / price) * 100).toFixed(2);

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `${name} の利益は ${profit} 円 (${profitPercent}%) です`;
});
