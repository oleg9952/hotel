import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Rooms from './Rooms/Rooms'
import Gallery from './Gallery/Gallery'
import Contact from './Contact/Contact'
import RoomPage from './Rooms/RoomPage/RoomPage'

const Content = () => {
    return (
        <div className="content_body">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/rooms" exact component={Rooms} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/rooms/:id" exact component={RoomPage} />
            </Switch>
        </div>
    )
}

export default Content
