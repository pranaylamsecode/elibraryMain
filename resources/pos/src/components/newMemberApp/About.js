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
                                    Nagpur Digital Library
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
                                    src="public/uploads/images/achive.png"
                                    alt="Author"
                                />
                            </div>
                        </div>
                        <div
                            className="col-lg-6 aos-init"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <p>
                                Welcome to the Master Portal, your gateway to a
                                world of knowledge, exploration, and infinite
                                learning possibilities. As a pioneering digital
                                platform, we proudly connect you to the
                                Kundanlal Gupta Library, Rashtramata Kasturba
                                Library, and Dindayal Upadhyay Library. Each of
                                these esteemed E-Libraries is dedicated to
                                providing access to a vast repository of digital
                                resources, including a wide array of e-books,
                                eResources, and comprehensive catalogues of
                                physical books, ensuring that our members have
                                the best of both worlds at their fingertips.
                            </p>
                            <h4>Our Vision</h4>
                            <p>
                                We believe in democratizing access to
                                information and fostering a love for lifelong
                                learning. By integrating the digital and
                                physical realms of these libraries, we aim to
                                create a seamless and enriching experience for
                                all our members, enabling them to delve into the
                                depths of knowledge from the comfort of their
                                homes or on the go.
                            </p>
                            <h4>Features and Services</h4>
                            <li>
                                <ul>
                                    <strong>Comprehensive Access</strong>:
                                    <p>
                                        Through the Master Portal, members gain
                                        access to the individual portals of
                                        Kundanlal Gupta Library, Rashtramata
                                        Kasturba Library, and Dindayal Upadhyay
                                        Library. Each portal is a treasure trove
                                        of digital content, including thousands
                                        of e-books and eResources, along with a
                                        detailed catalogue of physical books.
                                    </p>
                                </ul>
                                <ul>
                                    <strong>
                                        Seamless Registration and Payment
                                    </strong>
                                    :
                                    <p>
                                        Membership to these libraries is made
                                        easy with our online registration and
                                        payment system. Prospective members can
                                        sign up and pay their library fees
                                        through a streamlined digital process,
                                        welcoming them into our community of
                                        avid learners.
                                    </p>
                                </ul>
                                <ul>
                                    <strong>
                                        Book Reservation and Circulation
                                    </strong>
                                    :{" "}
                                    <p>
                                        We&#39;ve embraced technology to make
                                        discovering and reserving physical books
                                        as effortless as scrolling through your
                                        device. Our digitized library management
                                        and computerized book circulation
                                        systems ensure that you can easily
                                        search for, find, and reserve books
                                        online.
                                    </p>
                                </ul>
                                <ul>
                                    <strong>
                                        Membership Cards with Barcode
                                    </strong>
                                    :{" "}
                                    <p>
                                        In our quest to blend convenience with
                                        efficiency, we request all our members
                                        to collect their membership cards
                                        equipped with a unique barcode. This
                                        barcode is essential for issuing books,
                                        symbolizing a key that unlocks endless
                                        realms of knowledge.
                                    </p>
                                </ul>
                            </li>
                            <h4>Our Commitment</h4>
                            <p>
                                At the heart of our mission is a commitment to
                                enhancing user experience, simplifying access to
                                information, and encouraging the pursuit of
                                knowledge and education. The integration of
                                these three distinguished libraries under one
                                master portal exemplifies our dedication to
                                creating a cohesive, comprehensive, and
                                user-friendly digital environment for all our
                                members.
                            </p>
                            <h4>Join Us</h4>
                            <p>
                                Embark on a journey of discovery and
                                enlightenment with us. The Master Portal is more
                                than just a platform; it&#39;s a community of
                                curious minds, scholars, and lifelong learners.
                                Register today and become part of a legacy of
                                knowledge, innovation, and educational
                                excellence.
                            </p>
                            <p>
                                We look forward to welcoming you into our
                                vibrant community and exploring the vast expanse
                                of knowledge together.
                            </p>
                            {/* <div className="authorv2__content">
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
                            </div> */}
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
            {/*  <section
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
            </section> */}
            {/*  <section className="container">
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
            </section> */}
            {/* <section
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
            </section> */}

            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => {
    const { books } = state;
    return { books };
};

export default connect(mapStateToProps, { fetchBooksAll }, null)(About);
