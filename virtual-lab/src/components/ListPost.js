export function ListPost(props) {
    return (
        <div>
            <p>{props.block.title}</p>
            <a href={props.block.url} target="_blank"><img src={props.block.thumbnailUrl}></img></a>
        </div>
    )
}