function UserProfilePage({id, name, age, desc}){
    console.log(`Name: ${name}, Their ID: ${id}`);
    return(
        <section key={id}>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Desc: {desc}</p>
        </section>
    )
}


export default UserProfilePage