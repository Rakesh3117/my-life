import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import InLineDropDown from "../formFields/Dropdown";

const OPTIONS = [
  "Last 7 Days",
  "1 Month",
  "3 Months",
  "1 Year",
  "5 Years",
];

const CHART_COLORS = [
  "#22C55E", // Green
  "#3B82F6", // Blue
  "#F97316", // Orange
  "#A855F7", // Purple
  "#EF4444", // Red
  "#14B8A6", // Teal
  "#EAB308", // Yellow
  "#EC4899", // Pink
];

const CustomTooltip = ({
  active,
  payload,
}) => {
  if (!active || !payload?.length) return null;

  const item = payload[0];

  return (
    <div className="bg-card border border-default rounded-lg px-3 py-2 shadow-lg">
      <p className="text-heading font-medium">
        {item.name}
      </p>

      <p className="text-body text-sm">
        ₹{item.value.toLocaleString()}
      </p>
    </div>
  );
};

const DonutChart = ({
  title,
  total,
  data = [],
}) => {
  const [selectedPeriod, setSelectedPeriod] =
    useState("Last 7 Days");

  const chartData = data.map(
    (item, index) => ({
      ...item,
      color:
        CHART_COLORS[
          index %
            CHART_COLORS.length
        ],
    })
  );

  return (
    <div className="bg-card border border-default rounded-xl shadow-modal p-6 w-full h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-heading">
            {title}
          </h3>

          <p className="text-xs text-body mt-1">
            Total: ₹
            {total.toLocaleString()}
          </p>
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
      <div className="h-[280px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={75}
              outerRadius={105}
              paddingAngle={4}
              stroke="none"
            >
              {chartData.map(
                (item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                  />
                )
              )}
            </Pie>

            {/* Center Label */}
            <text
              x="50%"
              y="46%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              className="text-heading"
              style={{
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              ₹
              {total.toLocaleString()}
            </text>

            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              style={{
                fontSize: "12px",
                opacity: 0.7,
              }}
            >
              Total
            </text>

            <Tooltip
              content={
                <CustomTooltip />
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-5 mt-4 border-t border-default pt-4">
        {chartData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    item.color,
                }}
              />

              <span className="text-sm text-body">
                {item.name}
              </span>
            </div>

            <span className="text-sm font-medium text-heading">
              ₹
              {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;