import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <nav style={{
            textAlign: 'center'
        }}>
            {/* navnavnavnav */}
        </nav>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout