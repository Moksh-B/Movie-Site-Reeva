import { useSelector } from "react-redux"
import { CategoryCard } from "../components/categoryCard.jsx"
import action from "../assets/action.avif"
import adventure from "../assets/adventure.avif"
import animation from "../assets/animation2.jpg"
import comedy from "../assets/comedy.jpg"
import crime from "../assets/crime.avif"
import documentary from "../assets/documentry.avif"
import drama from "../assets/drama.avif"
import family from "../assets/family.avif"
import fantasy from "../assets/fantacy.jpg"
import history from "../assets/history.avif"
import horror from "../assets/horror.jpg"
import music from "../assets/music.jpg"
import mystery from "../assets/mystery.avif"
import romance from "../assets/romance.avif"
import scienceFiction from "../assets/science-fiction.avif"
import thriller from "../assets/thriller.webp"
import war from "../assets/war.jpg"

const categories = [
    { code: 28, category: "Action", image: action, icon: "🔥" },
    { code: 12, category: "Adventure", image: adventure, icon: "🗺️" },
    { code: 16, category: "Animation", image: animation, icon: "🎨" },
    { code: 35, category: "Comedy", image: comedy, icon: "😂" },
    { code: 80, category: "Crime", image: crime, icon: "🕵️" },
    { code: 99, category: "Documentary", image: documentary, icon: "🎥" },
    { code: 18, category: "Drama", image: drama, icon: "🎭" },
    { code: 10751, category: "Family", image: family, icon: "👨‍👩‍👧" },
    { code: 14, category: "Fantasy", image: fantasy, icon: "🧙" },
    { code: 36, category: "History", image: history, icon: "🏛️" },
    { code: 27, category: "Horror", image: horror, icon: "👻" },
    { code: 10402, category: "Music", image: music, icon: "🎵" },
    { code: 9648, category: "Mystery", image: mystery, icon: "🔍" },
    { code: 10749, category: "Romance", image: romance, icon: "❤️" },
    {
        code: 878,
        category: "Science Fiction",
        image: scienceFiction,
        icon: "🚀",
    },
    { code: 53, category: "Thriller", image: thriller, icon: "🔪" },
    { code: 10752, category: "War", image: war, icon: "⚔️" },
]
export default function Categories() {
    const darkTheme = useSelector((state) => state.theme)

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
