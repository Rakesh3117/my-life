import { FaArrowRight } from "react-icons/fa";
import Card from "../../../../ui/Card";
import PrimaryButton from "../../../../shared/formFields/PrimaryButton";
import ProgressBar from "../../../../shared/charts/ProgressBar";

const BudgetTracking = ({
  title = "Budget Tracking",
  totalBudget = 0,
  spentAmount = 0,
  budgetCategories = [],
  topCategories = [],
  onViewDetails,
  height = "h-[500px]",
}) => {
  const utilizedPercentage = totalBudget
    ? Math.round((spentAmount / totalBudget) * 100)
    : 0;

  const utilizedPercentageColor =
    utilizedPercentage > 75
      ? "text-error"
      : utilizedPercentage > 35
        ? "text-warning"
        : "text-success";

  return (
    <Card className={`flex ${height} flex-col`}>
      {/* Header */}
      <div className="mb-2">
        <h3 className="text-[24px] font-semibold">{title}</h3>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <p className="text-body font-medium text-secondary">
          ₹{spentAmount.toLocaleString()} spent of ₹
          {totalBudget.toLocaleString()}
        </p>

        <p className={`mt-1 text-small ${utilizedPercentageColor}`}>
          {utilizedPercentage}% Utilized
        </p>
      </div>

      {/* Budget Categories */}
      <div className="space-y-4 overflow-y-auto">
        {budgetCategories.map((category) => (
          <ProgressBar
            key={category.name}
            name={category.name}
            percentage={category.percentage}
            showName
            showPercentage
          />
        ))}
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-border" />

      {/* Top Categories */}
      <div className="flex-1 overflow-y-auto">
        <h4 className="mb-4 text-body font-semibold">
          Top Spending Categories
        </h4>

        <div className="space-y-3">
          {topCategories.map((category) => (
            <div
              key={category.rank}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{category.icon}</span>

                <span className="text-small font-bold">
                  #{category.rank} {category.name}
                </span>
              </div>

              <span className="text-small text-secondary">
                ₹{category.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <PrimaryButton
        variant="outline"
        className="mt-6 w-full"
        rightIcon={<FaArrowRight />}
        onClick={onViewDetails}
      >
        View Full Details
      </PrimaryButton>
    </Card>
  );
};

export default BudgetTracking;
