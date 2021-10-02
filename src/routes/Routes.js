import React from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from '../features/home/pages/HomePage';
import ItemsPage from '../features/item/pages/ItemsPage';
import StudentsPage from '../features/student/pages/StudentsPage';

export default function Routes() {
    return (
        <Switch>
        <Route path="/items">
          <ItemsPage />
        </Route>
        <Route path="/students">
          <StudentsPage />
        </Route>
        <Route path="/">
          <ItemsPage />
        </Route>
      </Switch>
    )
}
