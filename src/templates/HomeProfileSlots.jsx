import logo from "../data/profileicon.png"

function HomeProfileSlots ({name, age,image, desc}){
    return(
        <section>
            <img src={logo} alt="profile pic"/>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <p>{desc}</p>
            <button>More...</button>
        </section>
    )
}

export default HomeProfileSlots