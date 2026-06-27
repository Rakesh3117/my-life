import {
  mockBudgetTracking,
  mockExpenseBreakDownData,
  mockExpensesGraphData,
  mockTransactionHistory,
} from "../../../../mocks/moneyTracking/moneyTracking.mocks";
import WelcomeBanner from "../../../../shared/WelcomeBanner";
import DonutChart from "../../../../shared/charts/DonutChart";
import MoneyLineChart from "../../../../shared/charts/MoneyLineChart";
import { MoneyInfoCard } from "../../shared/MoneyInfoCard";
import { GiTakeMyMoney, GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { PiBank } from "react-icons/pi";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import BudgetTracking from "../../components/dashboard/BudgetTracking";

const MoneyTrackingDashboard = () => {
  
  const expensesGraphData = mockExpensesGraphData.default; // Access the default export from the mockExpensesGraphData object
  const expenseBreakDownData = mockExpenseBreakDownData.default; // Access the default export from the mockExpenseBreakDownData object
  const transactionHistory = mockTransactionHistory.default
  const budgetTrackingData = mockBudgetTracking.default; // Using the mock data for budget tracking

  return (
    <div className="flex flex-col gap-4 ">
      <WelcomeBanner />

      <div className="grid grid-cols-4 gap-4">
        <MoneyInfoCard
          title="Total Balance"
          icon={<GiTakeMyMoney />}
          amount="$5,000"
          type="INCREASE"
          changePercentage={10}
        />
        <MoneyInfoCard
          title="Income"
          icon={<GiReceiveMoney />}
          amount="$5,000"
          type="INCREASE"
          changePercentage={10}
        />
        <MoneyInfoCard
          title="Expenses"
          icon={<GiPayMoney />}
          amount="$2,000"
          type="DECREASE"
          changePercentage={5}
        />
        <MoneyInfoCard
          title="Savings"
          icon={<PiBank />}
          amount="$3,000"
          type="INCREASE"
          changePercentage={10}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        <div className="lg:col-span-2 h-full">
          <MoneyLineChart
            title="Expenses Overview"
            amount={expensesGraphData.totalAmount}
            percentage={12}
            data={expensesGraphData.data}
          />
        </div>

        <div className="lg:col-span-1 h-full">
          <DonutChart
            title="Expenses Breakdown"
            total={expenseBreakDownData.totalAmount}
            data={expenseBreakDownData.data}
          />
        </div>
      </div>
      <div className="h-[400px] grid grid-cols-2 gap-4">
        <RecentTransactions
          title="Recent Transactions"
          height="h-[650px]"
          transactionHistory={transactionHistory}
          onViewAll={() => {
            console.log("View All clicked");
          }}
        />
        <BudgetTracking
          title="Budget Tracking"
          totalBudget={budgetTrackingData.totalBudget}
          spentAmount={budgetTrackingData.spentAmount}
          budgetCategories={budgetTrackingData.budgetCategories}
          topCategories={budgetTrackingData.topCategories}
          onViewDetails={() => {
            console.log("View Details clicked");
          }}
          height="h-[650px]"
        />
      </div>
    </div>
  );
};

export default MoneyTrackingDashboard;
