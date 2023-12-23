import Image from "next/image"
import Link from "next/link"

export const RightSidebar = () => {
  return (
    <section className="hidden xl:flex flex-col gap-16 w-[330px] p-5 background-light900_dark200 text-dark200_light900 border-l sticky top-0 left-0 h-screen border-[#C8CBD954] dark:border-[#0F111780] pt-36">
      <div>
        <h3 className="h3-bold mb-8">Hot Network</h3>
        <div className="flex flex-col gap-[30px] items-start">
        {posts.map(post => (
          <Link key={post.id} href={`/questions/${post.id}`} className="w-full">
            <div className="flex items-start gap-[10px] justify-between text-dark500_light800">
              <p className="body-medium">{post.body}</p>
              <Image
                src={'/assets/icons/chevron-right.svg'}
                alt='icon'
                width={20}
                height={20}
              />
            </div>
          </Link>
        ))}
        </div>
      </div>
      <div>
        <h3 className="h3-bold mb-8">Popular Tags</h3>
        <div className="flex flex-col gap-4 items-start">
        {tags.map(tag => (
          <Link key={tag.id} href={tag.href} className="w-full">
            <div className="flex justify-between">
              <div className="px-4 py-2 rounded-md text-dark400_light500 background-light800_dark300 small-regular uppercase">{tag.label}</div>
              <span className="text-dark500_light700">{tag.count}+</span>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  )
}

const posts = [
  { id: 1, body: "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?", href: '/' },
  { id: 2, body: "Is it only me or the font is bolder than necessary?", href: '/' },
  { id: 3, body: "Can I get the course for free?", href: '/' },
  { id: 4, body: "Redux Toolkit Not Updating State as Expected", href: '/' },
  { id: 5, body: "Async/Await Function Not Handling Errors Properly", href: '/' },
]

const tags = [
  { id: 1, label: 'next.js', count: 2000, href: '/' },
  { id: 2, label: 'javascript', count: 1500, href: '/' },
  { id: 3, label: 'machine learning', count: 1800, href: '/' },
  { id: 4, label: 'astro', count: 2200, href: '/' },
  { id: 5, label: 'django', count: 1700, href: '/' },
  { id: 6, label: 'postgresql', count: 1200, href: '/' },
  { id: 7, label: 'meta', count: 2500, href: '/' },
  { id: 8, label: 'svelte', count: 900, href: '/' }
];



