import React from "react"
import { Link } from "gatsby"
import Title from "../globals/Title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Excellent coffee is never a rational thing; it's a drink imbued
              with inspiration, freedom, celebration, history, dreams. It's
              about experience as much as refreshment. It's about personal
              space, about the pursuit of perfection, about the meeting of
              minds, about escape and reward. That's the Pol's Royal and it's to
              treasure.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow btn-lg">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
