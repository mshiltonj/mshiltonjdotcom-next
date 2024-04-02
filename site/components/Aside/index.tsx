import About from "../About"
import Categories from "../Categories"
import RecentPosts from "../RecentPosts"
import Socials from "../Socials"
export default function Aside(){
    return <aside className="sidebar">
       <RecentPosts />
       <Categories />
       <About />
       <Socials />
    </aside>
}