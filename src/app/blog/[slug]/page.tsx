import BlogDetail from '@/components/functional/BlogDetail/BlogDetail';
import blogData from '@/app/_lib/blog.data.json';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

// Sample blog data with full content
const fullBlogData = [
  {
    id: 1,
    title: "Effective Acceptance and Commitment Therapy Exercises for Helping Teens Heal and Grow in Addiction Rehab",
    content: "Think addiction is a problem only adults struggle with? Think again. Recent reports show that 1 in 8 teenagers abused an illicit substance last year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.",
    author: {
      name: "Giana Vetrows",
      title: "Senior Writer"
    },
    tag: "First Block",
    category: "First Block",
    publishedDate: "June 17, 2026",
    slug: "effective-acceptance-commitment-therapy-exercises"
  },
  {
    id: 2,
    title: "Top 11 Expert Tips for Choosing the Right Inpatient Addiction Treatment Center for Teens",
    content: "Many people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.\n\nThink addiction is a problem only adults struggle with? Think again. Recent reports show that 1 in 8 teenagers abused an illicit substance last year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.",
    author: {
      name: "Giana Vetrows",
      title: "Senior Writer"
    },
    tag: "First Block",
    category: "First Block",
    publishedDate: "June 15, 2026",
    slug: "expert-tips-choosing-right-inpatient-addiction-treatment"
  },
  {
    id: 3,
    title: "Effective Acceptance and Commitment Therapy Exercises for Helping Teens Heal and Grow in Addiction Rehab",
    content: "Think addiction is a problem only adults struggle with? Think again. Recent reports show that 1 in 8 teenagers abused an illicit substance last year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.",
    author: {
      name: "Giana Vetrows",
      title: "Senior Writer"
    },
    tag: "First Block",
    category: "Tech",
    publishedDate: "June 14, 2026",
    slug: "effective-acceptance-commitment-therapy-exercises-tech"
  },
  {
    id: 4,
    title: "Effective Acceptance and Commitment Therapy Exercises for Helping Teens Heal and Grow in Addiction Rehab",
    content: "Think addiction is a problem only adults struggle with? Think again. Recent reports show that 1 in 8 teenagers abused an illicit substance last year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.\n\nMany people are surprised when they discover just how common mental health challenges are. In the United States, about 20% of adults experience some kind of mental health problem in any given year.",
    author: {
      name: "Giana Vetrows",
      title: "Senior Writer"
    },
    tag: "First Block",
    category: "Latest",
    publishedDate: "June 13, 2026",
    slug: "effective-acceptance-commitment-therapy-exercises-latest"
  }
];

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = fullBlogData.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
}