function Image(props){
    return(
        <>
            <p>Hello, Image</p>
            {/* <img src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" alt="" /> */}
            <img src={props.src} alt="" />
        </>
    )
}

export default Image