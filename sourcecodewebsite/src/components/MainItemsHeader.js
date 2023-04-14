import MainHeader from "./MainHeader";
export default function MainItemsHeader(props) {
    return (
        <>
  
             <div className="top-heading">
              <span>{props.Heading}</span> <img src={props.HeadImg} alt={props.HeadImg} />
          </div>
        </>
    )
}
