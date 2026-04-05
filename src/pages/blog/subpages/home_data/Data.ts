type Blog<T> = {
    title: T,
    desc: T,
    timestamp: T,
    path: T
}

export const Blogs: Blog<string>[] = [
    { title: "Rewrite of my homepage", desc: "i decided to rewrite my homepage...", timestamp: "2.04.2026", path: "/blog/post-2" },
    { title: "Testing some syntax", desc: "just testing some syntax in posts...", timestamp: "2.04.2026", path: "/blog/post-1" },
]
