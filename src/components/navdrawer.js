import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { Link } from "gatsby"

// Images
import logoImage from "../assets/images/logo.png"

import {
  FaHome,
  FaBookOpen,
} from "react-icons/fa"

const styles = {
  list: {
    width: 250,
  },
  paper: {
    background: "#f9f9f9",
    top: 0,
  },
}

class TemporaryDrawer extends React.Component {
  state = {
    left: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes } = this.props
    const sideList = (
      <div className="navdrawer">
        <div className="navdrawer__logo">
          <img src={logoImage} alt="logo" />
        </div>
        <div className={classes.list}>
          <List>
            <Link to="/">
              <ListItem button>
                <h3 className="navdrawer__link">
                  <span className="navdrawer__icon navdrawer__icon1">
                    <FaHome />
                  </span>
                  Home
                </h3>
              </ListItem>
            </Link>

            <Link to="/books">
              <ListItem button>
                <h3 className="navdrawer__link">
                  <span className="navdrawer__icon navdrawer__icon2">
                    <FaBookOpen />
                  </span>
                  Books
                </h3>
              </ListItem>
            </Link>

            <Link to="/order">
              <ListItem button>
                <h3 className="navdrawer__link">
                  <span className="navdrawer__icon navdrawer__icon3">
                    <FaBookOpen />
                  </span>
                  Store
                </h3>
              </ListItem>
            </Link>
          </List>
        </div>
      </div>
    )

    return (
      <div className="hamburgerIcon">
        <div
          id="nav-icon"
          className={this.state.right ? "open" : "close"}
          onClick={this.toggleDrawer("right", true)}
        >
          <span />
          <span />
          <span />
        </div>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TemporaryDrawer)
