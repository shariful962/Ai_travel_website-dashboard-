
import React from "react";

const labels = [
  {
    id: 1,
    title: "Total Earnings",
    amount: "24.48",
  },
  {
    id: 2,
    title: "Total Users",
    decimal: "5600",
  },
  {
    id: 3,
    title: "New Users",
    decimal: "256",
    percent: "4.5",
  },
];

const Label = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 py-2">
      {labels.map((label) => (
        <div key={label.id}>
          <div className="bg-white shadow-custom rounded-[20px] p-6 h-40">
            <h1>{label.title}</h1>

            {/* Conditional for amount vs decimal */}
            {label.amount ? (
              <p className="text-2xl font-bold mt-2">${label.amount}K</p>
            ) : (
              <div className="flex items-center gap-2 mt-2">
                <p className="text-2xl font-bold">{label.decimal}</p>
                {label.percent && (
                  <span
                    className={`text-sm font-semibold ${
                      parseFloat(label.percent) >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    +{label.percent}%
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Label;

