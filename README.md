# MedITest Diagnostics - Static Lab Billing Application

## How it works

1. The lab technician searches for and selects customer tests.
2. The application compares the technician/lab supplier cost across:
   - MedMax
   - MedPlus
   - Vijaya
3. The lowest supplier cost is automatically selected for each test.
4. The customer price is kept separate from the supplier cost.
5. A standard customer bill is generated using the customer price.
6. The screen shows test name, rate, quantity, total and grand total.
7. The bill can be printed using the browser print dialog.
8. The bill can also be downloaded as a `.txt` file.

## Run

This is a static application. No server, database or installation is required.

On Windows:
- Extract the ZIP.
- Double-click `index.html`.

Or from Command Prompt:
- `cd meditest-lab-billing`
- `start index.html`

## Change prices/tests

Edit the `tests` array in `app.js`.

Each test follows this format:

{
  name: "CBC",
  MedMax: 300,
  MedPlus: 280,
  Vijaya: 320,
  customerPrice: 400
}

`MedMax`, `MedPlus`, and `Vijaya` are internal supplier costs.
`customerPrice` is the amount shown on the customer bill.

## Important

This is intentionally a front-end/static prototype. Data is stored in JavaScript and is not connected to a database or backend.
