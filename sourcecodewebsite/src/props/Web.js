import React from 'react'

const Web = (props) => {
    return (
        <>
            <div className="all">
          <div className="main">
            <a href={props.url} target="__blank">
              <div className="img">
                <img src={props.imgsrc} alt={props.alts} />
              </div>

              <div className="over">
                <h5>{props.titles}</h5>
                <span>Click to Preview</span>
              </div>
            </a>
          </div>
        </div>
        </>
    )
}

export default Web;
