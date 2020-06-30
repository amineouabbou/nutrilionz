import React from "react"
import Postcover from "../posts/Postcover"
import "../../css/featured-posts.scss"
import img from "../../assets/images/remove/thumb1.jpg"
import img2 from "../../assets/images/remove/thumb2.jpg"
import img3 from "../../assets/images/remove/thumb3.jpg"

const Featuredposts = () => {
  return (
    <div className="featured-posts">
      <div className="row row-10">
        <div className="col-sm-4">
          <p>ss</p>
        </div>
        <div className="col-sm-8">
          <Postcover
            img={img}
            size="large"
            title="منافع جد مهمة بالنسبة لممارسي رياضة الأجسام"
          />
        </div>
      </div>
    </div>
  )
}

export default Featuredposts
