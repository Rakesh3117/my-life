import { HiMiniArrowTrendingUp, HiMiniArrowTrendingDown, HiOutlineMinusSmall } from "react-icons/hi2";
import { SectionTitle } from "../../../ui/Typography";

const trendConfig = {
  INCREASE: {
    Icon: HiMiniArrowTrendingUp,
    text: 'increase',
    className:
      'bg-success/10 text-success'
  },
  DECREASE: {
    Icon: HiMiniArrowTrendingDown,
    text: 'decrease',
    className:
      'bg-error/10 text-error'
  },
  NEUTRAL: {
    Icon: HiOutlineMinusSmall,
    text: 'no change',
    className:
      'bg-muted text-warning'
  },
}

export const MoneyInfoCard = ({
  title,
  icon,
  amount,
  type = 'NEUTRAL',
  changePercentage,
}) => {
  const { Icon, text, className } =
    trendConfig[type]

  return (
    <div className="bg-card rounded-lg p-3 shadow-xs shadow-modal">
      <div className="flex items-center gap-2">
       {icon && <div className="rounded-lg bg-neutral-secondary-soft w-6 h-6 flex items-center justify-center text-[100px] text-primary">
          {icon}
        </div>}
        <SectionTitle>{title}</SectionTitle>
      </div>

      <h3 className="text-[35px] font-bold mb-3">
        {amount}
      </h3>

      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full animate-ping opacity-75 bg-current" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
        </span>

        <Icon size={12} />

        <span className="text-[11px]">
          {changePercentage}% {text}
        </span>
      </div>
    </div>
  )
}