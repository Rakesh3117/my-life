
import { FaArrowRight } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import Card from "../../../../ui/Card";
import PrimaryButton from "../../../../shared/formFields/PrimaryButton";

const RecentTransactions = ({
  title = "Recent Transactions",
  transactionHistory = [],
  height = "h-[500px]",
  onViewAll,
}) => {
  return (
    <Card className={`flex ${height} flex-col`}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[24px] font-semibold">
          {title}
        </h3>

        <button
          onClick={onViewAll}
          className="
            flex items-center gap-1
            text-sm
            text-muted
            transition-colors
            hover:text-primary
            hover:cursor-pointer
          "
        >
          View All
          <FaArrowRight size={16} />
        </button>
      </div>

      {/* Transactions */}
      <div className="flex-1 space-y-1 overflow-y-auto">
        {transactionHistory.map((transaction) => (
          <div
            key={transaction.id}
            className="
              grid
              grid-cols-[auto_1fr_auto]
              items-center
              gap-3
              rounded-md
              p-3
              transition-colors
              hover:bg-hover
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-background
                text-primary
              "
            >
              {transaction.icon}
            </div>

            {/* Content */}
            <div className="min-w-0">
              <p className="truncate text-body font-medium text-primary">
                {transaction.name}
              </p>

              <p className="truncate text-small text-muted">
                {transaction.note}
              </p>
            </div>

            {/* Amount + Time */}
            <div className="text-right">
              <p className="text-small text-muted">
                {transaction.timestamp}
              </p>

              <p
                className={`mt-1 font-semibold ${
                  transaction.type === "income"
                    ? "text-success"
                    : "text-error"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}₹
                {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <PrimaryButton
        onClick={onViewAll}
        variant="outline"
        leftIcon={<GrTransaction />}
      >
        View All Transactions
      </PrimaryButton>
    </Card>
  );
};

export default RecentTransactions;
