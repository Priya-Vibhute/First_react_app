import Card from "./Card";
import bootstrap from "./images/bootstrap.png"
import angular from "./images/angular_logo.png"
import react from "./images/react.png"
import tailwind from "./images/tailwind.png"


function Grid()
{
    return (
        <div class="row row-cols-1 row-cols-md-4 g-4 m-5 border border-dark border-3">

            <Card title="bootstrap" description="Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins." image={bootstrap}/>

            <Card title="angular" description="Angular is a web framework that empowers developers to build fast, reliable applications.
            Maintained by a dedicated team at Google, Angular provides a broad suite of tools, APIs, and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase." image={angular}/>

            
            <Card title="react" description="You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge. The techniques you’ll learn in the tutorial are fundamental to building any React app, and fully understanding it will give you a deep understanding of React." image={react}/>


            <Card title="tailwind" description=" utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup." image={tailwind}/>

        </div>

    );
}

export default Grid;