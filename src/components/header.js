import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "@liberaldemocrats/logo"

import styles from './header.module.scss'

class Header extends React.Component {
  
  render() {

    return (
      <header className={styles.header}>
        <div>
          <Logo strap="Bolton" />
        </div>
        <div>
c
        </div>
      </header>
    )
  }
}


export default Header
