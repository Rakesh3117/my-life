import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import InLineDropDown from "../formFields/Dropdown";

const OPTIONS = ["Last 7 Days", "1 Month", "3 Months", "1 Year", "5 Years"];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-card border border-default rounded-lg px-3 py-2 shadow-lg">
      <p className="text-xs text-body mb-1">{label}</p>

      <p className="text-sm font-semibold text-heading">
        ₹{payload[0].value.toLocaleString()}
      </p>
    </div>
  );
};

const MoneyLineChart = ({
  title,
  amount,
  percentage,
  data = [],
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 Days");

  const isPositive = percentage >= 0;

  // Y-Axis Calculations
  const values = data.map((item) => item.value);

  const min = Math.min(...values);
  const max = Math.max(...values);

  const step = Math.round((max - min) / 3);

  const ticks = [
    min,
    min + step,
    min + step * 2,
    max,
  ];

  return (
    <div className="bg-card border border-default rounded-xl shadow-modal p-6 w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-xl font-bold text-heading">
              {amount}
            </h3>

            <p className="text-xs text-body mt-1">
              {title}
            </p>
          </div>

          <div
            className={`flex items-center gap-1 font-medium ${
              isPositive
                ? "text-success"
                : "text-danger"
            }`}
          >
            {isPositive ? (
              <FaArrowUp size={14} />
            ) : (
              <FaArrowDown size={14} />
            )}

            <span className="text-sm">
              {Math.abs(percentage)}%
            </span>
          </div>
        </div>

        <InLineDropDown
            options={OPTIONS}
            value={selectedPeriod}
            onChange={setSelectedPeriod}
            placeholder="Select Period"
            width="w-32"
          />
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              opacity={0.15}
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "currentColor",
              }}
            />

            <YAxis
              ticks={ticks}
              axisLine={false}
              tickLine={false}
              width={55}
              tickFormatter={(value) =>
                `₹${value.toLocaleString()}`
              }
              tick={{
                fontSize: 12,
                fill: "currentColor",
              }}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="currentColor"
              strokeWidth={3}
              className="text-primary"
              dot={false}
              activeDot={{
                r: 6,
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoneyLineChart;