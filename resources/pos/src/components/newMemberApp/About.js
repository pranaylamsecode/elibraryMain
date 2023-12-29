import React, { useLayoutEffect } from "react";
import ProgressBar from "../../shared/progress-bar/ProgressBar";

import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import { fetchBooksAll } from "../../member/store/actions/bookAction";

function About(props) {
    const { books, fetchBooksAll } = props;

    useLayoutEffect(() => {
        fetchBooksAll();
    }, []);

    return (
        <div className="content-wrapper">
            <ProgressBar />
            <Header />
            <section id="author" className="section-padding authorv2 ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                            <div className="section-title-center text-center">
                                <span>ABOUT E-LIBRARY</span>
                                <h2 className="display-6">
                                    Learn about the E-library
                                </h2>
                                <div className="section-divider divider-traingle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div
                            className="col-lg-6 mb-4 mb-lg-0 aos-init"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="authorv2__image">
                                <img
                                    className="img-fluid"
                                    src="images/achive.png"
                                    alt="Author"
                                />
                                <a
                                    className="glightbox3 video-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                </a>
                                <div className="promo-video">
                                    <div className="waves-block">
                                        <div className="waves wave-1"></div>
                                        <div className="waves wave-2"></div>
                                        <div className="waves wave-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 aos-init"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <p>
                                Welcome to our e-library web portal! We are a
                                team of passionate individuals dedicated to
                                providing you with the best possible online and
                                physical library experience. Our goal is to make
                                it easy and convenient for you to access an
                                extensive collection of digital books,
                                magazines, journals, and other educational
                                resources from the comfort of your own home or
                                in person at our physical location.
                            </p>
                            <p>
                                Our team is made up of experienced librarians,
                                technologists of Educron, and content experts
                                who have a deep understanding of the importance
                                of education and learning. We believe that
                                knowledge is the key to personal and
                                professional growth, and we want to help you
                                unlock your full potential through our platform
                                and physical library.
                            </p>
                            <p>
                                We strive to ensure that our e-library is
                                user-friendly, with an intuitive interface that
                                allows you to easily search for and find the
                                materials you need. Whether you're a student, a
                                researcher, or simply someone who loves to read,
                                we have something for you.
                            </p>
                            <div className="authorv2__content">
                                <ul className="social-icon mt-3">
                                    <li>
                                        <a href="https://www.facebook.com">
                                            <img
                                                className="img-fluid"
                                                src="images/facebook.svg"
                                                alt="icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com">
                                            <img
                                                className="img-fluid"
                                                src="images/twitter.svg"
                                                alt="icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com">
                                            <img
                                                className="img-fluid"
                                                src="images/linkedin.svg"
                                                alt="icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com">
                                            <img
                                                className="img-fluid"
                                                src="images/youtube-play.svg"
                                                alt="icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.whatsapp.com">
                                            <img
                                                className="img-fluid"
                                                src="images/whatsapp.svg"
                                                alt="icon"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="modal fade video_popup"
                id="exampleModalCenter"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <iframe
                                width="900"
                                height="615"
                                src="https://player.vimeo.com/video/808983383?h=81d7a35acb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <section
                id="author"
                className="section-padding authorv2 author_section_2"
            >
                <div className="container">
                    <div className="row gx-5">
                        <div
                            className="col-lg-6 aos-init"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <p>
                                In addition to our extensive digital collection,
                                we offer access to our physical library. Our
                                physical library is located in Nagpur and is
                                open during regular business hours. As a member,
                                you can browse our shelves or simply search here
                                in this portal, reserve or book the books and
                                find their location on the Racks, as well.
                            </p>
                            <p>
                                To become a member of our physical library, sign
                                up for a membership on our website or visit our
                                physical location to fill out an application.
                                Once you're a member, you'll have access to all
                                of our physical materials, as well as our online
                                collection.
                            </p>
                            <p>
                                We are constantly updating both our digital and
                                physical collections with the latest and most
                                relevant materials, so you can be sure that
                                you're always accessing the most up-to-date
                                information. We also offer a range of services
                                to help you get the most out of our platform,
                                including personalized recommendations and
                                curated reading lists.
                            </p>
                            <p>
                                At our e-library, we are committed to providing
                                you with the highest quality resources and
                                services. We value your feedback and are always
                                looking for ways to improve our platform and
                                physical library, so please don't hesitate to
                                get in touch with us if you have any suggestions
                                or comments.
                            </p>
                            <p>
                                Thank you for choosing our e-library web portal,
                                and we hope you enjoy your learning journey with
                                us, whether online or in person.
                            </p>
                        </div>
                        <div
                            className="col-lg-6 mb-4 mb-lg-0 aos-init"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="authorv2__image">
                                <img
                                    className="img-fluid"
                                    src="images/achive-2.png"
                                    alt="Author"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="d-flex flex-column align-items-start">
                    <h1>Tag Line </h1>
                    <div className="d-flex flex-column align-items-center ml-5">
                        <p className="p-0 m-0">
                            - Where Information Comes Alive
                        </p>
                        <p className="p-0 m-0">or</p>
                        <p className="p-0 m-0">- Go Anywhere, read every day</p>
                    </div>
                </div>
                <div>
                    <h1>Content</h1>
                    <p>
                        Smart City Digital Library is the online repository of
                        knowledge, where it is easy to discover the knowledge
                        from available recourse with search/browse facilities.
                        It is an innovative project mentored by Nagpur Smart and
                        Sustainable City Development Corporation Limited under
                        the Smart City Mission of Ministry of Housing and Urban
                        Affairs (MoHUA), Government of India. The objective of
                        this ambitious solution is to ease the access of the
                        readers to the right resources on the go with minimum
                        efforts. Smart City&apos;s Digital Library provides
                        Study resources that benefit all age group users, School
                        and College students, aspirants preparing for
                        competitive exams, Researchers and general learners.
                        This Digital Library is designed to hold content of
                        English, Hindi, Marathi languages. Under this project
                        traditional Libraries of Nagpur Municipal Corporation
                        are being converted to Digital libraries with the
                        facilities to have access to the resources worldwide.
                        The library is equipped with smart devices which
                        facilitates differently-able learners to gain the
                        knowledge of their choice
                    </p>
                </div>
            </section>
            <section
                id="achievements"
                className="section-padding achievement bg-one"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                            <div className="section-title-center text-center">
                                <span>Achievements</span>
                                <h2 className="display-6">
                                    Honor &amp; Awards Achieved
                                </h2>
                                <div className="section-divider divider-traingle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div
                            className="m-15px-tb aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        >
                            <div className="achievement__item h-100 translateEffect1">
                                <div className="row row-cols-2">
                                    <div className="col mt-0">
                                        <img
                                            className="img-fluid achieve_bg"
                                            src="images/1.jpg"
                                            alt="Nominated"
                                        />
                                    </div>
                                    <div className="col mt-0">
                                        <div className="achievement__content">
                                            <div className="achievement__content__icon">
                                                <img
                                                    className="img-fluid"
                                                    src="images/award.svg"
                                                    alt="icon"
                                                    width="80"
                                                />
                                            </div>
                                            <h3>Nominated</h3>
                                            <p>
                                                International Thriller Writers
                                                Award for Best Novel (These
                                                Toxic Things)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="m-15px-tb aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="150"
                        >
                            <div className="achievement__item h-100 translateEffect1">
                                <div className="row row-cols-2">
                                    <div className="col mt-0">
                                        <img
                                            className="img-fluid achieve_bg"
                                            src="images/2.jpg"
                                            alt="Winner"
                                        />
                                    </div>
                                    <div className="col mt-0">
                                        <div className="achievement__content">
                                            <div className="achievement__content__icon">
                                                <img
                                                    className="img-fluid"
                                                    src="images/award.svg"
                                                    alt="icon"
                                                    width="80"
                                                />
                                            </div>
                                            <h3>Winner</h3>
                                            <p>
                                                International Thriller Writers
                                                Award for Best Novel (These
                                                Toxic Things)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="m-15px-tb aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="achievement__item h-100 translateEffect1">
                                <div className="row row-cols-2">
                                    <div className="col mt-0">
                                        <img
                                            className="img-fluid achieve_bg"
                                            src="images/3.jpg"
                                            alt="Guest of Honor"
                                        />
                                    </div>
                                    <div className="col mt-0">
                                        <div className="achievement__content">
                                            <div className="achievement__content__icon">
                                                <img
                                                    className="img-fluid"
                                                    src="images/award.svg"
                                                    alt="icon"
                                                    width="80"
                                                />
                                            </div>
                                            <h3>Guest of Honor</h3>
                                            <p>
                                                International Thriller Writers
                                                Award for Best Novel (These
                                                Toxic Things)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="m-15px-tb aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="250"
                        >
                            <div className="achievement__item h-100 translateEffect1">
                                <div className="row row-cols-2">
                                    <div className="col mt-0">
                                        <img
                                            className="img-fluid achieve_bg"
                                            src="images/4.jpg"
                                            alt="Finalist"
                                        />
                                    </div>
                                    <div className="col mt-0">
                                        <div className="achievement__content">
                                            <div className="achievement__content__icon">
                                                <img
                                                    className="img-fluid"
                                                    src="images/award.svg"
                                                    alt="icon"
                                                    width="80"
                                                />
                                            </div>
                                            <h3>Finalist</h3>
                                            <p>
                                                International Thriller Writers
                                                Award for Best Novel (These
                                                Toxic Things)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="m-15px-tb aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                        >
                            <div className="achievement__item h-100 translateEffect1">
                                <div className="row row-cols-2">
                                    <div className="col mt-0">
                                        <img
                                            className="img-fluid achieve_bg"
                                            src="images/5.jpg"
                                            alt="Winner"
                                        />
                                    </div>
                                    <div className="col mt-0">
                                        <div className="achievement__content">
                                            <div className="achievement__content__icon">
                                                <img
                                                    className="img-fluid"
                                                    src="images/award.svg"
                                                    alt="icon"
                                                    width="80"
                                                />
                                            </div>
                                            <h3>Winner</h3>
                                            <p>
                                                International Thriller Writers
                                                Award for Best Novel (These
                                                Toxic Things)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="m-15px-tb aos-init"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="350"
                        >
                            <div className="achievement__item h-100 translateEffect1">
                                <div className="row row-cols-2">
                                    <div className="col mt-0">
                                        <img
                                            className="img-fluid achieve_bg"
                                            src="images/1.jpg"
                                            alt="Nominated"
                                        />
                                    </div>
                                    <div className="col mt-0">
                                        <div className="achievement__content">
                                            <div className="achievement__content__icon">
                                                <img
                                                    className="img-fluid"
                                                    src="images/award.svg"
                                                    alt="icon"
                                                    width="80"
                                                />
                                            </div>
                                            <h3>Nominated</h3>
                                            <p>
                                                International Thriller Writers
                                                Award for Best Novel (These
                                                Toxic Things)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding counters ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                            <div className="section-title-center text-center">
                                <span>AWESOME STATS</span>
                                <h2 className="display-6">
                                    ALL MILESTONES ACHIEVED
                                </h2>
                                <div className="section-divider divider-traingle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="counters__stats m-0 p-0 d-flex flex-wrap align-items-center justify-content-center">
                                <li
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                    className="aos-init"
                                >
                                    <div className="counters__stats-box h-100 translateEffect1">
                                        <div className="counters__stats-icon">
                                            <img
                                                className="img-fluid"
                                                src="images/page.svg"
                                                alt="icon"
                                                width="100"
                                                height="100"
                                            />
                                        </div>
                                        <div className="counters__stats-box__number">
                                            <span>{books.length}</span>
                                        </div>
                                        <h5>Books</h5>
                                    </div>
                                </li>
                                {/* <li
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="150"
                                    className="aos-init"
                                >
                                    <div className="counters__stats-box h-100 translateEffect1">
                                        <div className="counters__stats-icon">
                                            <img
                                                className="img-fluid"
                                                src="images/read-book.svg"
                                                alt="icon"
                                                width="100"
                                                height="100"
                                            />
                                        </div>
                                        <div className="counters__stats-box__number">
                                            <span>18000+</span>
                                        </div>
                                        <h5>Active Readers</h5>
                                    </div>
                                </li> */}
                                {/* <li
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                    className="aos-init"
                                >
                                    <div className="counters__stats-box h-100 translateEffect1">
                                        <div className="counters__stats-icon">
                                            <img
                                                className="img-fluid"
                                                src="images/hour-glass.svg"
                                                alt="icon"
                                                width="100"
                                                height="100"
                                            />
                                        </div>
                                        <div className="counters__stats-box__number">
                                            <span>{membersCount}</span>
                                        </div>
                                        <h5>Members</h5>
                                    </div>
                                </li> */}
                                <li
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="250"
                                    className="aos-init"
                                >
                                    <div className="counters__stats-box h-100 translateEffect1">
                                        <div className="counters__stats-icon">
                                            <img
                                                className="img-fluid"
                                                src="images/cart-alt.svg"
                                                alt="icon"
                                                width="100"
                                                height="100"
                                            />
                                        </div>
                                        <div className="counters__stats-box__number">
                                            <span>12500+</span>
                                        </div>
                                        <h5>Total Views </h5>
                                    </div>
                                </li>
                                <li
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="300"
                                    className="aos-init"
                                >
                                    <div className="counters__stats-box h-100 translateEffect1">
                                        <div className="counters__stats-icon">
                                            <img
                                                className="img-fluid"
                                                src="images/award.svg"
                                                alt="icon"
                                                width="100"
                                                height="100"
                                            />
                                        </div>
                                        <div className="counters__stats-box__number">
                                            <span>3</span>
                                        </div>
                                        <h5>Awards</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => {
    const { books } = state;
    return { books };
};

export default connect(mapStateToProps, { fetchBooksAll }, null)(About);
