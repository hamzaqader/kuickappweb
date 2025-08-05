export default function ShimmerLoader() {
  return (
    <div className="animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg"></div>
      </div>

      {/* Tag placeholder */}
      <div className="px-1 mb-3">
        <div className="h-5 w-16 bg-gray-200 rounded"></div>
      </div>

      {/* Content placeholders */}
      <div className="px-1 space-y-3">
        {/* Title lines */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded w-full"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        </div>
        
        {/* Description lines */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Author info placeholder */}
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="space-y-1">
            <div className="h-3 bg-gray-200 rounded w-20"></div>
            <div className="h-3 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Grid of shimmer loaders
export function ShimmerGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg p-6">
          <ShimmerLoader />
        </div>
      ))}
    </div>
  );
}