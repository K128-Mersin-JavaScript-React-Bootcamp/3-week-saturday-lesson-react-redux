import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Navigations() {
    return (
        <ul>
          <li> <Link to="/items">Items</Link></li>
          <li><Link to="/students">Students</Link></li>
        </ul>
    )
}
