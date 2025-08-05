import Image from "next/image";
import LoaderLink from "@/components/ui/LoaderLink/LoaderLink";

interface BlogCardProps {
  title: string;
  description: string;
  image?: string;
  readMoreText: string;
  author: {
    name: string;
    avatar?: string;
    title?: string;
  };
  tag: string;
  slug: string;
  className?: string;
}

export default function BlogCard({
  title,
  description,
  image,
  readMoreText,
  author,
  tag,
  slug,
  className = ""
}: BlogCardProps) {
  return (
    <LoaderLink href={`/blog/${slug}`}>
      <div className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${className}`}>
      {/* Blog post image */}
      <div className="relative w-full h-48 bg-gray-200">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Blog Image Placeholder</span>
          </div>
        )}
      </div>

      {/* Blog post content */}
      <div className="p-6">
        {/* Tag */}
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Author info */}
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
          <div className="relative w-10 h-10 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-medium">
                {author.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">{author.name}</p>
            {author.title && (
              <p className="text-xs text-gray-500">{author.title}</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </LoaderLink>
  );
}