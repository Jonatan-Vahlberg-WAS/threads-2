
import {
    Routes,
    Route,
    BrowserRouter,
} from 'react-router-dom';
import ListPage from './List';
import DetailPage from './Detail';


const CRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListPage/>}/>
                <Route path='/thread/:id' element={<DetailPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default CRouter;