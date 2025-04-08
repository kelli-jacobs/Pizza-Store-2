

function Home(){
    return(
        <>
            <div id="one">
                <h1>{"Kelli's Pizza"}</h1>
                <form action="http://www.example.org/search.php">
                <p className="search">Search:</p>
                <input type="search" name="search"
                placeholder="Enter keyword" />
                <input type="submit" value="Search" />
                </form>


                <p className="intro">Thank you for stopping by to try our delicious pizza.  You can choose pre-built pizzas from our menu or customize your own.</p>

                <iframe id="commercial" width="560" height="315" src="https://www.youtube.com/embed/yb7PF7TyRkU?si=pVh7xT5i19ST5n7G" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <p>
                <h2 id="signin">Please sign in to start your order</h2>
                </p>

            </div>

            <div className="form">
            <fieldset className="login" id="login">
                <p className="form">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" required="required" placeholder="Username or email"/>
            
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" required="required" placeholder="Enter password"/>

                <input type="submit" value="Log In"/>
                </p>
            </fieldset>
        </div>

        </>
    )
}
export default Home;