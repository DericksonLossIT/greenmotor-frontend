import React from "react";
import Image from "next/image";
import AmchamLogo from "../../images/amchamLogo.png";
import WowLogo from "../../images/wowLogo.png";

const AmchamSection = () => {
    return (
        <>
            <section className="partner-area bg-white">
                <div className="container">
                    <div className="row align-items-center col-lg-12">
                        <div className="custom-partner-item">
                            <Image
                                src={AmchamLogo}
                                alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                className=""
                            />
                            <div className="section-title">
                                <h2 className="text-color-black">Participante</h2>
                            </div>
                        </div>
                        <div className="custom-partner-item">
                            <Image
                                src={WowLogo}
                                alt="Logo do Sebrae que leva à notícia da Greenmotor"
                                className=""
                            />
                            <div className="section-title">
                                <h2 className="text-color-black">Finalista</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AmchamSection;