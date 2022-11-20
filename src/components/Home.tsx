import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks"
import { fetchHomes } from "../store/home-actions"
import './Home.css'

const Home = () => {
    // useAppDispatch is a hook that reutrns a function that is used to dispatch the actions, which in turn calls the corresponding reducers
    const dispatch = useAppDispatch();
    // useAppSelector is a hook used to get the particular state from the store
    const allHomes = useAppSelector(state => state.viewHome.all_homes);
    const clickHandler = () => [
        // dispatch(fetchHomes()) will call the fetchHomes() in the home-actions.ts which does the http call and in turn they dispatch(homeActions.setHomes(response)) => which calls the reducer setTodos() in the todo-slice.ts and they would update the state in the store on line 13.
        dispatch(fetchHomes())
    ]
    const checkHomes = ():boolean => {
        if(allHomes.length === 0) {
            return false
        }
        return true
    }
   
    return(
        <>
            <div>
                <div>
                    <h3>HOMES LIST : </h3>
                    {
                    checkHomes() &&
                        allHomes.map((homes) => (
                            <div className="viewHomes-container" key={homes.id}>
                                <p className="viewHomes-child1">{homes.name}</p>
                                <p className="viewHomes-child2">{homes.address}</p>
                                <p className="viewHomes-child3">{homes.profileImage}</p>
                            </div>
                        ))
                    }
                </div>
                <button onClick={clickHandler}> Click to get Homes </button>
            </div>
        </>
    )
}
export default Home;