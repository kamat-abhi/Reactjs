const Contact = () => {
    return (
        <div className="p-4 m-4" >
            <h1 className="font-bold text-2xl text-center">Contact us Page</h1>
            <form className="m-4 p-4">
                <input type="text" className="border border-black m-2 p-2 text-center" placeholder="name"></input>
                <input type="text" className="border border-black m-2 p-2 text-center" placeholder="message"></input>
                <button className="bg-blue-500 text-white p-2 m-2 cursor-pointer rounded-xl">Submit</button>
            </form>
        </div>
    )
}

export default Contact;