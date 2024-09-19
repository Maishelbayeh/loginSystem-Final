import React from "react";
import { useState } from "react";
import "../homepage/home.css";
import ImageSlider from "../../components/slider/slider.jsx";
import OfferCard from "../offers/offers.jsx";
import BenefitCard from "../../components/cards/cards.jsx";
function Home() {
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const offers1 = [
        {
            image: "Fethiye.jpg",
            title: "فتحية",
            description: "أيام 4/ليالي3 ",
            offer: " دينار 492",
        },
        {
            image: "intal.jpg",
            title: "أنطاليا",
            description: "أيام 4/ليالي3 ",
            offer: "316 دينار",
        },
        {
            image: "tarb.jpg",
            title: "طرابزون",
            description: "أيام 4/ليالي3 ",
            offer: "374 دينار",
        },
        {
            image: "ista.jpg",
            title: "اسطنبول",
            description: "أيام 4/ليالي3 ",
            offer: "299 دينار",
        },
        {
            image: "marm.jpg",
            title: "مرمريس",
            description: "أيام 4/ليالي3 ",
            offer: "463 دينار",
        },
    ];
    const offers2 = [
        {
            image: "Cairo.JPG",
            title: "القاهرة",
            description: "أيام 4/ليالي3 ",
            offer: " دينار 383",
        },
        {
            image: "sharm.jpg",
            title: "شرم الشيخ",
            description: "أيام 4/ليالي3 ",
            offer: "241 دينار",
        },
        {
            image: "alexandria.jpg",
            title: "الاسكندرية",
            description: "أيام 4/ليالي3 ",
            offer: "383 دينار",
        },
        {
            image: "the.jpg",
            title: "الغردقة",
            description: "أيام 4/ليالي3 ",
            offer: "258 دينار",
        },

    ];
    const offers3 = [
        {
            image: "amman.jpg",
            title: "عمان /العقبة/ وادي رم",
            description: "أيام 4/ليالي3 ",
            offer: " دينار 75",
        },
        {
            image: "aqaba.jpg",
            title: "عمان/ العقبة/ وادي رم",
            description: "أيام 5/ليالي4 ",
            offer: "85 دينار",
        },
        {
            image: "aqaba.jpg",
            title: "عمان/ العقبة/ وادي رم",
            description: "أيام 5/ليالي4 ",
            offer: "85 دينار",
        },
        {
            image: "wadi.jpg",
            title: "عمان/ العقبة/ وادي رم",
            description: "أيام 6/ليالي5 ",
            offer: "125 دينار",
        },

    ];
    const offers4 = [
        {
            image: "makka.jpg",
            title: "رحلة عمرة جواً",
            description: "أيام8 /ليالي7 ",
            offer: " دينار ",
        },
        {
            image: "medina.jpg",
            title: "رحلة عمرة جواً",
            description: "أيام 5/ليالي4 ",
            offer: " دينار",
        },
        {
            image: "makka.jpg",
            title: "رحلة عمرة براً",
            description: "12 يوم ",
            offer: " دينار",
        },
        {
            image: "medina.jpg",
            title: "رحلة عمرة براً",
            description: "15 يوم ",
            offer: " دينار",
        },

    ];
    const [isExpanded, setIsExpanded] = useState(false);
    const benefits = [
        { title: "بكجات أسعار شاملة" },
        { title: "جولات سياحية داخلية"},
        { title: "مندوب مرافق خلال الرحلة"},
        { title: "اختيار أفضل الفنادق " },
        { title: "اسعار خاصة للأطفال" },
    ];
    return (

        <>
            <main>
                <div className="slider">
                    <ImageSlider />
                </div>
                <div className="why-us">
                    <div className="container">
                        <h2>لماذا نحن الأفضل</h2>
                        <div className="card-grid">
                            {benefits.map((benefit, index) => (
                                <BenefitCard key={index}
                                    title={benefit.title}
                                 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="journies">
                    <div className="container">
                        <span>استكشف معنا</span>
                        <h2>الرحلات السياحية</h2>
                        <h4>رحلات تركيا</h4>
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} className={`item-list ${isExpanded ? "expanded" : "collapsed"}`}>
                            {offers1.map((offer, index) => (
                                <OfferCard
                                    key={index}
                                    image={offer.image}
                                    title={offer.title}
                                    description={offer.description}
                                    offer={offer.offer}
                                />
                            ))}
                        </div>
                        {/* Toggle button */}
                        <button onClick={toggleExpand} className="toggle-button">
                            {isExpanded ? "Show Less" : "Show More"}
                        </button>
                        <h4>رحلات مصر</h4>
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} className={`item-list ${isExpanded ? "expanded" : "collapsed"}`}>
                            {offers2.map((offer, index) => (
                                <OfferCard
                                    key={index}
                                    image={offer.image}
                                    title={offer.title}
                                    description={offer.description}
                                    offer={offer.offer}
                                />
                            ))}
                        </div>
                        {/* Toggle button */}
                        <button onClick={toggleExpand} className="toggle-button">
                            {isExpanded ? "Show Less" : "Show More"}
                        </button>
                        <h4>رحلات الأردن</h4>
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} className={`item-list ${isExpanded ? "expanded" : "collapsed"}`}>
                            {offers3.map((offer, index) => (
                                <OfferCard
                                    key={index}
                                    image={offer.image}
                                    title={offer.title}
                                    description={offer.description}
                                    offer={offer.offer}
                                />
                            ))}
                        </div>
                        {/* Toggle button */}
                        <button onClick={toggleExpand} className="toggle-button">
                            {isExpanded ? "Show Less" : "Show More"}
                        </button>
                        <h4>رحلات العمرة</h4>
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} className={`item-list ${isExpanded ? "expanded" : "collapsed"}`}>
                            {offers4.map((offer, index) => (
                                <OfferCard
                                    key={index}
                                    image={offer.image}
                                    title={offer.title}
                                    description={offer.description}
                                    offer={offer.offer}
                                />
                            ))}
                        </div>
                        {/* Toggle button */}
                        <button onClick={toggleExpand} className="toggle-button">
                            {isExpanded ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>

            </main >
        </>
    )
}
export default Home