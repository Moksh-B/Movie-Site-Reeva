import { useSelector } from "react-redux"
import { CategoryCard } from "../components/categoryCard.jsx"


const categories = [
    { code: 28, category: "Action", image: "src/assets/action.avif", icon: "🔥" },
    { code: 12, category: "Adventure", image: "src/assets/adventure.avif", icon: "🗺️" },
    { code: 16, category: "Animation", image: "src/assets/animation2.jpg", icon: "🎨" },
    { code: 35, category: "Comedy", image: "src/assets/comedy.jpg", icon: "😂" },
    { code: 80, category: "Crime", image: "src/assets/crime.avif", icon: "🕵️" },
    { code: 99, category: "Documentary", image: "src/assets/documentry.avif", icon: "🎥" },
    { code: 18, category: "Drama", image: "src/assets/drama.avif", icon: "🎭" },
    { code: 10751, category: "Family", image: "src/assets/family.avif", icon: "👨‍👩‍👧" },
    { code: 14, category: "Fantasy", image: "src/assets/fantacy.jpg", icon: "🧙" },
    { code: 36, category: "History", image: "src/assets/history.avif", icon: "🏛️" },
    { code: 27, category: "Horror", image: "src/assets/horror.jpg", icon: "👻" },
    { code: 10402, category: "Music", image: "src/assets/music.jpg", icon: "🎵" },
    { code: 9648, category: "Mystery", image: "src/assets/mystery.avif", icon: "🔍" },
    { code: 10749, category: "Romance", image: "src/assets/romance.avif", icon: "❤️" },
    { code: 878, category: "Science Fiction", image: "src/assets/science-fiction.avif", icon: "🚀" },
    { code: 53, category: "Thriller", image: "src/assets/thriller.webp", icon: "🔪" },
    { code: 10752, category: "War", image: "src/assets/war.jpg", icon: "⚔️" },
]
export function Categories() {
const darkTheme = useSelector((state)=> state.theme)

    return (
        <section
            className={`mx-auto max-w-7xl px-6 pt-30 pb-5 ${darkTheme ? "text-white" : "text-black"}`}
        >
            <div className="mb-14">
                <h1 className="text-5xl font-black">Browse Categories</h1>

                <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                    Discover movies from every genre. Choose a category and
                    explore thousands of titles.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                    <CategoryCard key={category.code} category={category} />
                ))}
            </div>
        </section>
    )
}
