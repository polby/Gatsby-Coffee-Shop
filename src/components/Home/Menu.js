import React, { Component } from "react"
import Title from "../globals/Title"
import Img from "gatsby-image"

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            {/* categories */}
            {/* items */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    {/* item text */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <small>
                          <h6 className="mb-0">{node.title}</h6>
                        </small>
                        <small>
                          {" "}
                          <h6 className="mb-0 text-yellow">${node.price}</h6>
                        </small>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h2>there are no items to display</h2>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
