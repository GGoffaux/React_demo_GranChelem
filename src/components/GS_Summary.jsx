
function GS_Summary({GS_Concept}) {

    const {image,title,description} = GS_Concept;
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p> {description}</p>
    </li>
  );
}

export default GS_Summary;
