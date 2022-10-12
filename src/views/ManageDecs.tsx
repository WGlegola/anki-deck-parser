import React, { Component, Fragment } from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";

type Props = {};

type State = {};

export default class ManageDecs extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Fragment>
        <ul>
          <li>
            <Link to="newdeck">NewDeck</Link>
          </li>
        </ul>
        <Outlet />
      </Fragment>
    );
  }
}

//nested routes #291
