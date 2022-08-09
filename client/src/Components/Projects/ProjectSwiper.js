import { useState, useEffect } from "react";
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

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                "https://millerportfolioprojects.herokuapp.com/api/projects"
            );
            const json = await response.json();
            setProjects(json);
            console.log("fetched projects");
            return;
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
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
                {projects &&
                    projects.map((project) => (
                        <SwiperSlide key={project._id}>
                            <div id="projectSwiper__carousel--content">
                                <div id="projectSwiper__carousel--content-left">
                                    <img
                                        src={project.imgurl}
                                        alt="weather application"
                                    />
                                </div>
                                <div className="verticalLine"></div>
                                <div id="projectSwiper__carousel--content-right">
                                    <h2>{project.title}</h2>
                                    <div id="projectSwiper__carousel--content-right-description">
                                        <p>{project.description}</p>
                                        <ul>
                                            {project.languages.map(
                                                (language) => (
                                                    <li key={language}>
                                                        {language.toUpperCase()}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    {!project.processurl ? (
                                        <div id="projectSwiper__carousel--content-right-links">
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
                                        <div id="projectSwiper__carousel--content-right-links">
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
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}
