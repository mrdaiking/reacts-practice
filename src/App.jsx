import { useGlobalContext } from '../Strapi/Context'
import Hero from '../Strapi/Hero'
import Navbar from '../Strapi/Navbar'
import Sidebar from '../Strapi/Sidebar'
import Submenu from '../Strapi/Submenu'

const App = () => {
  const { isSidebarOpen } = useGlobalContext()
  console.log(isSidebarOpen)
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  )
}

export default App
