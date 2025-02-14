import Menu from "./menu";
import VerifyLogin from "./verify-login";

export default function Dashboard() {

    VerifyLogin();
    return (
      <div>
      <h1 align="center">Bill</h1>
      <table border={1} width="80%" cellPadding={10} align="center">
        <tbody><tr>
            <th colSpan={4} align="right">
              <button onclick="window.print();">Print</button>
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <td />
            <th>Date</th>
            <td />
          </tr>
          <tr>
            <th>Customer</th>
            <td />
            <th>Amount</th>
            <td />
          </tr>
          <tr>
            <th>Address</th>
            <td />
            <th>Payment Mode</th>
            <td />
          </tr>
          <tr>
            <th>City</th>
            <td />
            <th>Payment Status</th>
            <td />
          </tr>
          <tr>
            <th>Pincode</th>
            <td />
            <th>Order Status</th>
            <td />
          </tr>
          <tr>
            <th>Remarks</th>
            <td />
            <th>No Of Items</th>
            <td />
          </tr>
        </tbody></table>
      <h3 align="center">Items</h3>
      <table border={1} width="80%" cellPadding={10} align="center">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={5} align="right">Total: 256000</th>
          </tr>
        </tfoot>
      </table>
    </div>
    );
}