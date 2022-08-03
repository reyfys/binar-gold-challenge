import React from "react";
import { DetailExclude } from "../../staticData";
import "./detaillist.css";
import {
  AccordionItem,
  AccordionBody,
  AccordionHeader,
  UncontrolledAccordion,
} from "reactstrap";

const DetailList = (props) => {
  const { DetailInclude } = props;

  return (
    <div className="container">
      <div className="detail_list">
        <div>
          <h1>Tentang</h1>
        </div>
        <div>
          <h1>Include</h1>
          {DetailInclude.map((item) => (
            <div>
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h1>Exclude</h1>
          {DetailExclude.map((item) => (
            <div>
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <UncontrolledAccordion flush defaultOpen="1">
            <AccordionItem>
              <AccordionHeader targetId="1">
                <h1>Refund, Reschedule, Overtime</h1>
              </AccordionHeader>
              <AccordionBody accordionId="1">
                {DetailExclude.map((item) => (
                  <div>
                    <ul>
                      <li>{item}</li>
                    </ul>
                  </div>
                ))}
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
      </div>
    </div>
  );
};

export default DetailList;
