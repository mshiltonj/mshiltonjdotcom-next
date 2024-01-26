import About from "../About"
import Categories from "../Categories"
import RecentPosts from "../RecentPosts"
import Socials from "../Socials"
export default function Aside(){
    return <aside>
       <About />
       <RecentPosts />
       <Categories />
       <Socials />
    </aside>
}