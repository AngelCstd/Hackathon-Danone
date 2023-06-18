import "./Hero.css"

export const Hero = ()=>{
    return(
        <section className="hero">
            <div className="hero__container">
                <img src="assets/Rectangle 1.png" alt="" className="hero__img" />
                <div className="hero__content">
                    <h2>Keep track of your daily calorie limit!</h2>
                    <p>Tell us your maximum daily calorie intake and we will recommend the products that best suit your goals!</p>
                    <button>Start now</button>
                </div>
            </div>
        </section>
    )
}