import React, { useState, useEffect } from "react";
import Images from "../../assets/Images";
import Lottie from "react-lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCreative,
    Keyboard,
    Navigation,
    Pagination,
    A11y,
    Lazy,
} from "swiper";
import "swiper/scss";
import "swiper/css/effect-creative";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/lazy";

export default function ProjectSwiper() {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: Images.logos.loadingLogo,
    };
    const errorOptions = {
        loop: true,
        autoplay: true,
        animationData: Images.logos.error,
    };

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                "https://millerportfolioprojects.herokuapp.com/api/projects"
            );
            const json = await response.json();
            setProjects(json);
            setLoading(false);
            return;
        } catch (err) {
            console.error(err.message);
            setError(true);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    let showContent;

    if (loading) {
        showContent = (
            <div>
                <Lottie options={logoOptions} height={60} width={200} />
            </div>
        );
    } else if (error) {
        showContent = (
            <div>
                <Lottie options={errorOptions} />
            </div>
        );
    } else {
        showContent = projects.map((project) => (
            <SwiperSlide key={project._id}>
                <div id="projectSwiper__carousel--content">
                    <div id="projectSwiper__carousel--content-left">
                        <img src={project.imgurl} alt="weather application" />
                    </div>
                    {!project.processurl ? (
                        <div id="projectSwiper__carousel--content-left-links">
                            <a
                                href={project.codeurl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                See the code
                                <FontAwesomeIcon
                                    icon={faLongArrowAltRight}
                                    className="icon"
                                />
                            </a>
                            <a
                                href={project.siteurl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                See the site
                                <FontAwesomeIcon
                                    icon={faLongArrowAltRight}
                                    className="icon"
                                />
                            </a>
                        </div>
                    ) : (
                        <div id="projectSwiper__carousel--content-left-links">
                            <a
                                href={project.processurl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                See the process
                                <FontAwesomeIcon
                                    icon={faLongArrowAltRight}
                                    className="icon"
                                />
                            </a>
                        </div>
                    )}
                    <div className="verticalLine"></div>
                    <div id="projectSwiper__carousel--content-right">
                        <h2>{project.title}</h2>
                        <div id="projectSwiper__carousel--content-right-description">
                            <p>{project.description}</p>
                            <ul>
                                {project.languages.map((language) => (
                                    <li key={language}>
                                        {language.toUpperCase()}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div id="projectSwiper__carousel--content-right-mobile">
                        <h2>{project.title}</h2>
                        <div id="projectSwiper__carousel--content-right-mobile-description">
                            <button
                                onClick={() => {
                                    setShowDescription(!showDescription);
                                }}
                            >
                                {showDescription
                                    ? "Show Skills Used"
                                    : "Show Description"}
                            </button>
                            {showDescription ? (
                                <p>{project.description}</p>
                            ) : (
                                <ul>
                                    {project.languages.map((language) => (
                                        <li key={language}>
                                            {language.toUpperCase()}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ));
    }

    return (
        <>
            <div id="projectSwiper">
                <Swiper
                    // install Swiper modules
                    modules={[
                        Lazy,
                        EffectCreative,
                        Keyboard,
                        Navigation,
                        Pagination,
                        A11y,
                    ]}
                    rewind={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    lazy={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    keyboard={{ enabled: true }}
                    navigation
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                        type: "progressbar",
                    }}
                >
                    {showContent}
                </Swiper>
            </div>
        </>
    );
}
