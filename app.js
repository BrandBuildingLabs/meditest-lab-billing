const tests = [
  { name: "CBC", MedMax: 300, MedPlus: 280, Vijaya: 320, customerPrice: 400 },
  { name: "LFT", MedMax: 500, MedPlus: 450, Vijaya: 480, customerPrice: 650 },
  { name: "Thyroid", MedMax: 600, MedPlus: 580, Vijaya: 610, customerPrice: 800 },
  { name: "RBS", MedMax: 150, MedPlus: 140, Vijaya: 160, customerPrice: 200 },
  { name: "Urine Analysis", MedMax: 220, MedPlus: 190, Vijaya: 210, customerPrice: 300 },
  { name: "Lipid Profile", MedMax: 700, MedPlus: 650, Vijaya: 680, customerPrice: 900 },
  { name: "HbA1c", MedMax: 450, MedPlus: 420, Vijaya: 440, customerPrice: 600 },
  { name: "Vitamin D", MedMax: 1000, MedPlus: 920, Vijaya: 950, customerPrice: 1300 },
  { name: "Kidney Function Test", MedMax: 650, MedPlus: 590, Vijaya: 620, customerPrice: 850 },
  { name: "Blood Sugar - Fasting", MedMax: 120, MedPlus: 100, Vijaya: 110, customerPrice: 160 }
];

const suppliers = ["MedMax", "MedPlus", "Vijaya"];
const selected = new Set();


const tableBody = document.getElementById("testTableBody");
const comparisonBody = document.getElementById("comparisonBody");
const searchInput = document.getElementById("searchInput");
const selectedCount = document.getElementById("selectedCount");
const comparisonEmpty = document.getElementById("comparisonEmpty");
const comparisonWrap = document.getElementById("comparisonWrap");
const billBody = document.getElementById("billBody");
const grandTotal = document.getElementById("grandTotal");
const downloadBtn = document.getElementById("downloadBtn");
const printBtn = document.getElementById("printBtn");

function money(value) {
  return "₹" + Number(value).toFixed(2);
}

function cheapestLab(test) {
  return suppliers.reduce((best, supplier) =>
    test[supplier] < test[best] ? supplier : best, suppliers[0]
  );
}

function renderTests() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = tests.filter(t => t.name.toLowerCase().includes(term));

  tableBody.innerHTML = visible.map((test, index) => {
    const cheapest = cheapestLab(test);
    return `
      <tr>
        <td>
          <input class="checkbox test-check" type="checkbox"
                 data-name="${test.name}" ${selected.has(test.name) ? "checked" : ""}>
        </td>
        <td class="test-name">${test.name}</td>
        <td class="price">${money(test.MedMax)}</td>
        <td class="price">${money(test.MedPlus)}</td>
        <td class="price">${money(test.Vijaya)}</td>
        <td><span class="cheapest">${cheapest} • ${money(test[cheapest])}</span></td>
        <td class="price"><strong>${money(test.customerPrice)}</strong></td>
      </tr>`;
  }).join("");

  if (!visible.length) {
    tableBody.innerHTML = `<tr><td colspan="7" class="bill-empty">No tests found.</td></tr>`;
  }

  document.querySelectorAll(".test-check").forEach(box => {
    box.addEventListener("change", e => {
      if (e.target.checked) selected.add(e.target.dataset.name);
      else selected.delete(e.target.dataset.name);
      renderAll();
    });
  });
}

function renderComparison() {
  const chosen = tests.filter(t => selected.has(t.name));
  selectedCount.textContent = chosen.length;

  if (!chosen.length) {
    comparisonEmpty.hidden = false;
    comparisonWrap.hidden = true;
    comparisonBody.innerHTML = "";
    return;
  }

  comparisonEmpty.hidden = true;
  comparisonWrap.hidden = false;

  comparisonBody.innerHTML = chosen.map(test => {
    const lab = cheapestLab(test);
    const cost = test[lab];
    const margin = test.customerPrice - cost;
    return `
      <tr>
        <td class="test-name">${test.name}</td>
        <td><span class="cheapest">${lab}</span></td>
        <td>${money(cost)}</td>
        <td>${money(test.customerPrice)}</td>
        <td class="margin-positive">${money(margin)}</td>
      </tr>`;
  }).join("");
}

function renderBill() {
  const chosen = tests.filter(t => selected.has(t.name));

  if (!chosen.length) {
    billBody.innerHTML = `<tr><td colspan="5" class="bill-empty">Select tests above to generate the bill.</td></tr>`;
    grandTotal.textContent = money(0);
    downloadBtn.disabled = true;
    printBtn.disabled = true;
    return;
  }

  let total = 0;
  billBody.innerHTML = chosen.map((test, i) => {
    total += test.customerPrice;
    return `
      <tr>
        <td>${i + 1}</td>
        <td class="test-name">${test.name}</td>
        <td>${money(test.customerPrice)}</td>
        <td>1</td>
        <td>${money(test.customerPrice)}</td>
      </tr>`;
  }).join("");

  grandTotal.textContent = money(total);
  downloadBtn.disabled = false;
  printBtn.disabled = false;
}

function renderAll() {
  renderTests();
  renderComparison();
  renderBill();
}

function generateInvoiceNo() {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `MD-${stamp}-${random}`;
}

function updateDate() {
  const now = new Date();
  document.getElementById("invoiceDate").textContent =
    now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  document.getElementById("invoiceNo").textContent = generateInvoiceNo();
}

function downloadBill() {
  const customer = document.getElementById("customerName").value.trim() || "Walk-in Customer";
  const mobile = document.getElementById("customerMobile").value.trim() || "-";
  const rows = tests.filter(t => selected.has(t.name));
  const total = rows.reduce((sum, t) => sum + t.customerPrice, 0);

  const text = [
    "============================================================",
    "                    MEDITEST DIAGNOSTICS",
    "           Accurate • Fast • Reliable Laboratory Testing",
    "                 Call / WhatsApp: 8500896721",
    "============================================================",
    `Invoice No : ${document.getElementById("invoiceNo").textContent}`,
    `Date       : ${document.getElementById("invoiceDate").textContent}`,
    `Customer   : ${customer}`,
    `Mobile     : ${mobile}`,
    "------------------------------------------------------------",
    "Test Name                         Rate       Qty      Total",
    "------------------------------------------------------------",
    ...rows.map(t => `${t.name.padEnd(34)} ${String(t.customerPrice).padStart(7)}      1   ${String(t.customerPrice).padStart(8)}`),
    "------------------------------------------------------------",
    `TOTAL AMOUNT                                           ${total.toFixed(2)}`,
    "============================================================",
    "Thank you for choosing MedITest Diagnostics.",
    "============================================================"
  ].join("\n");

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${document.getElementById("invoiceNo").textContent}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

document.getElementById("selectAllBtn").addEventListener("click", () => {
  tests.forEach(t => selected.add(t.name));
  renderAll();
});

document.getElementById("clearAllBtn").addEventListener("click", () => {
  selected.clear();
  renderAll();
});

searchInput.addEventListener("input", renderTests);
downloadBtn.addEventListener("click", downloadBill);
printBtn.addEventListener("click", () => window.print());

updateDate();
renderAll();
