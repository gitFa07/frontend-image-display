const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-40 w-44">
          <img
            className="h-full w-full object-cover"
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <h4 className="text-sm">{props.elem.author}</h4>
      </a>
    </div>
  )
}

export default Card
