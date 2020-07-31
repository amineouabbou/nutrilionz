import React from "react"
import { Link } from "gatsby"
import Styles from "../../css/post-cover.module.scss"
import Arrow from "../../assets/images/icons/arrow.svg"
import { FaRegClock } from "react-icons/fa"
import moment from "moment"
import "moment/locale/ar-ma"
moment.locale("ar-ma")

const Postcover = ({ data, urlpath, category }) => {
  const { date, title, excerpt } = data

  const { imgTtitle } = data.featuredImage
  const { sizes } = data.featuredImage.mediaDetails
  const [Thumb] = sizes.filter(item => {
    return item.name === "blog-thumb-big"
  })

  console.log(data)

  return (
    <div className={Styles.postCover}>
      <div className={Styles.thumb}>
        <img src={Thumb.sourceUrl} alt={imgTtitle} />
      </div>
      <div className={Styles.overlay}>
        <div className={Styles.metas}>
          <div className={Styles.category}>{category}</div>
          <div className={Styles.date}>
            <i>
              <FaRegClock />
            </i>
            {moment(date).fromNow()}
          </div>
        </div>
        <h3>
          <Link to={urlpath}>{title}</Link>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />

        <div className={`${Styles.readMore} d-none d-lg-block`}>
          <img src={Arrow} alt="read more" />
        </div>
      </div>
    </div>
  )
}

export default Postcover
