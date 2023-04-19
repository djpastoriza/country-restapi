import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"


const LayoutPublic = () => {
    return (
        <>
            <Header />
            <main className="mt-7">
                {navigation.state === "loading" && (
                    <div className='alert alert-info my-5'>Loading...</div>
                )}
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default LayoutPublic