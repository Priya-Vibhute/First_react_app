function Card(props)
{
    return (
        <div class="col">
    <div class="card">
      <img src={props.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  </div>
    );
}


export default Card;