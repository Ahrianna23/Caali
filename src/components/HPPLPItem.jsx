// Set Any Requirements needed.

const HPPLPItem = (props) => {
    
    
    return (
        <div class={props.class} id={props.parentID}>
            <img src="http://via.placeholder.com/400x400" id={props.imgID} class="animate__animated"/>
            <h3 class="animate__animated Product-Title" id={props.titleID} >Product Title</h3>
            <p class="animate__animated Product-Price" id={props.priceID}>$24.99</p>
            <a href={props.link}><div class="animate__animated hpplp-bttn" id={props.buttonID}>Buy Now</div></a>
        </div>
    )
}

export default HPPLPItem;