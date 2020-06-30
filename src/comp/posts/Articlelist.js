import React from "react"
import { Link } from "gatsby"
import Styles from "../../css/article-list.module.scss"
import Arrow from "../../assets/images/icons/arrow.svg"
import moment from "moment"
import "moment/locale/ar-ma"
moment.locale("ar-ma")

const Articlelist = ({ data, urlpath, category }) => {
  const { date, title, excerpt } = data

  const { imgTtitle } = data.featuredImage
  const { sizes } = data.featuredImage.mediaDetails
  const [Thumb] = sizes.filter(item => {
    return item.name === "post-thumb-list"
  })
  return (
    <div className={Styles.articleItemList}>
      <div className="row row-10 row-xs-6">
        <div className="col-6 col-lg-5">
          <div className="thumb">
            <Link to={urlpath}>
              <img src={Thumb.sourceUrl} alt={imgTtitle} />
            </Link>
          </div>
        </div>
        <div className="col-6 col-lg-6">
          <div className={`${Styles.metas} d-none d-lg-block`}>
            <div className={Styles.category}>{category}</div>
            <div className={Styles.date}>{moment(date).fromNow()}</div>
          </div>
          <h3>
            <Link to={urlpath}>{title}</Link>
          </h3>
          <div className={`${Styles.date} ${Styles.mobile} d-block d-lg-none`}>
            {moment(date).fromNow()}
          </div>
          <div
            className="d-none d-lg-block"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <div className={`${Styles.readMore} d-none d-lg-block`}>
            <img src={Arrow} alt="read more" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articlelist
