import React from "react"
import { Link, Route } from "react-router-dom"

const Card = (props) => {
  const readFullHandler = ()=>{
    return <Route path={"/blog/post/"+props.e._id} render={()=><div dangerouslySetInnerHTML={setHtml()}></div>}/>
  }
  const setHtml = ()=>({
    __html:props.e.text
  })
  return (
    <div className="row">

      <div className="col s12 m7 ">
        <div className="card  cyan lighten-3">
          <div className="card-image">
            <img src={props.e.titleImg} alt="title" />
            <span className="card-title">{props.e.titleHeader}</span> 
          </div>
          <div className="card-content">
            <p>
              {props.e.titleText}
            </p>
          </div>
          <div className="card-action">
            <Link to={"/blog/post/"+props.e._id} onClick={readFullHandler}>Читать полностью</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
