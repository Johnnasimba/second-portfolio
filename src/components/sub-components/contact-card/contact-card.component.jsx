import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    align-items: flex-start;
    justify-content: space-between;
`;
const Card = styled.div`
    width: 220px;
    height: 50px;
    margin: 0px;    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    background: #1B3447;
`;


const ContactCard = () => {
    return (
        <Wrapper>
                  {/* linked in card */}
                   <Card>                 
                        <i className="fab fa-linkedin fa-2x"></i>
                       <div className="contact-title-and-link">
                           <h6>LinkedIn</h6>
                           <a href="http://https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                               John Nasimba
                           </a>
                       </div>
                    </Card>
                    {/* tell phone number card */}
                    <Card>  
                    <i className="fas fa-phone-square-alt  fa-2x"></i>
                       <div className="contact-title- -link">
                           <h6>Mobile Phone</h6>
                           <a href="https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                                +27-78-038-7591
                           </a>
                       </div>
                    </Card>
                     {/* Email card */}
                    <Card>
                       <i className="far fa-envelope  fa-2x"></i>
                       <div className="contact-title-and-link">
                           <h6>Email</h6>
                           <a href="https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer">
                               nasimba4john@gmail.com
                           </a>
                       </div>
                   </Card>
            </Wrapper>
    )
}

export default ContactCard;