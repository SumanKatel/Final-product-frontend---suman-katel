import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Blog from "../../components/BlogPost"
import * as reducerToolsAction from "../../actions/reducerToolsAction"
import * as home from "../../services/home"

const BlogPage = (props) => {
  const {
    actions: { reducerCleanRequest },
  } = props

  useEffect(() => {
    return () => {
      reducerCleanRequest()
    }
  }, [reducerCleanRequest])

  return <Blog {...props} />
}

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({})

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, reducerToolsAction, home),
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)
