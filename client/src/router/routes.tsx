import { useRoutes } from "react-router-dom"
import Home from '../Home'

const Routes = () => {
    let Element = useRoutes([
        {
            path: '/',
            element: <Home />,
        }
    ])

    return Element
}

export default Routes