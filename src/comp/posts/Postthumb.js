import React from "react"
import Styles from "../../css/post-thumb.module.scss"
import { Link } from "gatsby"
import Arrow from "../../assets/images/icons/arrow.svg"
import { FaRegClock } from "react-icons/fa"
import moment from "moment"
import "moment/locale/ar-ma"
moment.locale("ar-ma")

const Postthumb = ({ data }) => {
  const {
    slug,
    title,
    date,
    featuredImage: { sourceUrl },
  } = data

  return (
    <div className={Styles.postThumb}>
      <div className={Styles.thumb}>
        <img src={sourceUrl} alt="thumb" />
      </div>
      <div className={Styles.overlay}>
        <div className={Styles.metas}>
          <div className={Styles.category}>
            {data.categories.edges.map(({ node }) => node.name)}
          </div>
          <div className={Styles.date}>
            <i>
              <FaRegClock />
            </i>
            {moment(date).fromNow()}
          </div>
        </div>
        <h3>
          <Link to={`/post/${slug}/`}>{title}</Link>
        </h3>

        <div className={`${Styles.readMore} read-more`}>
          <img src={Arrow} alt="read more" />
        </div>
      </div>
    </div>
  )
}

export default Postthumb
