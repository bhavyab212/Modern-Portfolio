import * as React from "react";
import { cn } from "../lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current progress value */
  value?: number;
  /** Maximum progress value */
  max?: number;
  /** Optional class name for the indicator element */
  indicatorClassName?: string;
  /** Whether to show indeterminate loading animation */
  indeterminate?: boolean;
  /** Color variant for the progress bar */
  color?:
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
  /** Size variant of the progress bar */
  size?: "sm" | "md" | "lg";
  /** Whether to show the progress value as text */
  showValue?: boolean;
  /** Animation speed for the progress transitions */
  animationSpeed?: "slow" | "normal" | "fast";
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      indicatorClassName,
      indeterminate = false,
      color = "default",
      size = "md",
      showValue = false,
      animationSpeed = "normal",
      ...props
    },
    ref
  ) => {
    const percentage = value ? (value / max) * 100 : 0;
    const [prevPercentage, setPrevPercentage] = React.useState(percentage);
    const [isAnimating, setIsAnimating] = React.useState(false);

    React.useEffect(() => {
      // Only animate when the value actually changes
      if (percentage !== prevPercentage) {
        setIsAnimating(true);
        setPrevPercentage(percentage);

        // Reset the animation state after the transition is complete
        const timeout = setTimeout(() => {
          setIsAnimating(false);
        }, 1000); // This should match the CSS transition duration

        return () => clearTimeout(timeout);
      }
    }, [percentage, prevPercentage]);

    // Premium color variants with gradient and subtle glow
    const colorVariants = {
      default: "bg-gradient-to-r from-slate-400 to-slate-500",
      primary: "bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
      secondary: "bg-gradient-to-r from-purple-500 to-purple-600",
      success: "bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500",
      warning: "bg-gradient-to-r from-amber-500 to-yellow-600 dark:from-amber-400 dark:to-yellow-500",
      danger: "bg-gradient-to-r from-rose-500 to-red-600 dark:from-rose-400 dark:to-red-500",
    };

    // Size variants
    const sizeVariants = {
      sm: "h-2",
      md: "h-3",
      lg: "h-4",
    };

    // Animation speed variants
    const animationVariants = {
      slow: "duration-1000",
      normal: "duration-700",
      fast: "duration-300",
    };

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuetext={
          indeterminate ? undefined : `${Math.round(percentage)}%`
        }
        className={cn(
          "group relative w-full overflow-hidden rounded-full transition-all duration-500 ease-out",
          "bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm",
          "ring-1 ring-gray-300/20 dark:ring-gray-700/30",
          sizeVariants[size],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full w-full flex-1 rounded-full transition-all duration-700 ease-out",
            "relative overflow-hidden",
            colorVariants[color],
            "shadow-sm",
            "group-hover:shadow-md group-hover:brightness-105",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
            "before:translate-x-[-200%] group-hover:before:translate-x-[200%] before:transition-transform before:duration-1000",
            indeterminate ? "animate-progress-indeterminate origin-left" : "",
            isAnimating ? "transition-all ease-out" : "",
            animationVariants[animationSpeed],
            indicatorClassName
          )}
          style={
            indeterminate
              ? {}
              : { transform: `translateX(-${100 - percentage}%)` }
          }
        />
        {showValue && (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center text-xs font-semibold",
              isAnimating ? "transition-opacity duration-300" : ""
            )}
          >
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress };
