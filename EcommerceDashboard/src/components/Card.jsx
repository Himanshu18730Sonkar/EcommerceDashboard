import React from 'react';

/**
 * Card Component - Reusable card wrapper with consistent styling
 */
export const Card = React.memo(({ children, className = '' }) => {
  return (
    <div className={`group bg-white dark:bg-slate-800 backdrop-blur-md border-2 border-slate-200 dark:border-slate-700 rounded-2xl shadow-3d-raised hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

/**
 * StatCard Component - Displays a statistic with icon, value, and change indicator
 */
export const StatCard = React.memo(({ title, value, change, isPositive, icon: Icon, bgColor, textColor }) => {
  const [showFull, setShowFull] = React.useState(false);
  const [isTruncated, setIsTruncated] = React.useState(false);
  const valueRef = React.useRef(null);
  
  React.useEffect(() => {
    // Check if the text is truncated
    if (valueRef.current) {
      setIsTruncated(valueRef.current.scrollWidth > valueRef.current.clientWidth);
    }
  }, [value]);
  
  return (
    <Card className="p-6 sm:p-7 relative overflow-hidden">
      {/* Gradient background accent */}
      <div className={`absolute top-0 right-0 w-40 h-40 ${bgColor} opacity-25 dark:opacity-35 blur-3xl rounded-full -mr-16 -mt-16`}></div>
      
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">{title}</p>
          
          {/* Value with hover tooltip */}
          <div className="relative group/value mb-3">
            <h3 
              ref={valueRef}
              className={`text-3xl sm:text-4xl font-bold bg-linear-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent truncate ${isTruncated ? 'cursor-pointer' : ''}`}
              onMouseEnter={() => isTruncated && setShowFull(true)}
              onMouseLeave={() => setShowFull(false)}
            >
              {value}
            </h3>
            
            {/* Tooltip showing full value - only when truncated */}
            {showFull && isTruncated && (
              <div className="absolute left-0 top-full mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-950 text-white text-2xl font-bold rounded-xl shadow-2xl whitespace-nowrap z-50 border border-slate-700 animate-in fade-in duration-200">
                {value}
                <div className="absolute bottom-full left-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-slate-900 dark:border-b-slate-950"></div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${isPositive ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'}`}>
              <span>{isPositive ? '↑' : '↓'}</span>
              {change}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">vs last month</span>
          </div>
        </div>
        <div className={`p-4 rounded-2xl ${bgColor} shadow-3d-raised group-hover:scale-110 transition-transform duration-300 border-2 border-white/80 dark:border-slate-600/60`}> 
          <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${textColor} drop-shadow-sm`} />
        </div>
      </div>
    </Card>
  );
});

StatCard.displayName = 'StatCard';
