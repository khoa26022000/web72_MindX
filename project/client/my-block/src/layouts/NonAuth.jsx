import { Outlet } from "react-router"


const NonAuthLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default NonAuthLayout