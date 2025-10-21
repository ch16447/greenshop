import '@/styles/Home.css'

export default function HomeComponent(){
    return (
        <>
            <section className="section__container home__section">
                <div className="home__text">
                <h1>Welcome to <span className="green__h1">GreenShop</span></h1>
                <p>Discover eco-friendly products for a better tomorrow.</p>
                <button className="show__now btn__primary">Shop Now</button>
                </div>
                <div className="home__image">
                <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shopping" />
                </div>
            </section>
        </>
    )
}