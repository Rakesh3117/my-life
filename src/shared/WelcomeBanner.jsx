import { FaArrowUp } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { LuReceipt } from "react-icons/lu";
import { AiOutlineBarChart } from "react-icons/ai";

import { Heading, SectionTitle } from '../ui/Typography'

const WelcomeBanner = () => {
  return (
    <div className="w-full h-56 rounded-2xl bg-card border border-default p-8 shadow-modal flex items-center justify-between overflow-hidden relative mb-6">
      {/* Left Content */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <Heading className="text-secondary">
            Good Morning, Rakesh 👋
          </Heading>

          <SectionTitle className="mt-1 text-body text-sm">
            Welcome back! Here's your financial overview.
          </SectionTitle>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mt-1">
            Total Balance
          </p>

          <h2 className="text-lg font-bold text-heading">
            ₹1,25,000
          </h2>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-success/10 text-success">
            <span className="h-2 w-2 rounded-full bg-current shadow-lg shadow-current" />
            <FaArrowUp size={12} />
            <span className="text-[10px]">
              8% increase from last month
            </span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="max-w-md flex flex-col items-end justify-between h-full">
        <div className="bg-background/40 border border-default rounded-xl p-5 w-full">
          <p className="text-sm text-muted-foreground mb-2">
            Today's Recommendation
          </p>

          <p className="text-xs font-medium leading-relaxed">
            💰 Allocate ₹3,000 to your Emergency Fund goal to stay
            ahead of your monthly savings target.
          </p>
        </div>

        <div className="flex gap-3 mt-5">
          <button className="text-xs flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90 transition-all duration-200">
            <MdAddCircle size={10} />
            Add Income
          </button>

          <button className="text-xs flex items-center gap-2 px-4 py-2 rounded-lg border border-default bg-background cursor-pointer hover:bg-background/90 transition-all duration-200">
            <LuReceipt size={10} />
            Add Expense
          </button>

          <button className="text-xs flex items-center gap-2 px-4 py-2 rounded-lg border border-default bg-background cursor-pointer hover:bg-background/90 transition-all duration-200">
            <AiOutlineBarChart size={10} />
            Reports
          </button>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute right-20 bottom-0 h-40 w-40 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
    </div>
  )
}

export default WelcomeBanner