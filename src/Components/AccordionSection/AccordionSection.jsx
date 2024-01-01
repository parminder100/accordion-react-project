import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import "../AccordionSection/AccordionSection.css"
import {AccordionData} from "../AccordionData/AccordionData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const AccordionSection = () =>{
    const [showAccordion, setShowAccordion] = useState(0);

    const handleShowAccordion = (index) =>{
        setShowAccordion(index);
    }
    return(
        <>
            <main className="accordion-main">
                <section className="accordion-section">
                    <div className="accordion-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="project-heading">general questions</div>
                                    <div className="accordion-wrapper">
                                        {
                                            AccordionData.map((accordion, index)=>(
                                                <div key={accordion.id} className="accordion-container" onClick={()=>handleShowAccordion(index)}>
                                                    <div className="accordion-question-title-container">
                                                        <div className="accrodion-heading">{accordion.accordionQuestionTitle}</div>
                                                        <div className="question-btn">
                                                            <span className="plus-icon">
                                                                <FontAwesomeIcon icon={showAccordion === index ? faMinusSquare : faPlusSquare} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={`accordion-question-text-container ${showAccordion === index ? 'open' : 'hide'}`}>
                                                        <div>
                                                            {
                                                                accordion.accordionQuestionText
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default AccordionSection;