document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', toggleHistoryTransactionDetail);
});

function toggleHistoryTransactionDetail(e) {
  const node = e.target.closest(".history__transaction");
  
  if(!node) return;

  node.classList.toggle("history__transaction_open");
}