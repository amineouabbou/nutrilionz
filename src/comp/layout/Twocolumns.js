import React from "react"

const Twocolumns = ({ children }) => {
  return (
    <main className="container">
      <div className="row">{children}</div>
    </main>
  )
}

export default Twocolumns
