import React, { useState, useEffect } from "react"
import Layout from "../comp/Layout"
import Twocolumns from "../comp/layout/Twocolumns"
import Shareit from "../comp/Shareit"
import Fbsharedesk from "../comp/Fbsharedesk"
import Styles from "../css/recipe.module.scss"
import Breadcrumbs from "../comp/Breadcrumbs"
import plat from "../assets/images/icons/plat.svg"
import { graphql } from "gatsby"
import Seo from "../comp/Seo"
import { nativeShareIt, isMobileDevice } from "../functions/func"
import { useLocation } from "@reach/router"
import moment from "moment"
import "moment/locale/ar-ma"
moment.locale("ar-ma")

const Recipe = props => {
  const [index, setIndex] = useState(0)
  const [isMobile, setisMobile] = useState(null)
  const { pathname } = useLocation()

  const {
    wpgraphql: {
      recipe: {
        title,
        content,
        date,
        featuredImage: { sourceUrl },
      },
    },
  } = props.data

  const {
    ingredients,
    steps,
    calories,
    proteines,
    carbs,
    fat,
    serving,
  } = props.data.wpgraphql.recipe.recipeFields

  const { metaTitle, metaDescription } = props.data.wpgraphql.recipe.seoParams

  const seo = {
    title: metaTitle || title,
  }

  const { siteUrl } = props.data.site.siteMetadata

  useEffect(() => {
    isMobileFun()
  }, [])

  const shareFb = e => {
    e.preventDefault()
    nativeShareIt(seo.title, metaDescription, `${siteUrl}${pathname}`)
  }

  const isMobileFun = () => {
    if (isMobileDevice()) {
      setisMobile(true)
    }
  }

  const handleTab = e => {
    e.preventDefault()
    const currentIndex = parseFloat(e.target.dataset.index)
    setIndex(currentIndex)
  }

  return (
    <>
      <Layout>
        <Seo
          title={seo.title}
          description={metaDescription}
          article="true"
          image={sourceUrl}
        ></Seo>
        <Breadcrumbs title="وصفات" />
        <Twocolumns>
          <article className="col-lg-9">
            <div className={`blog-detail ${Styles.recipeDetail}`}>
              <div className="post-title-holder">
                <div className="title-box">
                  <h1 className="title">{title}</h1>
                </div>
                <div className="metas">
                  <div className="category">وصفات</div>
                  <div className="date">{moment(date).fromNow()}</div>
                </div>
              </div>
              <div className={`${Styles.imgHolder}`}>
                <img src={sourceUrl} alt="" />
              </div>
              <div
                className={`${Styles.nutritionFacts} d-flex flex-column flex-lg-row`}
              >
                <div
                  className={`${Styles.left} d-flex flex-lg-row w-100 justify-content-between align-items-center`}
                >
                  <div className={`${Styles.item}`}>
                    <p>سعرة حرارية</p>
                    <div>
                      <span>{calories}</span>
                    </div>
                  </div>
                  <div className={`${Styles.item}`}>
                    <p>بروتينات</p>
                    <div>
                      <span>{proteines}</span> غ
                    </div>
                  </div>
                  <div className={`${Styles.item}`}>
                    <p>كاربهيدرات</p>
                    <div>
                      <span>{carbs}</span> غ
                    </div>
                  </div>
                  <div className={`${Styles.item}`}>
                    <p>ذهون صحية</p>
                    <div>
                      <span>{fat}</span> غ
                    </div>
                  </div>
                </div>
                <div
                  className={`${Styles.servings} flex-shrink-1 d-flex align-items-center justify-content-center`}
                >
                  <div
                    className={`${Styles.plat} d-flex flex-row align-items-center`}
                  >
                    <i>
                      <img src={plat} alt="plat" />
                    </i>
                    <div>
                      <span>{serving}</span> حصص
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${Styles.std} std`}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className={`${Styles.preparation}`}>
                  <div className="row">
                    <div className="col-sm-6 d-block d-lg-none">
                      <div className={`${Styles.tabs} d-block d-lg-none`}>
                        <button
                          data-index="0"
                          className={`${Styles.item} ${
                            index === 0 ? `${Styles.active}` : ""
                          }`}
                          onClick={handleTab}
                        >
                          المكونات
                        </button>
                        <button
                          data-index="1"
                          onClick={handleTab}
                          className={`${Styles.item} ${
                            index === 1 ? `${Styles.active}` : ""
                          }`}
                        >
                          طريقة التحضير
                        </button>
                      </div>
                    </div>
                    <div
                      className={`col-sm-6 ${Styles.panelBox} ${
                        index === 0 ? `${Styles.active}` : ""
                      }`}
                    >
                      <h3 className="d-none d-lg-block">المقادير</h3>
                      <div dangerouslySetInnerHTML={{ __html: ingredients }} />
                    </div>
                    <div
                      id="directions"
                      className={`col-sm-6 ${Styles.panelBox} ${
                        Styles.directions
                      } ${index === 1 ? `${Styles.active}` : ""}`}
                    >
                      <h3 className="d-none d-lg-block">طريقة التحضير</h3>

                      <div dangerouslySetInnerHTML={{ __html: steps }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="tags">
                <strong>تغذية</strong>
                <strong>تمارين</strong>
                <strong>بروتينات</strong>
                <strong>معلومات</strong>
              </div>
              <Fbsharedesk />
            </div>
          </article>
        </Twocolumns>
      </Layout>
      {isMobile ? <Shareit sharer={shareFb} /> : ""}
    </>
  )
}

export default Recipe

export const query = graphql`
  query getRecipe($id: ID!) {
    wpgraphql {
      recipe(idType: DATABASE_ID, id: $id) {
        title
        date
        content
        featuredImage {
          sourceUrl(size: BLOG_THUMB_DETAIL)
          srcSet
        }
        recipeFields {
          calories
          carbs
          fat
          ingredients
          proteines
          serving
          steps
        }
        seoParams {
          metaTitle
          metaDescription
        }
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
