import React, { useEffect, useState } from 'react';

// CSS
import './landing.css';

// Images
import yasminPhoto from '../../Assets/Images/yasmin-photo1.png'

// Videos
import landingVideo from '../../Assets/Videos/landing-video.mp4'
import landingVideoTwo from '../../Assets/Videos/landing-video2.mp4'

function Landing() {

    // States


    return (
        <div className='landing-wrapper'>
            <div className='landing-inner-wrapper'>
                <div className='landing-info-wrapper'>
                    <div className='landing-text-wrapper'>
                        <div className='landing-text-header-wrapper'>
                            <span className='landing-text-header'> رحلة العلاج الشامل مع ياسمين: دمج العلاج المائي، السباحة، واليوجا لتحسين صحتك ورفاهيتك </span>
                        </div>
                        <div className='landing-text-content-wrapper'>
                            <span className='landing-text-content'>ياسمين هي مدرّبة صحية شاملة متخصصة في تقديم الدعم والرعاية للنساء اللواتي يسعين لتحسين صحتهن الجسدية والنفسية. كأخصائية في العلاج المائي (هيدروثيرابي) ومدرّبة سباحة ويوجا، تتمتع ياسمين بخبرة واسعة تمتد لعقود في مجالات العلاج المائي، السباحة، اليوجا، والتأمل. بدأت رحلتها المتميزة في عام 1995 عندما انضمت إلى فريق السباحة التابع لمستشفى تعمل به حتى الآن، حيث أثبتت جدارتها وتمكنت من تحقيق نجاحات باهرة تمثلت في حصولها على العديد من الميداليات الذهبية والفضية.</span>

                            <span className='landing-text-content'>بفضل تفانيها وشغفها بمساعدة النساء على تحقيق التوازن بين الجسد والعقل، حصلت ياسمين على شهادات معترف بها دولياً في مجالات السباحة، اليوجا، والعلاج المائي. تعكس هذه الإنجازات التزامها العميق بتقديم أفضل الممارسات والأساليب العلاجية التي تجمع بين القوة البدنية والهدوء النفسي.</span>

                            <span className='landing-text-content'>ياسمين تفخر بقدرتها على تمكين النساء من خلال تعليمهن تقنيات تساعدهن على التحكم في التوتر، تحسين اللياقة البدنية، وتعزيز الصحة العامة. من خلال جلساتها المخصصة، توفر ياسمين بيئة آمنة وداعمة تساعد النساء على تحقيق أهدافهن الصحية والشخصية. سواء كنتِ ترغبين في تحسين مهاراتكِ في السباحة، أو تجربة فوائد اليوجا والتأمل، أو الاستفادة من قوة العلاج المائي، فإن ياسمين هي الشريكة المثالية التي سترافقكِ في رحلتكِ نحو صحة أفضل وحياة متوازنة.</span>

                            <span className='landing-text-content'>انضمي إلى ياسمين واكتشفي كيف يمكن لخبرتها أن تكون مصدر إلهام ودعم في رحلتكِ نحو الرفاهية الشاملة.</span>
                        </div>
                    </div>

                    <div className='landing-video-wrapper'>
                        <video width="450px" padding="5%" controls>
                            <source src={landingVideo} type='video/mp4'></source>
                        </video>
                    </div>
                </div>

                <div className='landing-media-wrapper'>
                    <div className='landing-media-img-wrapper'>
                        <img className='landing-media-img-wrapper' src={yasminPhoto} />
                    </div>

                    <div className='landing-second-video-wrapper'>
                        <video width="450px" padding="5%" controls>
                            <source src={landingVideoTwo} type='video/mp4'></source>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;