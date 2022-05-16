import React from "react";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <div className="black-bg">
                <section className="hero">
                    <div className="container">
                        <div >
                            <h1>TrueFit</h1>
                            <p>Fitness is not a destination. It's a way of life</p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="howto">
                <div className="container">
                    <h2 className="howto-header">The Key To Success</h2>
                    <div className="row howto-space ">
                        <div className=" howto-card col">
                            <img className="howto-img img-fluid" src="https://media.istockphoto.com/vectors/fresh-tasty-grilled-roasted-chicken-turkey-legs-with-vegetables-vector-id943483254?k=20&m=943483254&s=612x612&w=0&h=QcqcSxs0OA7BBdsSKkGB1rdA4aExrfPnqa0H14SgiVc=" />
                            <h2>Diet</h2>
                            <p>Whether your goal is to lose weight or gain weight, dieting is key. Cutting out bad foods will help you reach your goals in no time. Eating more nutritious foods supply the body with much needed vitamins and minerals </p>
                        </div>
                        <div className=" howto-card col">
                            <img className="howto-img2 img-fluid" src="https://media.istockphoto.com/vectors/step-to-instruction-in-push-up-vector-id578104104?s=612x612" />
                            <h2>Exercise</h2>
                            <p>Regular physical activity can improve your muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.</p>
                        </div>
                        <div className=" howto-card col">
                            <img className="howto-img3 img-fluid" src="https://endorphitness.com/wp-content/uploads/2018/02/macros-1.png" />
                            <h2>Track</h2>
                            <p>Tracking what you eat helps you understand where those calories are coming from and how they affect your body. It also helps you understand that not all calories are created equal.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="reviews">
                <h1 className="reviews-header">Reviews</h1>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="container">
                                <img src="https://b.fssta.com/uploads/application/nba/headshots/1668.png" />
                                <h4>This website changed my life!</h4>
                                <h5 className="review-name">Jimmy Butler</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="container">
                                <img src="https://static.www.nfl.com/image/private/t_headshot_desktop/league/tmxfyxkmtrx42ei4qhvn" />
                                <h4>Great and easy to use!</h4>
                                <h5 className="review-name">Saquon Barkley</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="container">
                                <img src="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30836.png&w=350&h=254" />
                                <h4>I highly recommend anyone trying to get in shape to use this site!</h4>
                                <h5 className="review-name">Mike Trout</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Home